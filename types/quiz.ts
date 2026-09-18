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
  /**
   * 이 문제의 능력치 분류(어휘/문법/듣기)를 명시적으로 지정한다.
   * 지금은 문제 유형을 전부 "multiple-choice"로 통일해서 만들고 있어서
   * (타이핑 부담이 적은 4지선다 위주), 유형만으로는 어휘/문법을 구분할 수 없다.
   * 이 필드가 없으면 QUESTION_TYPE_SKILL[type] 로 대체된다 (getQuestionSkill 참고).
   */
  skill?: SkillCategory;
  /**
   * 문제를 풀기 위해 먼저 읽어야 하는 참고 자료(일정표, 표, 목록, 짧은 지문 등).
   * questionText 와 시각적으로 구분해서 보여주기 위해 별도 필드로 둔다
   * (같은 자료를 공유하는 문제가 여러 개일 수 있어 문제마다 반복해서 넣는다).
   */
  context?: string;
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
  explanationEn?: string;
  /** 이미지 어휘 문제의 큰 이모지(사진 대체) */
  imageEmoji?: string;
  unitLabel: string;
}

/** 결과 화면 등에서 문제의 능력치 분류를 구할 때는 항상 이 함수를 사용한다.
 * (question.skill 이 있으면 그것을, 없으면 문제 유형 기본값을 사용) */
export function getQuestionSkill(question: Question): SkillCategory {
  return question.skill ?? QUESTION_TYPE_SKILL[question.type];
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
