export type QuestionType =
  | "multiple-choice"
  | "fill-blank"
  | "sentence-order"
  | "ox"
  | "image"
  | "listening";

/** 문제 유형별 한국어 라벨 (관리자 화면, 결과 화면 등에서 공용으로 사용) */
export const QUESTION_TYPE_LABEL: Record<QuestionType, string> = {
  "multiple-choice": "객관식",
  "fill-blank": "빈칸 채우기",
  "sentence-order": "문장 배열",
  ox: "O/X",
  image: "이미지 어휘",
  listening: "듣기",
};

/** 결과 화면의 능력치(어휘/문법/듣기) 분류에 사용 */
export type SkillCategory = "vocab" | "grammar" | "listening";

export const QUESTION_TYPE_SKILL: Record<QuestionType, SkillCategory> = {
  "multiple-choice": "grammar",
  "fill-blank": "grammar",
  "sentence-order": "grammar",
  ox: "grammar",
  image: "vocab",
  listening: "listening",
};

export interface Choice {
  id: string;
  text: string;
  emoji?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  /** 문제 본문 (빈칸은 ______ 으로 표기) */
  questionText: string;
  /** 객관식 / O-X / 이미지 / 듣기 문제의 선택지 */
  choices?: Choice[];
  /** 정답 선택지 id (선택형 문제) 또는 정답 문자열 (빈칸/문장배열) */
  correctAnswer: string;
  /** 문장 배열 문제에서 학생에게 보여줄 뒤섞인 어절 목록 */
  sentenceParts?: string[];
  explanationKo: string;
  explanationVi?: string;
  /** 이미지 어휘 문제의 큰 이모지(사진 대체) */
  imageEmoji?: string;
  unitLabel: string;
}

export interface Quiz {
  id: string;
  className: string;
  bookTitle: string;
  unitLabel: string;
  title: string;
  estimatedMinutes: number;
  questions: Question[];
}

export interface QuizListItem {
  unitNumber: number;
  unitLabel: string;
  quizId: string;
  available: boolean;
}
