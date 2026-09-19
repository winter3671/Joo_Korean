import type { Quiz, QuizListItem } from "@/types/quiz";
import unit1Session1 from "./quizzes/unit1-session1";
import unit1Session2 from "./quizzes/unit1-session2";
import { buildShortReview } from "./quiz-utils";

/**
 * 프로토타입용 mock 데이터.
 * 추후 Supabase 연동 시 이 파일 대신 lib/supabase.ts 를 통해
 * 실제 DB에서 quizzes / questions / choices 를 조회하도록 교체한다.
 *
 * lib/quizzes/*.ts 는 data/*.md 문제은행 파일을
 * scripts/md-to-quiz.mjs 로 자동 변환해 생성한 것이다.
 * 문제를 고치려면 원본 md 를 고친 뒤 스크립트를 다시 실행한다.
 */

/**
 * 홈 화면 상단 "오늘의 복습" 카드용 퀴즈.
 * 1과 1차시 전체(54문제)는 하루 복습용으로는 너무 길어서,
 * buildShortReview 로 10문제만 골고루 뽑아서 사용한다.
 * (1차시 전체 복습은 아래 LESSON_SESSIONS 의 "1차시" 버튼으로 여전히 가능하다.)
 */
const dailyReview = buildShortReview(unit1Session1, 10, {
  id: "snu3-unit1-session1-daily",
  title: "1과 1차시 오늘의 복습",
});

const quizzesById: Record<string, Quiz> = {
  [unit1Session1.id]: unit1Session1,
  [unit1Session2.id]: unit1Session2,
  [dailyReview.id]: dailyReview,
};

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzesById[quizId];
}

/** 홈 화면 "1과 복습하기"에 표시되는 차시별 목록 (차시 전체 문제은행으로 연결). */
export const LESSON_SESSIONS: QuizListItem[] = [
  {
    unitNumber: 1,
    unitLabel: "1차시",
    quizId: unit1Session1.id,
    available: true,
  },
  {
    unitNumber: 2,
    unitLabel: "2차시",
    quizId: unit1Session2.id,
    available: true,
  },
];

export const TODAY_QUIZ = {
  className: dailyReview.className,
  unitLabel: `${unit1Session1.unitLabel} 1차시`,
  quizId: dailyReview.id,
  questionCount: dailyReview.questions.length,
  estimatedMinutes: dailyReview.estimatedMinutes,
};
