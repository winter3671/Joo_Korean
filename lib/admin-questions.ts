import type { SkillCategory } from "@/types/quiz";
import { supabase, isSupabaseConfigured } from "./supabase";

/**
 * 관리자 화면("문제 만들기")에서 Supabase에 문제를 직접 등록할 때 쓰는 함수들.
 *
 * lib/quiz-repository.ts와 달리 여기는 mock 데이터로 대체하지 않는다 —
 * 관리자 등록 기능은 Supabase가 연결되어 있어야만 의미가 있기 때문에,
 * 설정이 안 되어 있거나 조회/저장이 실패하면 그대로 에러를 던져서
 * 화면에서 실패 사실을 명확히 보여준다.
 *
 * 쓰기(INSERT)는 supabase/migrations/0002_admin_write.sql 의 RLS 정책에 따라
 * 로그인한(= Supabase Auth로 인증된) 사용자만 가능하다.
 */

export interface QuizOption {
  id: string;
  unitLabel: string;
  title: string;
}

export const CATEGORY_LABEL: Record<SkillCategory, string> = {
  vocab: "어휘",
  grammar: "문법",
  listening: "듣기",
};

/** 문제를 등록할 차시(quiz) 선택 드롭다운에 쓸 목록. quizzes 테이블은 누구나 읽을 수 있어 로그인 전에도 조회 가능. */
export async function listQuizOptions(): Promise<QuizOption[]> {
  if (!isSupabaseConfigured || !supabase) return [];

  const { data, error } = await supabase
    .from("quizzes")
    .select("id, unit_label, title")
    .order("id", { ascending: true })
    .returns<{ id: string; unit_label: string; title: string }[]>();
  if (error) throw error;

  return (data ?? []).map((row) => ({
    id: row.id,
    unitLabel: row.unit_label,
    title: row.title,
  }));
}

export interface NewQuestionInput {
  quizId: string;
  /** 선택된 차시의 unitLabel (listQuizOptions로 가져온 값 그대로 전달) — unit_label 컬럼 합성에 사용. */
  quizUnitLabel: string;
  skill: SkillCategory;
  context?: string;
  questionText: string;
  choices: [string, string, string, string];
  /** 0~3, 정답 선택지의 인덱스 */
  correctIndex: number;
  explanationKo: string;
  explanationVi: string;
  explanationEn: string;
}

function randomSuffix(): string {
  return Math.random().toString(36).slice(2, 8);
}

/**
 * 문제 1개 + 선택지 4개를 Supabase에 저장한다.
 * 선택지 저장이 실패하면(예: 네트워크 오류) 방금 만든 문제 행을 다시 지워서
 * "선택지 없는 문제"가 남지 않도록 한다 — 클라이언트에서 여러 INSERT를
 * 하나의 트랜잭션으로 묶을 수 없어 수동으로 롤백하는 것.
 */
export async function insertQuestion(input: NewQuestionInput): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase가 설정되지 않았습니다. .env.local을 확인해주세요.");
  }

  const { data: lastRows, error: lastError } = await supabase
    .from("questions")
    .select("order_number")
    .eq("quiz_id", input.quizId)
    .order("order_number", { ascending: false })
    .limit(1)
    .returns<{ order_number: number }[]>();
  if (lastError) throw lastError;
  const nextOrder = (lastRows?.[0]?.order_number ?? 0) + 1;

  const questionId = `q-admin-${Date.now()}-${randomSuffix()}`;
  const unitLabel = `${input.quizUnitLabel} · ${CATEGORY_LABEL[input.skill]}`;

  const { error: insertQuestionError } = await supabase.from("questions").insert({
    id: questionId,
    quiz_id: input.quizId,
    order_number: nextOrder,
    type: "multiple-choice",
    skill: input.skill,
    unit_label: unitLabel,
    context: input.context || null,
    question_text: input.questionText,
    correct_answer: `c${input.correctIndex + 1}`,
    explanation_ko: input.explanationKo,
    explanation_vi: input.explanationVi,
    explanation_en: input.explanationEn,
  });
  if (insertQuestionError) throw insertQuestionError;

  const choiceRows = input.choices.map((text, idx) => ({
    id: `c${idx + 1}`,
    quiz_id: input.quizId,
    question_id: questionId,
    order_number: idx + 1,
    text,
  }));
  const { error: insertChoicesError } = await supabase.from("choices").insert(choiceRows);
  if (insertChoicesError) {
    await supabase.from("questions").delete().eq("quiz_id", input.quizId).eq("id", questionId);
    throw insertChoicesError;
  }
}
