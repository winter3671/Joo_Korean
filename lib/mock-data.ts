import type { Quiz, QuizListItem } from "@/types/quiz";

/**
 * 프로토타입용 mock 데이터.
 * 추후 Supabase 연동 시 이 파일 대신 lib/supabase.ts 를 통해
 * 실제 DB에서 quizzes / questions / choices 를 조회하도록 교체한다.
 */

export const DEMO_QUIZ_ID = "snu3-unit7-review";

const demoQuiz: Quiz = {
  id: DEMO_QUIZ_ID,
  className: "서울대 한국어 3급",
  bookTitle: "서울대한국어 3급",
  unitLabel: "7과",
  title: "7과 수업 후 복습",
  estimatedMinutes: 5,
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      unitLabel: "7과 · 문법",
      questionText: "친구를 ______ 영화를 봤어요.",
      choices: [
        { id: "c1", text: "만나고" },
        { id: "c2", text: "만나서" },
        { id: "c3", text: "만나면" },
        { id: "c4", text: "만나니까" },
      ],
      correctAnswer: "c2",
      explanationKo:
        "'-아/어서'는 앞의 내용이 뒤의 행동의 이유나 원인이 될 때 사용합니다.\n\n친구를 만났어요. 그래서 영화를 봤어요.\n→ 친구를 만나서 영화를 봤어요.",
      explanationVi:
        "'-아/어서' được dùng khi vế trước là lý do hoặc nguyên nhân của vế sau.\n\nĐã gặp bạn. Vì vậy đã xem phim.\n→ Đã gặp bạn nên xem phim.",
      explanationEn:
        "'-아/어서' is used when the first clause is the reason or cause of the second clause.\n\nI met a friend. So I watched a movie.\n→ I met a friend, so I watched a movie.",
    },
    {
      id: "q2",
      type: "ox",
      unitLabel: "7과 · 문법",
      questionText: "'길이 막혀서 지하철을 탔어요.' 이 문장은 자연스럽다.",
      choices: [
        { id: "o", text: "O" },
        { id: "x", text: "X" },
      ],
      correctAnswer: "o",
      explanationKo:
        "'-아/어서'는 이유·원인을 나타내므로 자연스러운 문장입니다.\n\n길이 막혔어요. 그래서 지하철을 탔어요.\n→ 길이 막혀서 지하철을 탔어요.",
      explanationVi:
        "Câu này tự nhiên vì '-아/어서' diễn tả lý do, nguyên nhân.",
      explanationEn:
        "This sentence is natural because '-아/어서' expresses a reason or cause.\n\nThe road was jammed. So I took the subway.\n→ The road was jammed, so I took the subway.",
    },
    {
      id: "q3",
      type: "fill-blank",
      unitLabel: "7과 · 문법",
      questionText: "어제 친구를 ______ 영화를 봤어요. (정답을 입력하세요)",
      correctAnswer: "만나서",
      explanationKo:
        "'만나다'의 어간 '만나-'에 '-서'가 붙어 '만나서'가 됩니다. 이유·원인을 나타내는 '-아/어서'가 쓰인 문장입니다.",
      explanationVi: "Gốc động từ '만나-' + '-서' → '만나서'.",
      explanationEn:
        "The verb stem '만나-' + '-서' becomes '만나서'. This sentence uses '-아/어서', which expresses a reason or cause.",
    },
    {
      id: "q4",
      type: "sentence-order",
      unitLabel: "7과 · 문법",
      questionText: "어절을 순서대로 눌러 올바른 문장을 만드세요.",
      sentenceParts: ["친구하고", "시장에", "어제", "갔어요"],
      correctAnswer: "어제 친구하고 시장에 갔어요",
      explanationKo:
        "한국어 문장은 보통 '시간 표현 → 대상/장소 → 서술어' 순서로 씁니다.\n\n어제(시간) + 친구하고(대상) + 시장에(장소) + 갔어요(서술어)\n→ 어제 친구하고 시장에 갔어요.",
      explanationVi:
        "Thứ tự câu tiếng Hàn thường là: thời gian → đối tượng/địa điểm → vị ngữ.",
      explanationEn:
        "Korean sentences are usually ordered: time expression → object/place → predicate.\n\n어제(time) + 친구하고(with whom) + 시장에(place) + 갔어요(predicate)\n→ 어제 친구하고 시장에 갔어요.",
    },
    {
      id: "q5",
      type: "image",
      unitLabel: "7과 · 어휘",
      questionText: "이것은 무엇입니까?",
      imageEmoji: "🍢",
      choices: [
        { id: "a", text: "김밥", emoji: "🍙" },
        { id: "b", text: "비빔밥", emoji: "🍚" },
        { id: "c", text: "불고기", emoji: "🥘" },
        { id: "d", text: "떡볶이", emoji: "🌶️" },
      ],
      correctAnswer: "d",
      explanationKo:
        "떡볶이는 떡과 어묵 등을 매운 양념에 볶은 한국의 대표적인 분식입니다.",
      explanationVi: "Tteokbokki là món ăn vặt Hàn Quốc làm từ bánh gạo cay.",
      explanationEn:
        "Tteokbokki is a popular Korean street food made of rice cakes and fish cakes stir-fried in spicy sauce.",
    },
    {
      id: "q6",
      type: "listening",
      unitLabel: "7과 · 듣기",
      questionText:
        "다음 대화를 듣고 여자가 어제 무엇을 했는지 고르세요.",
      choices: [
        { id: "a", text: "영화를 봤어요" },
        { id: "b", text: "책을 읽었어요" },
        { id: "c", text: "친구를 만났어요" },
        { id: "d", text: "집에서 쉬었어요" },
      ],
      correctAnswer: "a",
      explanationKo:
        "여자: \"저는 어제 친구를 만나서 영화를 봤어요.\"\n→ 여자가 어제 한 일은 '영화를 봤어요' 입니다.",
      explanationVi: "Cô ấy nói đã gặp bạn và xem phim vào hôm qua.",
      explanationEn:
        "Woman: \"I met a friend and watched a movie yesterday.\"\n→ What the woman did yesterday was '영화를 봤어요' (watched a movie).",
    },
  ],
};

const quizzesById: Record<string, Quiz> = {
  [DEMO_QUIZ_ID]: demoQuiz,
};

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzesById[quizId];
}

/** 홈 화면의 "지난 수업 복습하기" 목록. 7과만 실제 mock 데이터가 준비되어 있다. */
export const PAST_UNITS: QuizListItem[] = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  unitNumber: n,
  unitLabel: `${n}과`,
  quizId: n === 7 ? DEMO_QUIZ_ID : `snu3-unit${n}-review`,
  available: n === 7,
}));

export const TODAY_QUIZ = {
  className: demoQuiz.className,
  unitLabel: demoQuiz.unitLabel,
  quizId: demoQuiz.id,
  questionCount: demoQuiz.questions.length,
  estimatedMinutes: demoQuiz.estimatedMinutes,
};
