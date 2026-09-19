import type { Quiz, QuizListItem, Question, Choice } from "@/types/quiz";
import { supabase, isSupabaseConfigured } from "./supabase";
import { buildShortReview } from "./quiz-utils";
import {
  getQuizById as getMockQuizById,
  LESSON_SESSIONS as MOCK_LESSON_SESSIONS,
  TODAY_QUIZ as MOCK_TODAY_QUIZ,
} from "./mock-data";

/**
 * 실제 콘텐츠(퀴즈/문제/선택지) 조회 계층.
 *
 * Supabase에 supabase/migrations/0001_quiz_content.sql 로 테이블을 만들고
 * supabase/seed_content.sql 로 데이터를 채워 넣으면 이 파일이 실제 DB를 읽는다.
 * (README.md "Supabase에 콘텐츠 이관하기" 참고)
 *
 * Supabase가 설정되지 않았거나(.env.local 없음), 테이블이 아직 없거나,
 * 조회 중 오류가 나면 자동으로 lib/mock-data.ts 의 정적 데이터로 대체된다 —
 * 마이그레이션 전이거나 로컬에서 DB 없이 화면만 확인할 때도 항상 동작하게 하기 위함.
 *
 * app/page.tsx, app/quiz/[quizId]/page.tsx 는 이 파일의 함수만 사용한다
 * (lib/mock-data.ts 를 직접 import 하지 않는다).
 */

const DAILY_SUFFIX = "-daily";
/** "오늘의 복습" 카드가 어느 차시에서 문제를 뽑을지. 지금은 1과 1차시로 고정. */
const DAILY_SOURCE_QUIZ_ID = "snu3-unit1-session1";
const DAILY_QUESTION_COUNT = 10;

interface QuizRow {
  id: string;
  class_name: string;
  book_title: string;
  unit_label: string;
  title: string;
  estimated_minutes: number;
  unit_number: number | null;
  session_number: number | null;
}

interface QuestionRow {
  id: string;
  quiz_id: string;
  order_number: number;
  type: string;
  skill: string | null;
  unit_label: string;
  context: string | null;
  question_text: string;
  correct_answer: string;
  sentence_parts: string[] | null;
  explanation_ko: string;
  explanation_vi: string | null;
  explanation_en: string | null;
  image_emoji: string | null;
}

interface ChoiceRow {
  id: string;
  quiz_id: string;
  question_id: string;
  order_number: number;
  text: string;
  emoji: string | null;
}

function rowsToQuiz(
  quizRow: QuizRow,
  questionRows: QuestionRow[],
  choiceRows: ChoiceRow[],
): Quiz {
  const choicesByQuestionId = new Map<string, Choice[]>();
  for (const c of choiceRows) {
    const list = choicesByQuestionId.get(c.question_id) ?? [];
    list.push({ id: c.id, text: c.text, ...(c.emoji ? { emoji: c.emoji } : {}) });
    choicesByQuestionId.set(c.question_id, list);
  }

  const questions: Question[] = questionRows.map((q) => ({
    id: q.id,
    type: q.type as Question["type"],
    ...(q.skill ? { skill: q.skill as NonNullable<Question["skill"]> } : {}),
    unitLabel: q.unit_label,
    ...(q.context ? { context: q.context } : {}),
    questionText: q.question_text,
    choices: choicesByQuestionId.get(q.id) ?? [],
    correctAnswer: q.correct_answer,
    ...(q.sentence_parts ? { sentenceParts: q.sentence_parts } : {}),
    explanationKo: q.explanation_ko,
    ...(q.explanation_vi ? { explanationVi: q.explanation_vi } : {}),
    ...(q.explanation_en ? { explanationEn: q.explanation_en } : {}),
    ...(q.image_emoji ? { imageEmoji: q.image_emoji } : {}),
  }));

  return {
    id: quizRow.id,
    className: quizRow.class_name,
    bookTitle: quizRow.book_title,
    unitLabel: quizRow.unit_label,
    title: quizRow.title,
    estimatedMinutes: quizRow.estimated_minutes,
    questions,
  };
}

/** DB에 실제로 존재하는 퀴즈 하나를 읽어온다 (오늘의 복습처럼 합성된 id는 처리하지 않음). */
async function fetchBaseQuizFromDb(quizId: string): Promise<Quiz | null> {
  if (!isSupabaseConfigured || !supabase) return null;

  const { data: quizRow, error: quizError } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", quizId)
    .maybeSingle<QuizRow>();
  if (quizError) throw quizError;
  if (!quizRow) return null;

  const { data: questionRows, error: questionsError } = await supabase
    .from("questions")
    .select("*")
    .eq("quiz_id", quizId)
    .order("order_number", { ascending: true })
    .returns<QuestionRow[]>();
  if (questionsError) throw questionsError;

  const { data: choiceRows, error: choicesError } = await supabase
    .from("choices")
    .select("*")
    .eq("quiz_id", quizId)
    .order("order_number", { ascending: true })
    .returns<ChoiceRow[]>();
  if (choicesError) throw choicesError;

  return rowsToQuiz(quizRow, questionRows ?? [], choiceRows ?? []);
}

async function getBaseQuizById(quizId: string): Promise<Quiz | undefined> {
  try {
    const fromDb = await fetchBaseQuizFromDb(quizId);
    if (fromDb) return fromDb;
  } catch (err) {
    // 마이그레이션 전이거나 조회 실패 시 mock으로 대체되는 건 의도된 동작이라
    // console.error 대신 warn을 써서 Next.js 개발 서버의 전체화면 에러 오버레이를 띄우지 않는다.
    console.warn(
      `[quiz-repository] Supabase에서 퀴즈(${quizId}) 조회 실패, mock 데이터로 대체합니다:`,
      err,
    );
  }
  return getMockQuizById(quizId);
}

/**
 * quizId로 퀴즈를 가져온다. "-daily" 로 끝나는 id는 실제 테이블 행이 아니라,
 * DAILY_SOURCE_QUIZ_ID 퀴즈에서 매번 동일하게 뽑히는 짧은 복습판이다
 * (buildShortReview는 순수 함수라 같은 입력이면 항상 같은 문제를 고른다).
 */
export async function getQuizById(quizId: string): Promise<Quiz | undefined> {
  if (quizId.endsWith(DAILY_SUFFIX)) {
    const baseId = quizId.slice(0, -DAILY_SUFFIX.length);
    const base = await getBaseQuizById(baseId);
    if (!base) return undefined;
    return buildShortReview(base, DAILY_QUESTION_COUNT, {
      id: quizId,
      title: `${base.title} (오늘의 복습)`,
    });
  }
  return getBaseQuizById(quizId);
}

/** 홈 화면 "1과 복습하기"에 표시되는 차시별 목록. */
export async function getLessonSessions(): Promise<QuizListItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("quizzes")
        .select("id, session_number")
        .eq("unit_number", 1)
        .order("session_number", { ascending: true })
        .returns<Pick<QuizRow, "id" | "session_number">[]>();
      if (error) throw error;
      if (data && data.length > 0) {
        return data.map((row) => ({
          unitNumber: row.session_number ?? 0,
          unitLabel: `${row.session_number}차시`,
          quizId: row.id,
          available: true,
        }));
      }
    } catch (err) {
      console.warn(
        "[quiz-repository] Supabase에서 차시 목록 조회 실패, mock 데이터로 대체합니다:",
        err,
      );
    }
  }
  return MOCK_LESSON_SESSIONS;
}

/** 홈 화면 상단 "오늘의 복습" 카드. */
export async function getTodayQuiz(): Promise<{
  className: string;
  unitLabel: string;
  quizId: string;
  questionCount: number;
  estimatedMinutes: number;
}> {
  const source = await getBaseQuizById(DAILY_SOURCE_QUIZ_ID);
  if (!source) return MOCK_TODAY_QUIZ;

  const daily = buildShortReview(source, DAILY_QUESTION_COUNT, {
    id: `${DAILY_SOURCE_QUIZ_ID}${DAILY_SUFFIX}`,
    title: `${source.title} (오늘의 복습)`,
  });

  return {
    className: daily.className,
    unitLabel: `${source.unitLabel} 1차시`,
    quizId: daily.id,
    questionCount: daily.questions.length,
    estimatedMinutes: daily.estimatedMinutes,
  };
}
