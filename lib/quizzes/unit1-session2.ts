// 이 파일은 scripts/md-to-quiz.mjs 로 자동 생성되었습니다.
// 원본: 2차시_문제.md
// 수정이 필요하면 원본 md 파일을 고친 뒤 스크립트를 다시 실행하세요.
import type { Quiz } from "@/types/quiz";

const quiz: Quiz = {
  "id": "snu3-unit1-session2",
  "className": "서울대 한국어 3급",
  "bookTitle": "서울대 한국어 Workbook 3A",
  "unitLabel": "1과",
  "title": "1과 2차시 복습",
  "estimatedMinutes": 12,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 장량 씨가 요즘 바쁘다고 했어요?\nB: ______\n(제시어: 아르바이트를 시작하다)",
      "choices": [
        {
          "id": "c1",
          "text": "네, 아르바이트를 시작해서 바쁘대요"
        },
        {
          "id": "c2",
          "text": "네, 아르바이트를 시작해서 바쁜대요"
        },
        {
          "id": "c3",
          "text": "네, 아르바이트를 시작해서 바빠대요"
        },
        {
          "id": "c4",
          "text": "네, 아르바이트를 시작해서 바쁘다고요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "형용사 '바쁘다'의 간접 화법 축약형은 '-대요'입니다. 따라서 '바쁘대요'가 맞습니다.",
      "explanationVi": "Dạng rút gọn của lối nói gián tiếp cho tính từ '바쁘다' (bận) là '-대요'. Vì vậy '바쁘대요' là đúng.",
      "explanationEn": "The contracted indirect speech form of the adjective '바쁘다' (busy) is '-대요'. Therefore, '바쁘대요' is correct."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 오늘 날씨가 춥다고 했어요?\nB: ______\n(제시어: 바람이 많이 불다)",
      "choices": [
        {
          "id": "c1",
          "text": "네, 바람이 많이 불어서 춥다고요"
        },
        {
          "id": "c2",
          "text": "네, 바람이 많이 불어서 춥재요"
        },
        {
          "id": "c3",
          "text": "네, 바람이 많이 불어서 춥대요"
        },
        {
          "id": "c4",
          "text": "네, 바람이 많이 불어서 추운대요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "'춥다'는 형용사이므로 간접 화법 축약형 '-대요'가 결합하여 '춥대요'가 됩니다.",
      "explanationVi": "'춥다' (lạnh) là tính từ, nên kết hợp với dạng rút gọn gián tiếp '-대요', tạo thành '춥대요'.",
      "explanationEn": "'춥다' (cold) is an adjective, so it combines with the contracted indirect form '-대요', forming '춥대요'."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 유자차가 감기에 좋다고 했어요?\nB: ______\n(제시어: 비타민이 들어 있다)",
      "choices": [
        {
          "id": "c1",
          "text": "네, 유자차에는 비타민이 들어 있어서 감기에 좋은대요"
        },
        {
          "id": "c2",
          "text": "네, 유자차에는 비타민이 들어 있어서 감기에 좋대요"
        },
        {
          "id": "c3",
          "text": "네, 유자차에는 비타민이 들어 있어서 감기에 좋재요"
        },
        {
          "id": "c4",
          "text": "네, 유자차에는 비타민이 들어 있어서 감기에 좋아대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'좋다'는 형용사이므로 간접 화법 축약형 '-대요'를 붙여 '좋대요'가 됩니다.",
      "explanationVi": "'좋다' (tốt) là tính từ, nên gắn dạng rút gọn gián tiếp '-대요', tạo thành '좋대요'.",
      "explanationEn": "'좋다' (good) is an adjective, so attaching the contracted indirect form '-대요' gives '좋대요'."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 알렉산드라 씨가 오늘 회식 때 못 온다고 했어요?\nB: ______\n(제시어: 일이 많다)",
      "choices": [
        {
          "id": "c1",
          "text": "네, 일이 많아서 오늘 회식 때 못 오대요"
        },
        {
          "id": "c2",
          "text": "네, 일이 많아서 오늘 회식 때 못 온대요"
        },
        {
          "id": "c3",
          "text": "네, 일이 많아서 오늘 회식 때 못 올대요"
        },
        {
          "id": "c4",
          "text": "네, 일이 많아서 오늘 회식 때 못 오는대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "동사 '오다'의 간접 화법 축약형은 받침이 없으므로 '-ㄴ대요'를 붙여 '온대요'가 됩니다.",
      "explanationVi": "Động từ '오다' (đến) không có patchim, nên dạng rút gọn gián tiếp gắn '-ㄴ대요', tạo thành '온대요'.",
      "explanationEn": "The verb '오다' (to come) has no final consonant, so the contracted indirect form attaches '-ㄴ대요', forming '온대요'."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 토마스 씨가 그 강의를 안 듣는다고 했어요?\nB: ______\n(제시어: 시간이 안 맞다)",
      "choices": [
        {
          "id": "c1",
          "text": "네, 시간이 안 맞아서 못 듣대요"
        },
        {
          "id": "c2",
          "text": "네, 시간이 안 맞아서 못 들은대요"
        },
        {
          "id": "c3",
          "text": "네, 시간이 안 맞아서 못 들을대요"
        },
        {
          "id": "c4",
          "text": "네, 시간이 안 맞아서 못 듣는대요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "동사 '듣다'에 받침이 있으므로 간접 화법 축약형 '-는대요'가 결합하여 '듣는대요'가 맞습니다. ㄷ 불규칙이 적용되지 않습니다.",
      "explanationVi": "Động từ '듣다' (nghe) có patchim, nên dạng rút gọn gián tiếp '-는대요' được kết hợp vào, nên '듣는대요' là đúng. Quy tắc bất quy tắc ㄷ không áp dụng ở đây.",
      "explanationEn": "The verb '듣다' (to listen) has a final consonant, so the contracted indirect form '-는대요' combines with it, making '듣는대요' correct. The ㄷ irregular rule does not apply here."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 회식 장소가 어디라고 했어요?\nB: ______\n(제시어: 서울갈비)",
      "choices": [
        {
          "id": "c1",
          "text": "서울갈비대요"
        },
        {
          "id": "c2",
          "text": "서울갈비이대요"
        },
        {
          "id": "c3",
          "text": "서울갈비래요"
        },
        {
          "id": "c4",
          "text": "서울갈비재요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "명사 '서울갈비'는 받침이 없으므로 간접 화법 축약형 '-래요'를 붙여 '서울갈비래요'가 됩니다.",
      "explanationVi": "Danh từ '서울갈비' không có patchim, nên gắn dạng rút gọn gián tiếp '-래요', tạo thành '서울갈비래요'.",
      "explanationEn": "The noun '서울갈비' has no final consonant, so attaching the contracted indirect form '-래요' gives '서울갈비래요'."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 미소 씨 생일이 언제라고 했지요?\nB: ______\n(제시어: 오늘)",
      "choices": [
        {
          "id": "c1",
          "text": "오늘대요"
        },
        {
          "id": "c2",
          "text": "오늘이래요"
        },
        {
          "id": "c3",
          "text": "오늘래요"
        },
        {
          "id": "c4",
          "text": "오늘이대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "명사 '오늘'은 받침이 있으므로 간접 화법 축약형 '-이래요'를 결합하여 '오늘이래요'가 됩니다.",
      "explanationVi": "Danh từ '오늘' (hôm nay) có patchim, nên kết hợp dạng rút gọn gián tiếp '-이래요', tạo thành '오늘이래요'.",
      "explanationEn": "The noun '오늘' (today) has a final consonant, so combining the contracted indirect form '-이래요' gives '오늘이래요'."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 한국 신문을 안 읽다 / 이해할 수 없다)\nA: 수잔 씨가 왜 (가) ______?\nB: 너무 어려워서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 한국 신문을 안 읽은대요 - (나) 이해할 수 없는대요"
        },
        {
          "id": "c2",
          "text": "(가) 한국 신문을 안 읽는대요 - (나) 이해할 수 없대요"
        },
        {
          "id": "c3",
          "text": "(가) 한국 신문을 안 읽대요 - (나) 이해할 수 없대요"
        },
        {
          "id": "c4",
          "text": "(가) 한국 신문을 안 읽는대요 - (나) 이해할 수 없은대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'읽다'는 동사이므로 '-는대요'가 붙어 '읽는대요', '없다'는 형용사처럼 활용하여 '-대요'가 붙어 '없대요'가 됩니다.",
      "explanationVi": "'읽다' (đọc) là động từ, nên gắn '-는대요' thành '읽는대요'; '없다' (không có) chia giống tính từ, nên gắn '-대요' thành '없대요'.",
      "explanationEn": "'읽다' (to read) is a verb, so '-는대요' is attached, forming '읽는대요'; '없다' (to not have) conjugates like an adjective, so '-대요' is attached, forming '없대요'."
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 전공하고 싶다 / 스페인어를 전공하고 싶다)\nA: 제니 씨가 뭘 (가) ______?\nB: 외국어 공부를 좋아해서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 전공하고 싶은대요 - (나) 스페인어를 전공하고 싶은대요"
        },
        {
          "id": "c2",
          "text": "(가) 전공하고 싶대요 - (나) 스페인어를 전공하고 싶대요"
        },
        {
          "id": "c3",
          "text": "(가) 전공하고 싶는대요 - (나) 스페인어를 전공하고 싶는대요"
        },
        {
          "id": "c4",
          "text": "(가) 전공하고 싶다대요 - (나) 스페인어를 전공하고 싶다대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'-고 싶다'는 형용사처럼 활용하므로 간접 화법 축약형 '-대요'가 붙어 '싶대요'가 됩니다.",
      "explanationVi": "'-고 싶다' (muốn) chia giống tính từ, nên dạng rút gọn gián tiếp '-대요' được gắn vào, tạo thành '싶대요'.",
      "explanationEn": "'-고 싶다' (want to) conjugates like an adjective, so the contracted indirect form '-대요' is attached, forming '싶대요'."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 모임에 참석 못 하다 / 참석 못 하다)\nA: 크리스 씨가 왜 (가) ______?\nB: 다리를 다쳐서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 모임에 참석 못 하대요 - (나) 참석 못 하대요"
        },
        {
          "id": "c2",
          "text": "(가) 모임에 참석 못 한대요 - (나) 참석 못 한대요"
        },
        {
          "id": "c3",
          "text": "(가) 모임에 참석 못 하는대요 - (나) 참석 못 하는대요"
        },
        {
          "id": "c4",
          "text": "(가) 모임에 참석 못 할대요 - (나) 참석 못 할대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'하다'는 동사이므로 받침 없는 동사에 붙는 '-ㄴ대요'를 써서 '한대요'가 맞습니다.",
      "explanationVi": "'하다' (làm) là động từ, nên dùng '-ㄴ대요', dạng gắn cho động từ không có patchim, nên '한대요' là đúng.",
      "explanationEn": "'하다' (to do) is a verb, so '-ㄴ대요', the form attached to verbs without a final consonant, is used, making '한대요' correct."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 좋아하다 / 좋아하다)\nA: 민수 씨가 왜 설렁탕을 (가) ______?\nB: 맵지 않아서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 좋아하는대요 - (나) 좋아하는대요"
        },
        {
          "id": "c2",
          "text": "(가) 좋아하대요 - (나) 좋아하대요"
        },
        {
          "id": "c3",
          "text": "(가) 좋아한대요 - (나) 좋아한대요"
        },
        {
          "id": "c4",
          "text": "(가) 좋을대요 - (나) 좋을대요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "동사 '좋아하다'는 받침이 없으므로 간접 화법 축약형 '-ㄴ대요'가 결합하여 '좋아한대요'가 됩니다.",
      "explanationVi": "Động từ '좋아하다' (thích) không có patchim, nên dạng rút gọn gián tiếp '-ㄴ대요' được kết hợp vào, tạo thành '좋아한대요'.",
      "explanationEn": "The verb '좋아하다' (to like) has no final consonant, so the contracted indirect form '-ㄴ대요' combines with it, forming '좋아한대요'."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 결혼하다 / 내년에 하다)\nA: 토모미 씨가 언제 (가) ______?\nB: 올해는 일이 바빠서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 결혼한대요 - (나) 내년에 한대요"
        },
        {
          "id": "c2",
          "text": "(가) 결혼하대요 - (나) 내년에 하대요"
        },
        {
          "id": "c3",
          "text": "(가) 결혼하는대요 - (나) 내년에 하는대요"
        },
        {
          "id": "c4",
          "text": "(가) 결혼할대요 - (나) 내년에 할대요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "동사 '하다'는 받침이 없으므로 '-ㄴ대요'를 붙여 '결혼한대요', '한대요'가 맞습니다.",
      "explanationVi": "Động từ '하다' (làm) không có patchim, nên gắn '-ㄴ대요' tạo thành '결혼한대요', '한대요' là đúng.",
      "explanationEn": "The verb '하다' (to do) has no final consonant, so attaching '-ㄴ대요' correctly forms '결혼한대요' and '한대요'."
    },
    {
      "id": "q13",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 어디 / 예술의전당에 자주 간다)\nA: 수넷 씨가 자주 가는 곳이 (가) ______?\nB: 공연을 좋아해서 (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 어디이래요 - (나) 예술의전당에 자주 간대요"
        },
        {
          "id": "c2",
          "text": "(가) 어디래요 - (나) 예술의전당에 자주 간대요"
        },
        {
          "id": "c3",
          "text": "(가) 어디대요 - (나) 예술의전당에 자주 가대요"
        },
        {
          "id": "c4",
          "text": "(가) 어디이대요 - (나) 예술의전당에 자주 가는대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "명사 '어디'는 받침이 없으므로 '-래요', 동사 '가다'는 받침이 없으므로 '-ㄴ대요'가 붙어 '어디래요', '간대요'가 됩니다.",
      "explanationVi": "Danh từ '어디' (đâu) không có patchim nên gắn '-래요'; động từ '가다' (đi) không có patchim nên gắn '-ㄴ대요', tạo thành '어디래요', '간대요'.",
      "explanationEn": "The noun '어디' (where) has no final consonant, so '-래요' is attached; the verb '가다' (to go) has no final consonant, so '-ㄴ대요' is attached, forming '어디래요' and '간대요'."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 어떻다 / 요즘 덥고 습하다)\nA: 안나 씨가 고향 날씨가 (가) ______?\nB: (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 어떤대요 - (나) 요즘 덥고 습한대요"
        },
        {
          "id": "c2",
          "text": "(가) 어떻대요 - (나) 요즘 덥고 습하대요"
        },
        {
          "id": "c3",
          "text": "(가) 어떻는대요 - (나) 요즘 덥고 습하는대요"
        },
        {
          "id": "c4",
          "text": "(가) 어떻은대요 - (나) 요즘 덥고 습하은대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "형용사 '어떻다', '습하다'는 '-대요'가 결합하여 '어떻대요', '습하대요'가 됩니다.",
      "explanationVi": "Tính từ '어떻다' (thế nào), '습하다' (ẩm ướt) kết hợp với '-대요', tạo thành '어떻대요', '습하대요'.",
      "explanationEn": "The adjectives '어떻다' (how/what kind) and '습하다' (humid) combine with '-대요', forming '어떻대요' and '습하대요'."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸 (가)와 (나)에 들어갈 말로 알맞게 짝지어진 것을 고르십시오.\n(제시어: 어떻다 / 사람들도 친절하고 생활도 재미있다)\nA: 카를로스 씨가 한국 생활이 (가) ______?\nB: (나) ______.",
      "choices": [
        {
          "id": "c1",
          "text": "(가) 어떤대요 - (나) 사람들도 친절하고 생활도 재미있은대요"
        },
        {
          "id": "c2",
          "text": "(가) 어떻는대요 - (나) 사람들도 친절하고 생활도 재미있는대요"
        },
        {
          "id": "c3",
          "text": "(가) 어떻대요 - (나) 사람들도 친절하고 생활도 재미있대요"
        },
        {
          "id": "c4",
          "text": "(가) 어떻은대요 - (나) 사람들도 친절하고 생활도 재미있을대요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "형용사 '어떻다', '재미있다' 모두 간접 화법 축약형 '-대요'가 결합하여 '어떻대요', '재미있대요'가 됩니다.",
      "explanationVi": "Tính từ '어떻다' (thế nào) và '재미있다' (thú vị) đều kết hợp với dạng rút gọn gián tiếp '-대요', tạo thành '어떻대요', '재미있대요'.",
      "explanationEn": "Both the adjectives '어떻다' (how) and '재미있다' (fun) combine with the contracted indirect form '-대요', forming '어떻대요' and '재미있대요'."
    },
    {
      "id": "q16",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법으로 알맞게 변형한 것을 고르십시오.\n선생님: 그 사람은 주말마다 영화를 봐요.\n학생: 그 사람은 주말마다 영화를 본다고 했어요.\n\n선생님: 민수 씨는 노래를 잘 불러요.\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "민수 씨는 노래를 잘 불러다고 했어요"
        },
        {
          "id": "c2",
          "text": "민수 씨는 노래를 잘 부른다고 했어요"
        },
        {
          "id": "c3",
          "text": "민수 씨는 노래를 잘 부르는다고 했어요"
        },
        {
          "id": "c4",
          "text": "민수 씨는 노래를 잘 불러자고 했어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "동사 '부르다'의 기본형 어간에 받침이 없으므로 '-ㄴ다고 하다'가 결합하여 '부른다고 했어요'가 됩니다.",
      "explanationVi": "Thân từ gốc của động từ '부르다' (hát) không có patchim, nên kết hợp với '-ㄴ다고 하다', tạo thành '부른다고 했어요'.",
      "explanationEn": "The base stem of the verb '부르다' (to sing) has no final consonant, so it combines with '-ㄴ다고 하다', forming '부른다고 했어요'."
    },
    {
      "id": "q17",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법으로 알맞게 변형한 것을 고르십시오.\n선생님: 카렌 씨는 음식을 맛있게 만들어요.\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "카렌 씨는 음식을 맛있게 만들다고 했어요"
        },
        {
          "id": "c2",
          "text": "카렌 씨는 음식을 맛있게 만든다고 했어요"
        },
        {
          "id": "c3",
          "text": "카렌 씨는 음식을 맛있게 만드는다고 했어요"
        },
        {
          "id": "c4",
          "text": "카렌 씨는 음식을 맛있게 만들어다고 했어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'만들다'는 'ㄹ' 받침 동사이므로 '-ㄴ다고 하다'가 결합할 때 'ㄹ'이 탈락하여 '만든다고 했어요'가 됩니다.",
      "explanationVi": "'만들다' (làm ra) là động từ có patchim 'ㄹ', nên khi kết hợp với '-ㄴ다고 하다', âm 'ㄹ' bị lược bỏ, tạo thành '만든다고 했어요'.",
      "explanationEn": "'만들다' (to make) is a verb ending in 'ㄹ', so when combined with '-ㄴ다고 하다', the 'ㄹ' is dropped, forming '만든다고 했어요'."
    },
    {
      "id": "q18",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법으로 알맞게 변형한 것을 고르십시오.\n선생님: 사진 두 장이 필요해요.\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "사진 두 장이 필요한다고 했어요"
        },
        {
          "id": "c2",
          "text": "사진 두 장이 필요하는다고 했어요"
        },
        {
          "id": "c3",
          "text": "사진 두 장이 필요하자고 했어요"
        },
        {
          "id": "c4",
          "text": "사진 두 장이 필요하다고 했어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "'필요하다'는 형용사이므로 기본형에 바로 '-다고 하다'를 붙여 '필요하다고 했어요'가 됩니다.",
      "explanationVi": "'필요하다' (cần thiết) là tính từ, nên gắn trực tiếp '-다고 하다' vào dạng cơ bản, tạo thành '필요하다고 했어요'.",
      "explanationEn": "'필요하다' (necessary) is an adjective, so '-다고 하다' is attached directly to the base form, forming '필요하다고 했어요'."
    },
    {
      "id": "q19",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법으로 알맞게 변형한 것을 고르십시오.\n선생님: '친구'라는 영화가 재미있어요.\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "'친구'라는 영화가 재미있는다고 했어요"
        },
        {
          "id": "c2",
          "text": "'친구'라는 영화가 재미있었다고 했어요"
        },
        {
          "id": "c3",
          "text": "'친구'라는 영화가 재미있다고 했어요"
        },
        {
          "id": "c4",
          "text": "'친구'라는 영화가 재미있자고 했어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "'재미있다'는 '있다'가 포함된 형용사이므로 '-다고 하다'가 결합하여 '재미있다고 했어요'가 됩니다.",
      "explanationVi": "'재미있다' (thú vị) là tính từ có chứa '있다', nên kết hợp với '-다고 하다', tạo thành '재미있다고 했어요'.",
      "explanationEn": "'재미있다' (fun/interesting) is an adjective containing '있다', so it combines with '-다고 하다', forming '재미있다고 했어요'."
    },
    {
      "id": "q20",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\n선생님: 다음 주에 중요한 시험이 있지요?\n학생: 네, 열심히 공부해야겠어요. (제시어: 열심히 공부하다)\n\n선생님: 내일이 수진 씨 생일이지요?\n학생: 네, ______ (제시어: 파티 준비를 하다)",
      "choices": [
        {
          "id": "c1",
          "text": "파티 준비를 하면 좋겠어요"
        },
        {
          "id": "c2",
          "text": "파티 준비를 해야겠어요"
        },
        {
          "id": "c3",
          "text": "파티 준비를 할 수 있겠어요"
        },
        {
          "id": "c4",
          "text": "파티 준비를 하려고 해요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "화자의 의지나 필요성을 나타내는 '-아야/어야겠다'가 '하다'와 결합하여 '해야겠어요'가 됩니다.",
      "explanationVi": "'-아야/어야겠다', diễn tả ý chí hoặc sự cần thiết của người nói, kết hợp với '하다' (làm), tạo thành '해야겠어요'.",
      "explanationEn": "'-아야/어야겠다', which expresses the speaker's intention or necessity, combines with '하다' (to do), forming '해야겠어요'."
    },
    {
      "id": "q21",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\n선생님: 방학 때 고향에 가지요?\n학생: 네, ______ (제시어: 비행기 표를 예약하다)",
      "choices": [
        {
          "id": "c1",
          "text": "비행기 표를 예약하겠어요"
        },
        {
          "id": "c2",
          "text": "비행기 표를 예약해야겠어요"
        },
        {
          "id": "c3",
          "text": "비행기 표를 예약하면 좋겠어요"
        },
        {
          "id": "c4",
          "text": "비행기 표를 예약할 거예요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'예약하다'에 '-아야/어야겠다'가 결합하면 '예약해야겠어요'가 됩니다.",
      "explanationVi": "Khi '-아야/어야겠다' kết hợp với '예약하다' (đặt trước), tạo thành '예약해야겠어요'.",
      "explanationEn": "When '-아야/어야겠다' combines with '예약하다' (to reserve/book), it forms '예약해야겠어요'."
    },
    {
      "id": "q22",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\n선생님: 머리가 너무 기네요.\n학생: 네, ______ (제시어: 자르다)",
      "choices": [
        {
          "id": "c1",
          "text": "자르야겠어요"
        },
        {
          "id": "c2",
          "text": "자라야겠어요"
        },
        {
          "id": "c3",
          "text": "잘라야겠어요"
        },
        {
          "id": "c4",
          "text": "자르어겠어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "'자르다'는 '르' 불규칙 동사로, 모음 어미 '-아야겠다'와 만나면 '잘라야겠어요'로 바뀝니다.",
      "explanationVi": "'자르다' (cắt) là động từ bất quy tắc '르', khi gặp đuôi từ có nguyên âm '-아야겠다' sẽ đổi thành '잘라야겠어요'.",
      "explanationEn": "'자르다' (to cut) is a '르' irregular verb, and when it meets the vowel-starting ending '-아야겠다', it changes to '잘라야겠어요'."
    },
    {
      "id": "q23",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "주어진 제시어를 활용하여 대화의 빈칸에 알맞은 것을 고르십시오.\n선생님: 민호 씨가 아직도 안 왔네요.\n학생: 네, ______ (제시어: 연락해 보다)",
      "choices": [
        {
          "id": "c1",
          "text": "연락해 보야겠어요"
        },
        {
          "id": "c2",
          "text": "연락해 봐야겠어요"
        },
        {
          "id": "c3",
          "text": "연락해 보겠어요"
        },
        {
          "id": "c4",
          "text": "연락해 보면 좋겠어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'보다'의 어간 모음이 'ㅗ'이므로 '-아야겠다'와 만나 축약되어 '봐야겠어요'가 됩니다.",
      "explanationVi": "Vì nguyên âm thân từ của '보다' (xem/thử) là 'ㅗ', nên khi gặp '-아야겠다' nó được rút gọn thành '봐야겠어요'.",
      "explanationEn": "Since the stem vowel of '보다' (to see/try) is 'ㅗ', when it meets '-아야겠다' it contracts to '봐야겠어요'."
    },
    {
      "id": "q24",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 질문에 대해 알맞은 간접화법 대답을 고르십시오.\n선생님: 어느 시장이 물건값이 싼지 아세요?\n학생: 남대문시장이 싸다고 들었어요. (제시어: 남대문시장)\n\n선생님: 지금 고향 날씨가 어떤지 아세요?\n학생: ______ (제시어: 춥다)",
      "choices": [
        {
          "id": "c1",
          "text": "춥자고 들었어요"
        },
        {
          "id": "c2",
          "text": "추운다고 들었어요"
        },
        {
          "id": "c3",
          "text": "춥다고 들었어요"
        },
        {
          "id": "c4",
          "text": "춥라고 들었어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "형용사 '춥다'에 간접 화법 '-다고 듣다'가 결합하여 '춥다고 들었어요'가 됩니다.",
      "explanationVi": "Tính từ '춥다' (lạnh) kết hợp với lối nói gián tiếp '-다고 듣다', tạo thành '춥다고 들었어요'.",
      "explanationEn": "The adjective '춥다' (cold) combines with the indirect speech form '-다고 듣다', forming '춥다고 들었어요'."
    },
    {
      "id": "q25",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 질문에 대해 알맞은 간접화법 대답을 고르십시오.\n선생님: 마이클 씨가 어디에 사는지 아세요?\n학생: ______ (제시어: 독일)",
      "choices": [
        {
          "id": "c1",
          "text": "독일에 산다고 들었어요"
        },
        {
          "id": "c2",
          "text": "독일에 살다고 들었어요"
        },
        {
          "id": "c3",
          "text": "독일이라고 들었어요"
        },
        {
          "id": "c4",
          "text": "독일에 사는다고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "장소를 나타내는 부사격 조사 '에'와 동사 '살다'가 쓰입니다. '살다'에 '-ㄴ다고 듣다'가 결합할 때 'ㄹ'이 탈락하여 '산다고 들었어요'가 됩니다.",
      "explanationVi": "Trợ từ chỉ nơi chốn '에' và động từ '살다' (sống) được sử dụng. Khi '살다' kết hợp với '-ㄴ다고 듣다', âm 'ㄹ' bị lược bỏ, tạo thành '산다고 들었어요'.",
      "explanationEn": "The locative particle '에' and the verb '살다' (to live) are used. When '살다' combines with '-ㄴ다고 듣다', the 'ㄹ' is dropped, forming '산다고 들었어요'."
    },
    {
      "id": "q26",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 질문에 대해 알맞은 간접화법 대답을 고르십시오.\n선생님: 밍밍 씨가 뭘 잘 먹는지 아세요?\n학생: ______ (제시어: 비빔밥)",
      "choices": [
        {
          "id": "c1",
          "text": "비빔밥을 잘 먹자고 들었어요"
        },
        {
          "id": "c2",
          "text": "비빔밥을 잘 먹으라고 들었어요"
        },
        {
          "id": "c3",
          "text": "비빔밥을 잘 먹다고 들었어요"
        },
        {
          "id": "c4",
          "text": "비빔밥을 잘 먹는다고 들었어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "동사 '먹다'는 받침이 있으므로 간접 화법 '-는다고 듣다'가 결합하여 '먹는다고 들었어요'가 됩니다.",
      "explanationVi": "Động từ '먹다' (ăn) có patchim, nên kết hợp với lối nói gián tiếp '-는다고 듣다', tạo thành '먹는다고 들었어요'.",
      "explanationEn": "The verb '먹다' (to eat) has a final consonant, so it combines with the indirect speech form '-는다고 듣다', forming '먹는다고 들었어요'."
    },
    {
      "id": "q27",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 질문에 대해 알맞은 간접화법 대답을 고르십시오.\n선생님: 회의가 몇 시인지 아세요?\n학생: ______ (제시어: 4시)",
      "choices": [
        {
          "id": "c1",
          "text": "4시라고 들었어요"
        },
        {
          "id": "c2",
          "text": "4시다고 들었어요"
        },
        {
          "id": "c3",
          "text": "4시이라고 들었어요"
        },
        {
          "id": "c4",
          "text": "4시자고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '시'는 받침이 없으므로 '-라고 듣다'가 결합하여 '4시라고 들었어요'가 됩니다.",
      "explanationVi": "Danh từ '시' (giờ) không có patchim, nên kết hợp với '-라고 듣다', tạo thành '4시라고 들었어요'.",
      "explanationEn": "The noun '시' (o'clock) has no final consonant, so it combines with '-라고 듣다', forming '4시라고 들었어요'."
    },
    {
      "id": "q28",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법 축약형으로 알맞게 변형한 것을 고르십시오.\n선생님: 오늘 날씨가 따뜻해요?\n학생: 네, 따뜻하대요.\n\n선생님: 그 수업이 인기가 많아요?\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "네, 인기가 많은대요"
        },
        {
          "id": "c2",
          "text": "네, 인기가 많대요"
        },
        {
          "id": "c3",
          "text": "네, 인기가 많으대요"
        },
        {
          "id": "c4",
          "text": "네, 인기가 많는대요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "형용사 '많다'의 간접 화법 축약형은 '-대요'이므로 '많대요'가 됩니다.",
      "explanationVi": "Dạng rút gọn gián tiếp của tính từ '많다' (nhiều) là '-대요', nên tạo thành '많대요'.",
      "explanationEn": "The contracted indirect form of the adjective '많다' (many/much) is '-대요', so it becomes '많대요'."
    },
    {
      "id": "q29",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법 축약형으로 알맞게 변형한 것을 고르십시오.\n선생님: 민수 씨도 졸업식에 참석해요?\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "네, 참석하대요"
        },
        {
          "id": "c2",
          "text": "네, 참석하는대요"
        },
        {
          "id": "c3",
          "text": "네, 참석한대요"
        },
        {
          "id": "c4",
          "text": "네, 참석할대요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "동사 '참석하다'는 받침 없는 동사이므로 간접 화법 축약형 '-ㄴ대요'를 붙여 '참석한대요'가 됩니다.",
      "explanationVi": "Động từ '참석하다' (tham dự) không có patchim, nên gắn dạng rút gọn gián tiếp '-ㄴ대요', tạo thành '참석한대요'.",
      "explanationEn": "The verb '참석하다' (to attend) has no final consonant, so attaching the contracted indirect form '-ㄴ대요' gives '참석한대요'."
    },
    {
      "id": "q30",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법 축약형으로 알맞게 변형한 것을 고르십시오.\n선생님: 바바라 씨도 매운 음식을 잘 먹어요?\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "네, 매운 음식을 잘 먹대요"
        },
        {
          "id": "c2",
          "text": "네, 매운 음식을 잘 먹은대요"
        },
        {
          "id": "c3",
          "text": "네, 매운 음식을 잘 먹을대요"
        },
        {
          "id": "c4",
          "text": "네, 매운 음식을 잘 먹는대요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "동사 '먹다'는 받침이 있으므로 '-는대요'가 결합하여 '먹는대요'가 됩니다.",
      "explanationVi": "Động từ '먹다' (ăn) có patchim, nên kết hợp với '-는대요', tạo thành '먹는대요'.",
      "explanationEn": "The verb '먹다' (to eat) has a final consonant, so it combines with '-는대요', forming '먹는대요'."
    },
    {
      "id": "q31",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화를 간접화법 축약형으로 알맞게 변형한 것을 고르십시오.\n선생님: 지현 씨 언니가 한국어 선생님이에요?\n학생: ______",
      "choices": [
        {
          "id": "c1",
          "text": "네, 한국어 선생님대요"
        },
        {
          "id": "c2",
          "text": "네, 한국어 선생님이대요"
        },
        {
          "id": "c3",
          "text": "네, 한국어 선생님이래요"
        },
        {
          "id": "c4",
          "text": "네, 한국어 선생님이재요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "명사 '선생님'은 받침이 있으므로 간접 화법 축약형 '-이래요'가 결합하여 '선생님이래요'가 됩니다.",
      "explanationVi": "Danh từ '선생님' (giáo viên) có patchim, nên kết hợp với dạng rút gọn gián tiếp '-이래요', tạo thành '선생님이래요'.",
      "explanationEn": "The noun '선생님' (teacher) has a final consonant, so it combines with the contracted indirect form '-이래요', forming '선생님이래요'."
    }
  ]
};

export default quiz;
