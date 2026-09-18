export interface HardQuestionStat {
  rank: number;
  grammarPoint: string;
  correctRate: number;
}

export const TEACHER_NAME = "박정석";

export const TODAY_STATS = {
  participants: 18,
  averageScore: 76,
};

export const HARD_QUESTIONS: HardQuestionStat[] = [
  { rank: 1, grammarPoint: "-다고 하던데요", correctRate: 38 },
  { rank: 2, grammarPoint: "-던데요", correctRate: 45 },
  { rank: 3, grammarPoint: "-아/어지다", correctRate: 61 },
];

export interface ClassSummary {
  id: string;
  name: string;
  bookTitle: string;
  studentCount: number;
}

export const CLASSES: ClassSummary[] = [
  { id: "snu3", name: "대구가톨릭대학교 서울대한국어 3급", bookTitle: "서울대한국어 3급", studentCount: 18 },
  { id: "sejong1b", name: "청도 가족센터 세종한국어 1B", bookTitle: "세종한국어 1B", studentCount: 12 },
];
