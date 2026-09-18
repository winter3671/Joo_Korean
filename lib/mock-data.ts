import type { Quiz, QuizListItem } from "@/types/quiz";
import unit1Session1 from "./quizzes/unit1-session1";
import unit1Session2 from "./quizzes/unit1-session2";

/**
 * 프로토타입용 mock 데이터.
 * 추후 Supabase 연동 시 이 파일 대신 lib/supabase.ts 를 통해
 * 실제 DB에서 quizzes / questions / choices 를 조회하도록 교체한다.
 *
 * lib/quizzes/*.ts 는 data/*.md 문제은행 파일을
 * scripts/md-to-quiz.mjs 로 자동 변환해 생성한 것이다.
 * 문제를 고치려면 원본 md 를 고친 뒤 스크립트를 다시 실행한다.
 */

const quizzesById: Record<string, Quiz> = {
  [unit1Session1.id]: unit1Session1,
  [unit1Session2.id]: unit1Session2,
};

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzesById[quizId];
}

/** 홈 화면 "1과 복습하기"에 표시되는 차시별 목록. */
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
  className: unit1Session1.className,
  unitLabel: `${unit1Session1.unitLabel} 1차시`,
  quizId: unit1Session1.id,
  questionCount: unit1Session1.questions.length,
  estimatedMinutes: unit1Session1.estimatedMinutes,
};
