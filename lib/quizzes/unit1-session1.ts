// 이 파일은 scripts/md-to-quiz.mjs 로 자동 생성되었습니다.
// 원본: 1차시_문제.md
// 수정이 필요하면 원본 md 파일을 고친 뒤 스크립트를 다시 실행하세요.
import type { Quiz } from "@/types/quiz";

const quiz: Quiz = {
  "id": "snu3-unit1-session1",
  "className": "서울대 한국어 3급",
  "bookTitle": "서울대 한국어 Workbook 3A",
  "unitLabel": "1과",
  "title": "1과 1차시 복습",
  "estimatedMinutes": 20,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "context": "[한국대학교 2016년 1학기 일정]\n2월 3주 21일 졸업식 / 4주 27~28일 신입생 오리엔테이션\n3월 1주 3일 입학식 / 1주 7일 신입생 환영회 / 3주 17일 동아리 설명회\n4월 4주 21~25일 중간시험\n5월 2주 7~9일 축제",
      "questionText": "다음 일정표를 보고, 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 아직 입학식도 안 했는데 벌써 학교에 가요?\nB: 네, 대학 생활의 여러 가지를 알려 주는 ______________이(가) 있어요.",
      "choices": [
        {
          "id": "c1",
          "text": "입학식"
        },
        {
          "id": "c2",
          "text": "오리엔테이션"
        },
        {
          "id": "c3",
          "text": "졸업식"
        },
        {
          "id": "c4",
          "text": "동아리"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "일정표를 보면 입학식(3월 3일)보다 앞선 2월 4주에 '신입생 오리엔테이션'이 있습니다. 대학 생활을 안내해 주는 행사이므로 정답은 '오리엔테이션'입니다.",
      "explanationVi": "Theo lịch trình, 'buổi định hướng tân sinh viên' diễn ra vào tuần 4 tháng 2, trước cả lễ nhập học (ngày 3 tháng 3). Đây là sự kiện hướng dẫn về đời sống đại học, nên đáp án đúng là 'orientation' (định hướng).",
      "explanationEn": "According to the schedule, the 'freshman orientation' takes place in the 4th week of February, before the entrance ceremony (March 3rd). Since this is the event that guides students through university life, the correct answer is 'orientation'."
    },
    {
      "id": "q2",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "context": "[한국대학교 2016년 1학기 일정]\n2월 3주 21일 졸업식 / 4주 27~28일 신입생 오리엔테이션\n3월 1주 3일 입학식 / 1주 7일 신입생 환영회 / 3주 17일 동아리 설명회\n4월 4주 21~25일 중간시험\n5월 2주 7~9일 축제",
      "questionText": "다음 일정표를 보고, 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 3월 7일에 하는 ________________에 꼭 가야 할까요?\nB: 여러 선배들과 인사할 수 있는 좋은 기회니까 가는 게 좋을 거예요.",
      "choices": [
        {
          "id": "c1",
          "text": "오리엔테이션"
        },
        {
          "id": "c2",
          "text": "신입생 환영회"
        },
        {
          "id": "c3",
          "text": "졸업식"
        },
        {
          "id": "c4",
          "text": "중간시험"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "일정표에서 3월 1주 7일에 있는 행사는 '신입생 환영회'입니다. 선배들과 인사하는 환영 행사이므로 정답은 '신입생 환영회'입니다.",
      "explanationVi": "Theo lịch trình, sự kiện diễn ra vào ngày 7 tháng 3 là 'lễ chào mừng tân sinh viên'. Đây là buổi chào hỏi với các tiền bối, nên đáp án đúng là 'lễ chào mừng tân sinh viên'.",
      "explanationEn": "According to the schedule, the event on March 7th is the 'freshman welcome party'. Since this is a welcoming event where you greet upperclassmen, the correct answer is 'freshman welcome party'."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "context": "[한국대학교 2016년 1학기 일정]\n2월 3주 21일 졸업식 / 4주 27~28일 신입생 오리엔테이션\n3월 1주 3일 입학식 / 1주 7일 신입생 환영회 / 3주 17일 동아리 설명회\n4월 4주 21~25일 중간시험\n5월 2주 7~9일 축제",
      "questionText": "다음 일정표를 보고, 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 4월 말에 중간시험이 있네요. 벌써부터 걱정이에요.\nB: 그래도 시험이 끝나면 즐거운 _______________가(이) 기다리고 있어. 열심히 공부한 후에 신나게 놀면서 스트레스를 풀자.",
      "choices": [
        {
          "id": "c1",
          "text": "축제"
        },
        {
          "id": "c2",
          "text": "방학"
        },
        {
          "id": "c3",
          "text": "동아리"
        },
        {
          "id": "c4",
          "text": "입학식"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "일정표를 보면 중간시험(4월 4주) 다음인 5월 2주에 '축제'가 있습니다. 시험이 끝난 후 신나게 놀 수 있는 학교 행사이므로 정답은 '축제'입니다.",
      "explanationVi": "Theo lịch trình, 'lễ hội' diễn ra vào tuần 2 tháng 5, ngay sau kỳ thi giữa kỳ (tuần 4 tháng 4). Đây là sự kiện của trường để vui chơi thỏa thích sau khi thi xong, nên đáp án đúng là 'lễ hội'.",
      "explanationEn": "According to the schedule, the 'festival' takes place in the 2nd week of May, right after the midterm exams (4th week of April). Since this is a school event for having fun after exams are over, the correct answer is 'festival'."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "context": "[한국대학교 2016년 1학기 일정]\n2월 3주 21일 졸업식 / 4주 27~28일 신입생 오리엔테이션\n3월 1주 3일 입학식 / 1주 7일 신입생 환영회 / 3주 17일 동아리 설명회\n4월 4주 21~25일 중간시험\n5월 2주 7~9일 축제",
      "questionText": "다음 일정표를 보고, 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 대학교에서 무슨 _______________ 활동을 하면 좋을까?\nB: 너는 테니스 치는 걸 좋아하니까 테니스 _______________가(이) 어때?",
      "choices": [
        {
          "id": "c1",
          "text": "축제"
        },
        {
          "id": "c2",
          "text": "동아리"
        },
        {
          "id": "c3",
          "text": "오리엔테이션"
        },
        {
          "id": "c4",
          "text": "신입생 환영회"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "일정표에 3월 3주 17일 '동아리 설명회'가 있습니다. 같은 취미를 가진 학생들의 모임 활동은 '동아리'라고 합니다.",
      "explanationVi": "Theo lịch trình, có 'buổi giới thiệu câu lạc bộ' vào ngày 17 tháng 3. Hoạt động nhóm của những sinh viên có cùng sở thích được gọi là 'câu lạc bộ (동아리)'.",
      "explanationEn": "According to the schedule, there is a 'club introduction session' on March 17th. A group activity of students who share the same hobby is called a 'club (동아리)'."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n나는 대학교에서 경제학을 _______________하는 1학년 학생이다.",
      "choices": [
        {
          "id": "c1",
          "text": "강의"
        },
        {
          "id": "c2",
          "text": "전공"
        },
        {
          "id": "c3",
          "text": "성적"
        },
        {
          "id": "c4",
          "text": "학점"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "대학교에서 전문적으로 공부하는 분야를 '전공하다'라고 표현합니다.",
      "explanationVi": "Lĩnh vực mà bạn học chuyên sâu ở đại học được gọi là '전공하다' (chuyên ngành/học chuyên ngành).",
      "explanationEn": "The field you study intensively at university is expressed as '전공하다' (to major in)."
    },
    {
      "id": "q6",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n제일 좋아하는 _______________이(가) 수학이라서 경제학과에 들어왔다.",
      "choices": [
        {
          "id": "c1",
          "text": "강의"
        },
        {
          "id": "c2",
          "text": "전공"
        },
        {
          "id": "c3",
          "text": "장학금"
        },
        {
          "id": "c4",
          "text": "과목"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "수학은 배우는 여러 가지 학문의 단위인 '과목'에 해당합니다.",
      "explanationVi": "Toán học thuộc về '과목' (môn học), đơn vị của các lĩnh vực học thuật khác nhau mà bạn học.",
      "explanationEn": "Math falls under '과목' (subject), which refers to a unit among the various academic fields you study."
    },
    {
      "id": "q7",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n입학할 때 성적이 좋아서 _______________도 받았다.",
      "choices": [
        {
          "id": "c1",
          "text": "장학금"
        },
        {
          "id": "c2",
          "text": "학점"
        },
        {
          "id": "c3",
          "text": "강의"
        },
        {
          "id": "c4",
          "text": "성적"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "성적이 좋거나 도움이 필요한 학생에게 주는 돈을 '장학금'이라고 합니다.",
      "explanationVi": "Số tiền được cấp cho sinh viên có thành tích tốt hoặc cần hỗ trợ được gọi là '장학금' (học bổng).",
      "explanationEn": "Money given to students with good grades or those who need financial support is called '장학금' (scholarship)."
    },
    {
      "id": "q8",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n이 장학금은 학기마다 B _______________ 이상을 받으면 졸업할 때까지 계속 받을 수 있다.",
      "choices": [
        {
          "id": "c1",
          "text": "강의"
        },
        {
          "id": "c2",
          "text": "과목"
        },
        {
          "id": "c3",
          "text": "성적"
        },
        {
          "id": "c4",
          "text": "학점"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "대학에서 성적을 나타내는 단위를 '학점'이라고 합니다.",
      "explanationVi": "Đơn vị thể hiện thành tích học tập ở đại học được gọi là '학점' (điểm tín chỉ/GPA).",
      "explanationEn": "The unit that represents academic performance at university is called '학점' (grade point/credit)."
    },
    {
      "id": "q9",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n대학 _______________가(이) 고등학교 수업과 많이 다르지만 열심히 공부하겠다.",
      "choices": [
        {
          "id": "c1",
          "text": "학점"
        },
        {
          "id": "c2",
          "text": "전공"
        },
        {
          "id": "c3",
          "text": "강의"
        },
        {
          "id": "c4",
          "text": "장학금"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "대학교에서 교수가 학생들에게 학문을 가르치는 것을 '강의'라고 합니다.",
      "explanationVi": "Việc giáo sư giảng dạy kiến thức cho sinh viên ở đại học được gọi là '강의' (bài giảng).",
      "explanationEn": "When a professor teaches academic content to students at university, it is called '강의' (lecture)."
    },
    {
      "id": "q10",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 내일 회의에 사장님도 오세요?\nB: 네, 중요한 회의니까 꼭 _______________ 거예요.",
      "choices": [
        {
          "id": "c1",
          "text": "참석하실"
        },
        {
          "id": "c2",
          "text": "지원하실"
        },
        {
          "id": "c3",
          "text": "합격하실"
        },
        {
          "id": "c4",
          "text": "가입하실"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "회의나 모임 등에 자리를 같이하여 참여하는 것을 '참석하다'라고 합니다.",
      "explanationVi": "Việc có mặt và tham gia vào một cuộc họp hay buổi tụ họp được gọi là '참석하다' (tham dự).",
      "explanationEn": "Being present and taking part in a meeting or gathering is called '참석하다' (to attend)."
    },
    {
      "id": "q11",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 왜 그 회사에 _______________려고 해요?\nB: 한국에서 휴대폰을 제일 잘 만드는 회사이고 월급도 많아서요.",
      "choices": [
        {
          "id": "c1",
          "text": "합격하"
        },
        {
          "id": "c2",
          "text": "지원하"
        },
        {
          "id": "c3",
          "text": "참가하"
        },
        {
          "id": "c4",
          "text": "가입하"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "어떤 조직이나 단체에 들어가기를 바라는 것을 '지원하다'라고 합니다.",
      "explanationVi": "Việc mong muốn được vào một tổ chức hay đoàn thể nào đó (ví dụ như công ty) được gọi là '지원하다' (ứng tuyển/nộp đơn).",
      "explanationEn": "Wishing to be admitted into an organization or group (such as applying for a job) is called '지원하다' (to apply)."
    },
    {
      "id": "q12",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 말하기 대회에 _______________고 싶은데 어떻게 신청해야 하지요?\nB: 인터넷으로 참가 신청서를 내면 돼요.",
      "choices": [
        {
          "id": "c1",
          "text": "신청하"
        },
        {
          "id": "c2",
          "text": "참가하"
        },
        {
          "id": "c3",
          "text": "합격하"
        },
        {
          "id": "c4",
          "text": "가입하"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "대회나 행사 등에 관계하여 참여하는 것을 '참가하다'라고 합니다. '참가 신청서'라는 대답과 호응합니다.",
      "explanationVi": "Việc tham gia vào một cuộc thi hay sự kiện được gọi là '참가하다' (tham gia). Điều này phù hợp với câu trả lời có từ '참가 신청서' (đơn đăng ký tham gia).",
      "explanationEn": "Taking part in a contest or event is called '참가하다' (to participate). This matches the reply mentioning '참가 신청서' (participation application form)."
    },
    {
      "id": "q13",
      "type": "multiple-choice",
      "skill": "vocab",
      "unitLabel": "1과 · 어휘",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 인터넷 유학생 카페에 _______________고 싶은데요.\nB: 그럼 제가 홈페이지 주소를 가르쳐 드릴 테니까 들어가 보세요.",
      "choices": [
        {
          "id": "c1",
          "text": "지원하"
        },
        {
          "id": "c2",
          "text": "합격하"
        },
        {
          "id": "c3",
          "text": "가입하"
        },
        {
          "id": "c4",
          "text": "참석하"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "인터넷 카페나 단체 등에 구성원이 되기 위해 들어가는 것을 '가입하다'라고 합니다.",
      "explanationVi": "Việc tham gia vào một cộng đồng trên mạng (cafe) hay một tổ chức để trở thành thành viên được gọi là '가입하다' (đăng ký/tham gia thành viên).",
      "explanationEn": "Joining an online community (cafe) or an organization to become a member is called '가입하다' (to join/sign up)."
    },
    {
      "id": "q14",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n(토니의 말: \"한국어 발음이 조금 어려워요.\")\n가: 토니 씨는 한국어 공부 열심히 하고 있어요?\n나: 네, 하지만 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "한국어 발음이 조금 어렵다고 해요"
        },
        {
          "id": "c2",
          "text": "한국어 발음이 조금 어려운다고 해요"
        },
        {
          "id": "c3",
          "text": "한국어 발음이 조금 어려워다고 해요"
        },
        {
          "id": "c4",
          "text": "한국어 발음이 조금 어렵다라고 해요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "형용사 '어렵다'를 간접 화법으로 인용할 때는 어간에 '-다고 하다'를 붙여 '어렵다고 해요'가 됩니다.",
      "explanationVi": "Khi trích dẫn tính từ '어렵다' (khó) theo lối nói gián tiếp, ta gắn '-다고 하다' vào thân từ, tạo thành '어렵다고 해요'.",
      "explanationEn": "When quoting the adjective '어렵다' (difficult) in indirect speech, you attach '-다고 하다' to the stem, forming '어렵다고 해요'."
    },
    {
      "id": "q15",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n(토니의 말: \"한국 음식이 별로 맵지 않아요.\")\n가: 한국 음식이 매운데 토니 씨는 한국 음식을 잘 먹어요?\n나: 네, 잘 먹어요. _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "한국 음식이 별로 맵지 않는다고 해요"
        },
        {
          "id": "c2",
          "text": "한국 음식이 별로 맵지 않다고 해요"
        },
        {
          "id": "c3",
          "text": "한국 음식이 별로 맵지 않으라고 해요"
        },
        {
          "id": "c4",
          "text": "한국 음식이 별로 맵지 않자고 해요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'맵지 않다'는 형용사이므로 간접 화법으로 인용할 때 '-다고 하다'를 붙여 '맵지 않다고 해요'가 됩니다.",
      "explanationVi": "'맵지 않다' (không cay) là tính từ, nên khi trích dẫn gián tiếp ta gắn '-다고 하다', tạo thành '맵지 않다고 해요'.",
      "explanationEn": "'맵지 않다' (not spicy) is an adjective, so in indirect speech you attach '-다고 하다', forming '맵지 않다고 해요'."
    },
    {
      "id": "q16",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n(토니의 말: \"이번 학기에 한국 역사 강의를 들어요.\")\n가: 토니 씨가 한국 역사책을 읽고 있네요.\n나: 네, _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "이번 학기에 한국 역사 강의를 듣다고 해요"
        },
        {
          "id": "c2",
          "text": "이번 학기에 한국 역사 강의를 듣으라고 해요"
        },
        {
          "id": "c3",
          "text": "이번 학기에 한국 역사 강의를 들는다고 해요"
        },
        {
          "id": "c4",
          "text": "이번 학기에 한국 역사 강의를 듣는다고 해요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "동사 '듣다'는 간접 화법으로 인용할 때 받침이 있으므로 '-는다고 하다'를 붙입니다. 'ㄷ' 불규칙이 적용되지 않은 원래 어간에 붙어 '듣는다고 해요'가 됩니다.",
      "explanationVi": "Động từ '듣다' (nghe) có patchim (phụ âm cuối) nên khi trích dẫn gián tiếp ta gắn '-는다고 하다'. Quy tắc bất quy tắc 'ㄷ' không áp dụng ở đây, nên nó gắn vào thân từ gốc, tạo thành '듣는다고 해요'.",
      "explanationEn": "The verb '듣다' (to listen) has a final consonant (patchim), so in indirect speech it takes '-는다고 하다'. The 'ㄷ' irregular rule does not apply here, so it attaches to the original stem, forming '듣는다고 해요'."
    },
    {
      "id": "q17",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n(토니의 말: \"중요한 시험이 있어서 학교 마라톤 대회에 참가하지 않아요.\")\n가: 이번 마라톤 대회에 토니 씨도 참가하지요?\n나: 아니요, _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "중요한 시험이 있어서 학교 마라톤 대회에 참가하지 않다고 해요"
        },
        {
          "id": "c2",
          "text": "중요한 시험이 있어서 학교 마라톤 대회에 참가하지 않는다고 해요"
        },
        {
          "id": "c3",
          "text": "중요한 시험이 있어서 학교 마라톤 대회에 참가하지 않으라고 해요"
        },
        {
          "id": "c4",
          "text": "중요한 시험이 있어서 학교 마라톤 대회에 참가하지 않자고 해요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'참가하지 않다'의 '않다' 앞이 동사(참가하다)이므로 '-않는다' 형태로 변형하여 간접 화법 '-는다고 하다'를 적용합니다. 따라서 '참가하지 않는다고 해요'가 맞습니다.",
      "explanationVi": "Trong '참가하지 않다', vì trước '않다' là một động từ (참가하다), nên nó chuyển thành dạng '-않는다' và áp dụng lối nói gián tiếp '-는다고 하다'. Vì vậy '참가하지 않는다고 해요' là đúng.",
      "explanationEn": "In '참가하지 않다', since what comes before '않다' is a verb (참가하다), it changes to the form '-않는다' and takes the indirect speech ending '-는다고 하다'. Therefore, '참가하지 않는다고 해요' is correct."
    },
    {
      "id": "q18",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n(토니의 말: \"제 전공은 컴퓨터 공학이에요.\")\n가: 컴퓨터가 좀 이상한데 누구한테 물어보면 좋을까요?\n나: 토니 씨에게 물어보세요. _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "토니 씨 전공이 컴퓨터 공학이라고 해요"
        },
        {
          "id": "c2",
          "text": "토니 씨 전공이 컴퓨터 공학다고 해요"
        },
        {
          "id": "c3",
          "text": "토니 씨 전공이 컴퓨터 공학냐고 해요"
        },
        {
          "id": "c4",
          "text": "토니 씨 전공이 컴퓨터 공학자고 해요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '공학'에 받침이 있으므로 간접 화법으로 인용할 때 '-이라고 하다'를 붙여 '컴퓨터 공학이라고 해요'가 됩니다.",
      "explanationVi": "Danh từ '공학' (kỹ thuật) có patchim, nên khi trích dẫn gián tiếp ta gắn '-이라고 하다', tạo thành '컴퓨터 공학이라고 해요'.",
      "explanationEn": "The noun '공학' (engineering) has a final consonant, so in indirect speech it takes '-이라고 하다', forming '컴퓨터 공학이라고 해요'."
    },
    {
      "id": "q19",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 저는 학교 앞 고시원에서 살아요.\n나: 미안하지만 잘 못 들었어요. 뭐라고요?\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "저는 학교 앞 고시원에서 살다고 했어요"
        },
        {
          "id": "c2",
          "text": "저는 학교 앞 고시원에서 산다고 했어요"
        },
        {
          "id": "c3",
          "text": "저는 학교 앞 고시원에서 살라고 했어요"
        },
        {
          "id": "c4",
          "text": "저는 학교 앞 고시원에서 살자고 했어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "동사 '살다'에 간접 화법 '-ㄴ다고 하다'가 결합할 때 'ㄹ'이 탈락하여 '산다고 했어요'가 됩니다.",
      "explanationVi": "Khi động từ '살다' (sống) kết hợp với lối nói gián tiếp '-ㄴ다고 하다', âm 'ㄹ' bị lược bỏ, tạo thành '산다고 했어요'.",
      "explanationEn": "When the verb '살다' (to live) combines with the indirect speech ending '-ㄴ다고 하다', the 'ㄹ' is dropped, forming '산다고 했어요'."
    },
    {
      "id": "q20",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 대학교에 입학하면 여행 동아리에 가입하고 싶어요.\n나: 네? 다시 한 번 말씀해 주시겠어요?\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "대학교에 입학하면 여행 동아리에 가입하고 싶다고 했어요"
        },
        {
          "id": "c2",
          "text": "대학교에 입학하면 여행 동아리에 가입하고 싶은다고 했어요"
        },
        {
          "id": "c3",
          "text": "대학교에 입학하면 여행 동아리에 가입하고 싶냐고 했어요"
        },
        {
          "id": "c4",
          "text": "대학교에 입학하면 여행 동아리에 가입하고 싶자고 했어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "'-고 싶다'는 형용사와 같이 활용하므로 간접 화법 인용 시 '-다고 하다'를 붙여 '가입하고 싶다고 했어요'가 맞습니다.",
      "explanationVi": "'-고 싶다' (muốn) chia giống tính từ, nên khi trích dẫn gián tiếp ta gắn '-다고 하다', vì vậy '가입하고 싶다고 했어요' là đúng.",
      "explanationEn": "'-고 싶다' (want to) conjugates like an adjective, so in indirect speech you attach '-다고 하다', making '가입하고 싶다고 했어요' correct."
    },
    {
      "id": "q21",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 저는 1년 전에 대학교를 졸업했어요.\n나: 네? 뭐라고요?\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "저는 1년 전에 대학교를 졸업했자고 했어요"
        },
        {
          "id": "c2",
          "text": "저는 1년 전에 대학교를 졸업했냐고 했어요"
        },
        {
          "id": "c3",
          "text": "저는 1년 전에 대학교를 졸업했다고 했어요"
        },
        {
          "id": "c4",
          "text": "저는 1년 전에 대학교를 졸업했으라고 했어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "과거 시제 '-았/었-' 뒤에는 형태 품사와 관계없이 항상 '-다고 하다'를 붙여 '졸업했다고 했어요'가 됩니다.",
      "explanationVi": "Sau thì quá khứ '-았/었-', bất kể từ loại nào cũng luôn gắn '-다고 하다', tạo thành '졸업했다고 했어요'.",
      "explanationEn": "After the past tense marker '-았/었-', regardless of the part of speech, '-다고 하다' is always attached, forming '졸업했다고 했어요'."
    },
    {
      "id": "q22",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 지난 학기에는 전공과목을 많이 신청해서 정말 힘들었어요.\n나: 잘 못 들었는데 천천히 다시 말해 주세요.\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "지난 학기에는 전공과목을 많이 신청해서 정말 힘들었다고 했어요"
        },
        {
          "id": "c2",
          "text": "지난 학기에는 전공과목을 많이 신청해서 정말 힘들었냐고 했어요"
        },
        {
          "id": "c3",
          "text": "지난 학기에는 전공과목을 많이 신청해서 정말 힘들었자고 했어요"
        },
        {
          "id": "c4",
          "text": "지난 학기에는 전공과목을 많이 신청해서 정말 힘들었으라고 했어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "과거 시제 '-았/었-' 뒤에는 '-다고 하다'가 결합하므로 '힘들었다고 했어요'가 맞습니다.",
      "explanationVi": "Sau thì quá khứ '-았/었-', '-다고 하다' được kết hợp vào, nên '힘들었다고 했어요' là đúng.",
      "explanationEn": "After the past tense marker '-았/었-', '-다고 하다' is combined, so '힘들었다고 했어요' is correct."
    },
    {
      "id": "q23",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 토니 씨는 교환 학생이에요.\n나: 네? 뭐라고 하셨어요?\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "토니 씨는 교환 학생이라고 했어요"
        },
        {
          "id": "c2",
          "text": "토니 씨는 교환 학생이냐고 했어요"
        },
        {
          "id": "c3",
          "text": "토니 씨는 교환 학생이자고 했어요"
        },
        {
          "id": "c4",
          "text": "토니 씨는 교환 학생이 다고 했어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '학생'에 받침이 있으므로 '-이라고 하다'가 결합하여 '학생이라고 했어요'가 됩니다.",
      "explanationVi": "Danh từ '학생' (học sinh) có patchim, nên '-이라고 하다' được kết hợp vào, tạo thành '학생이라고 했어요'.",
      "explanationEn": "The noun '학생' (student) has a final consonant, so '-이라고 하다' is combined, forming '학생이라고 했어요'."
    },
    {
      "id": "q24",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\n가: 저 친구는 경제학과 학생이 아니에요.\n나: 죄송하지만 뭐라고 하셨지요?\n가: _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "저 친구는 경제학과 학생이 아니자고 했어요"
        },
        {
          "id": "c2",
          "text": "저 친구는 경제학과 학생이 아니냐고 했어요"
        },
        {
          "id": "c3",
          "text": "저 친구는 경제학과 학생이 아니라고 했어요"
        },
        {
          "id": "c4",
          "text": "저 친구는 경제학과 학생이 아니으라고 했어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "명사 부정형 '아니다'는 형용사처럼 활용하여 '-다고 하다' 대신 '-라고 하다' 형태로 굳어져 '아니라고 했어요'로 씁니다.",
      "explanationVi": "Dạng phủ định của danh từ '아니다' (không phải) chia giống tính từ, nhưng thay vì '-다고 하다' thì cố định thành dạng '-라고 하다', nên viết là '아니라고 했어요'.",
      "explanationEn": "The negative copula '아니다' (to not be) conjugates like an adjective, but instead of '-다고 하다', it fixes into the form '-라고 하다', so it is written as '아니라고 했어요'."
    },
    {
      "id": "q25",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 문장을 간접화법으로 바르게 고친 것을 고르십시오.\n예린: \"나는 고향에 갔다 올 거야.\"",
      "choices": [
        {
          "id": "c1",
          "text": "예린 씨는 고향에 갔다 올 거라고 했어."
        },
        {
          "id": "c2",
          "text": "예린 씨는 고향에 갔다 오다고 했어."
        },
        {
          "id": "c3",
          "text": "예린 씨는 고향에 갔다 올 냐고 했어."
        },
        {
          "id": "c4",
          "text": "예린 씨는 고향에 갔다 올 자고 했어."
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "미래 시제 '-을 것이다'는 명사 '것'이 쓰인 형태이므로 명사 인용형 '-이라고 하다'가 결합하여 '-을 것이라고(거라고) 하다'가 됩니다.",
      "explanationVi": "Thì tương lai '-을 것이다' có sử dụng danh từ '것' (điều/việc), nên dạng trích dẫn danh từ '-이라고 하다' được kết hợp vào, tạo thành '-을 것이라고(거라고) 하다'.",
      "explanationEn": "The future tense '-을 것이다' uses the noun '것' (thing), so the noun-quoting form '-이라고 하다' combines with it, forming '-을 것이라고(거라고) 하다'."
    },
    {
      "id": "q26",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 문장을 간접화법으로 바르게 고친 것을 고르십시오.\n싸이어: \"다음 학기에 배울 것을 혼자 미리 공부할 거야.\"",
      "choices": [
        {
          "id": "c1",
          "text": "싸이어 씨는 다음 학기에 배울 것을 혼자 미리 공부한다고 했어."
        },
        {
          "id": "c2",
          "text": "싸이어 씨는 다음 학기에 배울 것을 혼자 미리 공부할 거라고 했어."
        },
        {
          "id": "c3",
          "text": "싸이어 씨는 다음 학기에 배울 것을 혼자 미리 공부하자고 했어."
        },
        {
          "id": "c4",
          "text": "싸이어 씨는 다음 학기에 배울 것을 혼자 미리 공부하라고 했어."
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "평서문 미래 시제 '-을 것이다'는 간접 화법으로 바꿀 때 '-을 거라고 하다'가 되므로 '공부할 거라고 했어'가 맞습니다.",
      "explanationVi": "Thì tương lai câu trần thuật '-을 것이다' khi chuyển sang lối nói gián tiếp trở thành '-을 거라고 하다', nên '공부할 거라고 했어' là đúng.",
      "explanationEn": "The declarative future tense '-을 것이다' becomes '-을 거라고 하다' when converted to indirect speech, so '공부할 거라고 했어' is correct."
    },
    {
      "id": "q27",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 문장을 간접화법으로 바르게 고친 것을 고르십시오.\n지용: \"방학 동안 운동을 열심히 해서 건강해질 거야.\"",
      "choices": [
        {
          "id": "c1",
          "text": "지용 씨는 방학 동안 운동을 열심히 해서 건강해진다고 했어."
        },
        {
          "id": "c2",
          "text": "지용 씨는 방학 동안 운동을 열심히 해서 건강해지자고 했어."
        },
        {
          "id": "c3",
          "text": "지용 씨는 방학 동안 운동을 열심히 해서 건강해질 거라고 했어."
        },
        {
          "id": "c4",
          "text": "지용 씨는 방학 동안 운동을 열심히 해서 건강해지라고 했어."
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "평서문 미래 시제 '-을 것이다'는 간접 화법 인용 시 '-을 거라고 하다'가 되어 '건강해질 거라고 했어'가 알맞습니다.",
      "explanationVi": "Thì tương lai câu trần thuật '-을 것이다' khi trích dẫn gián tiếp trở thành '-을 거라고 하다', nên '건강해질 거라고 했어' là phù hợp.",
      "explanationEn": "The declarative future tense '-을 것이다' becomes '-을 거라고 하다' in indirect speech, so '건강해질 거라고 했어' is appropriate."
    },
    {
      "id": "q28",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 문장을 간접화법으로 바르게 고친 것을 고르십시오.\n수미: \"난 음악 학원에 등록해서 피아노를 배울 거야.\"",
      "choices": [
        {
          "id": "c1",
          "text": "수미 씨는 음악 학원에 등록해서 피아노를 배운다고 했어."
        },
        {
          "id": "c2",
          "text": "수미 씨는 음악 학원에 등록해서 피아노를 배우라고 했어."
        },
        {
          "id": "c3",
          "text": "수미 씨는 음악 학원에 등록해서 피아노를 배우자고 했어."
        },
        {
          "id": "c4",
          "text": "수미 씨는 음악 학원에 등록해서 피아노를 배울 거라고 했어."
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "평서문 미래 시제 '-을 것이다'는 간접 화법 인용 시 '-을 거라고 하다'가 되므로 '배울 거라고 했어'가 됩니다.",
      "explanationVi": "Thì tương lai câu trần thuật '-을 것이다' khi trích dẫn gián tiếp trở thành '-을 거라고 하다', nên '배울 거라고 했어' là đúng.",
      "explanationEn": "The declarative future tense '-을 것이다' becomes '-을 거라고 하다' in indirect speech, so '배울 거라고 했어' is correct."
    },
    {
      "id": "q29",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 문장을 간접화법으로 바르게 고친 것을 고르십시오.\n하루카: \"난 아르바이트를 할 거야. 편의점에서 하루에 8시간씩 일하기로 했어.\"",
      "choices": [
        {
          "id": "c1",
          "text": "하루카 씨는 아르바이트를 할 거라고 했어. 편의점에서 하루에 8시간씩 일하기로 했다고 해."
        },
        {
          "id": "c2",
          "text": "하루카 씨는 아르바이트를 한다고 했어. 편의점에서 하루에 8시간씩 일하기로 할 거라고 해."
        },
        {
          "id": "c3",
          "text": "하루카 씨는 아르바이트를 하자고 했어. 편의점에서 하루에 8시간씩 일하기로 했다고 해."
        },
        {
          "id": "c4",
          "text": "하루카 씨는 아르바이트를 하라고 했어. 편의점에서 하루에 8시간씩 일하기로 할 거라고 해."
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "'할 거야'는 '-을 거라고 했어'로, '일하기로 했어'는 과거 시제 평서문 인용이므로 '-했다고 해'로 바꾸는 것이 맞습니다.",
      "explanationVi": "'할 거야' được chuyển thành '-을 거라고 했어', còn '일하기로 했어' là trích dẫn câu trần thuật thì quá khứ nên chuyển thành '-했다고 해' là đúng.",
      "explanationEn": "'할 거야' is converted to '-을 거라고 했어', while '일하기로 했어' is a past-tense declarative quote, so converting it to '-했다고 해' is correct."
    },
    {
      "id": "q30",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 오늘이 민수 씨 생일이라고 해요.\nB: 그래요? 그럼 선물을 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "사러 가야겠어요"
        },
        {
          "id": "c2",
          "text": "사러 가겠어요"
        },
        {
          "id": "c3",
          "text": "사러 가고 싶겠어요"
        },
        {
          "id": "c4",
          "text": "사러 갈 수 있겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "화자의 강한 의지나 당연히 해야 할 일을 나타낼 때 동사 뒤에 '-아야/어야겠다'를 사용합니다.",
      "explanationVi": "Khi diễn tả ý chí mạnh mẽ của người nói hoặc việc đương nhiên phải làm, ta dùng '-아야/어야겠다' sau động từ.",
      "explanationEn": "When expressing the speaker's strong intention or something that should naturally be done, '-아야/어야겠다' is used after a verb."
    },
    {
      "id": "q31",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 마리코 씨가 맛있는 일본 식당을 안다고 해요.\nB: 그래요? 그럼 가서 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "먹어 봐야겠어요"
        },
        {
          "id": "c2",
          "text": "먹어 보겠어요"
        },
        {
          "id": "c3",
          "text": "먹어 보면 좋겠어요"
        },
        {
          "id": "c4",
          "text": "먹어 보려고 하겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "어떤 행동을 해야겠다는 화자의 다짐을 나타내는 '-아야/어야겠다'가 '먹어 보다'와 결합하여 '먹어 봐야겠어요'가 됩니다.",
      "explanationVi": "'-아야/어야겠다', diễn tả quyết tâm của người nói rằng phải làm một hành động nào đó, kết hợp với '먹어 보다' (thử ăn) tạo thành '먹어 봐야겠어요'.",
      "explanationEn": "'-아야/어야겠다', which expresses the speaker's determination to do something, combines with '먹어 보다' (to try eating) to form '먹어 봐야겠어요'."
    },
    {
      "id": "q32",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 요즘 이 소설이 인기가 있다고 해요.\nB: 저도 사서 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "읽어겠어요"
        },
        {
          "id": "c2",
          "text": "읽어야겠어요"
        },
        {
          "id": "c3",
          "text": "읽겠어요"
        },
        {
          "id": "c4",
          "text": "읽고 싶겠어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "화자의 의지나 필요성을 나타내는 문법 '-아야/어야겠다'가 어간의 모음이 'ㅣ'인 '읽다'와 결합하여 '읽어야겠어요'가 됩니다.",
      "explanationVi": "Ngữ pháp '-아야/어야겠다', diễn tả ý chí hoặc sự cần thiết của người nói, kết hợp với '읽다' (đọc) có nguyên âm thân từ là 'ㅣ', tạo thành '읽어야겠어요'.",
      "explanationEn": "The grammar '-아야/어야겠다', which expresses the speaker's intention or necessity, combines with '읽다' (to read), whose stem vowel is 'ㅣ', forming '읽어야겠어요'."
    },
    {
      "id": "q33",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 국이 좀 싱거운 것 같은데요.\nB: 그러네요. 소금을 더 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "넣어겠어요"
        },
        {
          "id": "c2",
          "text": "넣야겠어요"
        },
        {
          "id": "c3",
          "text": "넣어야겠어요"
        },
        {
          "id": "c4",
          "text": "넣고 싶겠어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "필요성에 의한 다짐을 나타내는 문법 '-아야/어야겠다'가 어간 모음이 'ㅓ'인 '넣다'와 결합하면 '넣어야겠어요'가 알맞습니다.",
      "explanationVi": "Ngữ pháp '-아야/어야겠다', diễn tả sự quyết tâm do nhu cầu cần thiết, khi kết hợp với '넣다' (cho vào) có nguyên âm thân từ là 'ㅓ' thì '넣어야겠어요' là phù hợp.",
      "explanationEn": "The grammar '-아야/어야겠다', which expresses determination based on necessity, combines with '넣다' (to add/put in), whose stem vowel is 'ㅓ', so '넣어야겠어요' is correct."
    },
    {
      "id": "q34",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 회사에 가야 하는데 몸이 너무 안 좋아요.\nB: 열이 많이 나요. 빨리 약을 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "먹야겠어요"
        },
        {
          "id": "c2",
          "text": "먹어야겠어요"
        },
        {
          "id": "c3",
          "text": "먹고 싶겠어요"
        },
        {
          "id": "c4",
          "text": "먹을 수 있겠어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'먹다'의 어간 모음이 'ㅓ'이므로 '-어야겠다'와 결합하여 '먹어야겠어요'가 됩니다.",
      "explanationVi": "Vì nguyên âm thân từ của '먹다' (ăn) là 'ㅓ', nên nó kết hợp với '-어야겠다', tạo thành '먹어야겠어요'.",
      "explanationEn": "Since the stem vowel of '먹다' (to eat) is 'ㅓ', it combines with '-어야겠다', forming '먹어야겠어요'."
    },
    {
      "id": "q35",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n이번 휴가 때는 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "가족 여행을 가야겠어요"
        },
        {
          "id": "c2",
          "text": "가족 여행을 가어겠어요"
        },
        {
          "id": "c3",
          "text": "가족 여행을 가여야겠어요"
        },
        {
          "id": "c4",
          "text": "가족 여행을 가아야겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "동사 '가다'는 어간 모음이 'ㅏ'이므로 '-아야겠다'가 결합합니다. '가아야겠다'는 줄어들어 '가야겠다'가 됩니다.",
      "explanationVi": "Động từ '가다' (đi) có nguyên âm thân từ là 'ㅏ', nên kết hợp với '-아야겠다'. '가아야겠다' được rút gọn thành '가야겠다'.",
      "explanationEn": "The verb '가다' (to go) has the stem vowel 'ㅏ', so it combines with '-아야겠다'. '가아야겠다' contracts to become '가야겠다'."
    },
    {
      "id": "q36",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n새해에는 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "운동을 좀 하야겠어요"
        },
        {
          "id": "c2",
          "text": "운동을 좀 해야겠어요"
        },
        {
          "id": "c3",
          "text": "운동을 좀 하어야겠어요"
        },
        {
          "id": "c4",
          "text": "운동을 좀 하아야겠어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "'하다' 동사는 '-아야/어야겠다'와 결합하면 '-해야겠다'로 바뀝니다.",
      "explanationVi": "Động từ '하다' (làm) khi kết hợp với '-아야/어야겠다' sẽ đổi thành '-해야겠다'.",
      "explanationEn": "The verb '하다' (to do), when combined with '-아야/어야겠다', changes to '-해야겠다'."
    },
    {
      "id": "q37",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n여행 갈 때 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "약을 가져가야겠어요"
        },
        {
          "id": "c2",
          "text": "약을 가져가어겠어요"
        },
        {
          "id": "c3",
          "text": "약을 가져가여야겠어요"
        },
        {
          "id": "c4",
          "text": "약을 가져가아야겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "'가져가다'의 어간 모음이 'ㅏ'이므로 '-아야겠다'와 결합하여 '가져가야겠어요'가 됩니다.",
      "explanationVi": "Vì nguyên âm thân từ của '가져가다' (mang đi) là 'ㅏ', nên nó kết hợp với '-아야겠다', tạo thành '가져가야겠어요'.",
      "explanationEn": "Since the stem vowel of '가져가다' (to take/bring along) is 'ㅏ', it combines with '-아야겠다', forming '가져가야겠어요'."
    },
    {
      "id": "q38",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n고향 친구가 한국에 놀러 오면 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "'한국의 집'에 데리고 가야겠어요"
        },
        {
          "id": "c2",
          "text": "'한국의 집'에 데리고 가어겠어요"
        },
        {
          "id": "c3",
          "text": "'한국의 집'에 데리고 가여야겠어요"
        },
        {
          "id": "c4",
          "text": "'한국의 집'에 데리고 가아야겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "'가다'의 어간 모음이 'ㅏ'이므로 '-아야겠다'와 결합할 때 형태가 축약되어 '가야겠어요'가 됩니다.",
      "explanationVi": "Vì nguyên âm thân từ của '가다' (đi) là 'ㅏ', nên khi kết hợp với '-아야겠다', dạng từ được rút gọn thành '가야겠어요'.",
      "explanationEn": "Since the stem vowel of '가다' (to go) is 'ㅏ', when it combines with '-아야겠다' the form contracts to '가야겠어요'."
    },
    {
      "id": "q39",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 빈칸에 알맞은 것을 고르십시오.\n돈을 많이 벌면 _________________________________.",
      "choices": [
        {
          "id": "c1",
          "text": "가난한 사람들을 도와야겠어요"
        },
        {
          "id": "c2",
          "text": "가난한 사람들을 도워야겠어요"
        },
        {
          "id": "c3",
          "text": "가난한 사람들을 돕아야겠어요"
        },
        {
          "id": "c4",
          "text": "가난한 사람들을 돕어야겠어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "ㅂ 불규칙 동사 '돕다'는 모음 어미 앞에서 'ㅂ'이 'ㅗ'로 바뀌므로 '-아야겠다'와 결합하면 '도와야겠어요'가 됩니다.",
      "explanationVi": "Động từ bất quy tắc 'ㅂ' '돕다' (giúp đỡ) có âm 'ㅂ' đổi thành 'ㅗ' trước đuôi từ có nguyên âm, nên khi kết hợp với '-아야겠다' sẽ tạo thành '도와야겠어요'.",
      "explanationEn": "The 'ㅂ' irregular verb '돕다' (to help) changes 'ㅂ' to 'ㅗ' before a vowel-starting ending, so combined with '-아야겠다' it becomes '도와야겠어요'."
    },
    {
      "id": "q40",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 지영 씨가 왜 고향에 돌아가는지 아세요?\nB: 네, _________________________________. (동생 / 아프다)",
      "choices": [
        {
          "id": "c1",
          "text": "동생이 아프다고 들었어요"
        },
        {
          "id": "c2",
          "text": "동생이 아픈다고 들었어요"
        },
        {
          "id": "c3",
          "text": "동생이 아파라고 들었어요"
        },
        {
          "id": "c4",
          "text": "동생이 아프자고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "'아프다'는 형용사이므로 간접 화법 '-다고 듣다'와 결합하여 '아프다고 들었어요'가 됩니다.",
      "explanationVi": "'아프다' (đau/ốm) là tính từ, nên kết hợp với lối nói gián tiếp '-다고 듣다', tạo thành '아프다고 들었어요'.",
      "explanationEn": "'아프다' (sick/in pain) is an adjective, so it combines with the indirect speech form '-다고 듣다', forming '아프다고 들었어요'."
    },
    {
      "id": "q41",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 제주도에 가서 뭘 먹으면 좋을까요?\nB: 제주도는 _________________________________. (해물탕 / 맛있다)",
      "choices": [
        {
          "id": "c1",
          "text": "해물탕이 맛있자고 들었어요"
        },
        {
          "id": "c2",
          "text": "해물탕이 맛있으라고 들었어요"
        },
        {
          "id": "c3",
          "text": "해물탕이 맛있다고 들었어요"
        },
        {
          "id": "c4",
          "text": "해물탕이 맛있는다고 들었어요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "'있다/없다'가 포함된 형용사 '맛있다'는 간접 화법 인용 시 '-다고 하다/듣다'를 사용하여 '맛있다고 들었어요'가 됩니다.",
      "explanationVi": "Tính từ '맛있다' (ngon), có chứa '있다/없다', khi trích dẫn gián tiếp dùng '-다고 하다/듣다', tạo thành '맛있다고 들었어요'.",
      "explanationEn": "The adjective '맛있다' (delicious), which contains '있다/없다', uses '-다고 하다/듣다' in indirect speech, forming '맛있다고 들었어요'."
    },
    {
      "id": "q42",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 폴 씨가 전화를 안 받는데 혹시 폴 씨 못 봤어요?\nB: 오늘 _________________________________. (등산 / 가다)",
      "choices": [
        {
          "id": "c1",
          "text": "등산을 간다고 들었어요"
        },
        {
          "id": "c2",
          "text": "등산을 가다고 들었어요"
        },
        {
          "id": "c3",
          "text": "등산을 갈라고 들었어요"
        },
        {
          "id": "c4",
          "text": "등산을 가자고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "동사 '가다'는 받침이 없으므로 '-ㄴ다고 듣다'와 결합하여 '간다고 들었어요'가 됩니다.",
      "explanationVi": "Động từ '가다' (đi) không có patchim, nên kết hợp với '-ㄴ다고 듣다', tạo thành '간다고 들었어요'.",
      "explanationEn": "The verb '가다' (to go) has no final consonant, so it combines with '-ㄴ다고 듣다', forming '간다고 들었어요'."
    },
    {
      "id": "q43",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 오늘 회식 때 삼겹살을 먹으면 어떨까요?\nB: 수미 씨가 _________________________________. (고기 / 못 먹다)",
      "choices": [
        {
          "id": "c1",
          "text": "고기를 못 먹는다고 들었어요"
        },
        {
          "id": "c2",
          "text": "고기를 못 먹다고 들었어요"
        },
        {
          "id": "c3",
          "text": "고기를 못 먹으라고 들었어요"
        },
        {
          "id": "c4",
          "text": "고기를 못 먹자고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "동사 '먹다'는 받침이 있으므로 간접 화법 '-는다고 듣다'와 결합하여 '먹는다고 들었어요'가 됩니다.",
      "explanationVi": "Động từ '먹다' (ăn) có patchim, nên kết hợp với lối nói gián tiếp '-는다고 듣다', tạo thành '먹는다고 들었어요'.",
      "explanationEn": "The verb '먹다' (to eat) has a final consonant, so it combines with the indirect speech form '-는다고 듣다', forming '먹는다고 들었어요'."
    },
    {
      "id": "q44",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 미사코 씨가 왜 학교에 안 오는지 아세요?\nB: 네, _________________________________. (고향 / 돌아갔다)",
      "choices": [
        {
          "id": "c1",
          "text": "고향에 돌아갔자고 들었어요"
        },
        {
          "id": "c2",
          "text": "고향에 돌아갔냐고 들었어요"
        },
        {
          "id": "c3",
          "text": "고향에 돌아갔라고 들었어요"
        },
        {
          "id": "c4",
          "text": "고향에 돌아갔다고 들었어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "과거 시제 '-았/었-' 뒤에는 항상 '-다고 하다/듣다'가 결합하므로 '돌아갔다고 들었어요'가 알맞습니다.",
      "explanationVi": "Sau thì quá khứ '-았/었-' luôn kết hợp với '-다고 하다/듣다', nên '돌아갔다고 들었어요' là phù hợp.",
      "explanationEn": "After the past tense marker '-았/었-', '-다고 하다/듣다' is always combined, so '돌아갔다고 들었어요' is appropriate."
    },
    {
      "id": "q45",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 민수 씨, 회의가 언제예요?\nB: _________________________________. (회의 / 다음 주)",
      "choices": [
        {
          "id": "c1",
          "text": "회의가 다음 주라고 들었어요"
        },
        {
          "id": "c2",
          "text": "회의가 다음 주다고 들었어요"
        },
        {
          "id": "c3",
          "text": "회의가 다음 주냐고 들었어요"
        },
        {
          "id": "c4",
          "text": "회의가 다음 주자고 들었어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '주'에는 받침이 없으므로 인용 조사 '-라고'를 결합하여 '다음 주라고 들었어요'가 됩니다.",
      "explanationVi": "Danh từ '주' (tuần) không có patchim, nên kết hợp với trợ từ trích dẫn '-라고', tạo thành '다음 주라고 들었어요'.",
      "explanationEn": "The noun '주' (week) has no final consonant, so it combines with the quoting particle '-라고', forming '다음 주라고 들었어요'."
    },
    {
      "id": "q46",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 졸업식 장소가 어디인지 아세요?\nB: _________________________________. (졸업식 장소 / 대강당)",
      "choices": [
        {
          "id": "c1",
          "text": "졸업식 장소가 대강당다고 들었어요"
        },
        {
          "id": "c2",
          "text": "졸업식 장소가 대강당이라고 들었어요"
        },
        {
          "id": "c3",
          "text": "졸업식 장소가 대강당냐고 들었어요"
        },
        {
          "id": "c4",
          "text": "졸업식 장소가 대강당자고 들었어요"
        }
      ],
      "correctAnswer": "c2",
      "explanationKo": "명사 '대강당'은 받침이 있으므로 '-이라고'를 사용하여 '대강당이라고 들었어요'가 됩니다.",
      "explanationVi": "Danh từ '대강당' (hội trường lớn) có patchim, nên dùng '-이라고', tạo thành '대강당이라고 들었어요'.",
      "explanationEn": "The noun '대강당' (main auditorium) has a final consonant, so '-이라고' is used, forming '대강당이라고 들었어요'."
    },
    {
      "id": "q47",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 오리엔테이션이 언제인지 알아요?\nB: 선배가 _________________________________. (이번 주 금요일)",
      "choices": [
        {
          "id": "c1",
          "text": "이번 주 금요일이라고 그랬어요"
        },
        {
          "id": "c2",
          "text": "이번 주 금요일다고 그랬어요"
        },
        {
          "id": "c3",
          "text": "이번 주 금요일냐고 그랬어요"
        },
        {
          "id": "c4",
          "text": "이번 주 금요일자고 그랬어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '금요일'에 받침이 있으므로 간접 화법 인용 시 '-이라고 그랬어요'를 붙입니다.",
      "explanationVi": "Danh từ '금요일' (thứ Sáu) có patchim, nên khi trích dẫn gián tiếp ta gắn '-이라고 그랬어요'.",
      "explanationEn": "The noun '금요일' (Friday) has a final consonant, so in indirect speech '-이라고 그랬어요' is attached."
    },
    {
      "id": "q48",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 요즘 고향 뉴스를 들었어요?\nB: 네, _________________________________. (비가 많이 왔다)",
      "choices": [
        {
          "id": "c1",
          "text": "비가 많이 왔자고 들었어요"
        },
        {
          "id": "c2",
          "text": "비가 많이 왔냐고 들었어요"
        },
        {
          "id": "c3",
          "text": "비가 많이 왔라고 들었어요"
        },
        {
          "id": "c4",
          "text": "비가 많이 왔다고 들었어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "과거 시제 선어말 어미 '-았-' 뒤에는 '-다고 들었어요'가 결합합니다.",
      "explanationVi": "Sau tiền tố thì quá khứ '-았-' thì '-다고 들었어요' được kết hợp vào.",
      "explanationEn": "After the past tense pre-final ending '-았-', '-다고 들었어요' is combined."
    },
    {
      "id": "q49",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 켈리 씨가 주말에 뭐 한다고 했어요?\nB: _________________________________. (사진 전시회에 가다)",
      "choices": [
        {
          "id": "c1",
          "text": "사진 전시회에 간다고 말했어요"
        },
        {
          "id": "c2",
          "text": "사진 전시회에 가다고 말했어요"
        },
        {
          "id": "c3",
          "text": "사진 전시회에 갈라고 말했어요"
        },
        {
          "id": "c4",
          "text": "사진 전시회에 가자고 말했어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "동사 '가다'는 받침이 없으므로 평서문 간접 화법 시 '-ㄴ다고 말하다'와 결합하여 '간다고 말했어요'가 됩니다.",
      "explanationVi": "Động từ '가다' (đi) không có patchim, nên trong câu trần thuật gián tiếp kết hợp với '-ㄴ다고 말하다', tạo thành '간다고 말했어요'.",
      "explanationEn": "The verb '가다' (to go) has no final consonant, so in declarative indirect speech it combines with '-ㄴ다고 말하다', forming '간다고 말했어요'."
    },
    {
      "id": "q50",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 미호 씨가 휴가가 언제라고 그랬지요?\nB: _________________________________. (다음 주)",
      "choices": [
        {
          "id": "c1",
          "text": "다음 주라고 그랬어요"
        },
        {
          "id": "c2",
          "text": "다음 주다고 그랬어요"
        },
        {
          "id": "c3",
          "text": "다음 주냐고 그랬어요"
        },
        {
          "id": "c4",
          "text": "다음 주자고 그랬어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "명사 '주'는 받침이 없으므로 평서문 간접 화법 인용 시 '-라고 그랬어요'가 결합합니다.",
      "explanationVi": "Danh từ '주' (tuần) không có patchim, nên khi trích dẫn gián tiếp câu trần thuật, '-라고 그랬어요' được kết hợp vào.",
      "explanationEn": "The noun '주' (week) has no final consonant, so in declarative indirect quotation, '-라고 그랬어요' is combined."
    },
    {
      "id": "q51",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: '한국 문학' 수업이 어떻다고 해요?\nB: _________________________________. (수업도 재미있고 교수님도 좋다)",
      "choices": [
        {
          "id": "c1",
          "text": "수업도 재미있고 교수님도 좋자고 들었어요"
        },
        {
          "id": "c2",
          "text": "수업도 재미있고 교수님도 좋냐고 들었어요"
        },
        {
          "id": "c3",
          "text": "수업도 재미있고 교수님도 좋으라고 들었어요"
        },
        {
          "id": "c4",
          "text": "수업도 재미있고 교수님도 좋다고 들었어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "형용사 '좋다'는 평서문 간접 화법에서 '-다고 들었다'와 결합하여 '좋다고 들었어요'가 됩니다.",
      "explanationVi": "Tính từ '좋다' (tốt) trong lối nói gián tiếp câu trần thuật kết hợp với '-다고 들었다', tạo thành '좋다고 들었어요'.",
      "explanationEn": "The adjective '좋다' (good) combines with '-다고 들었다' in declarative indirect speech, forming '좋다고 들었어요'."
    },
    {
      "id": "q52",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 고향 친구가 한국 음식을 먹고 뭐라고 말했어요?\nB: _________________________________. (맵지만 맛있다)",
      "choices": [
        {
          "id": "c1",
          "text": "맵지만 맛있자고 말했어요"
        },
        {
          "id": "c2",
          "text": "맵지만 맛있냐고 말했어요"
        },
        {
          "id": "c3",
          "text": "맵지만 맛있으라고 말했어요"
        },
        {
          "id": "c4",
          "text": "맵지만 맛있다고 말했어요"
        }
      ],
      "correctAnswer": "c4",
      "explanationKo": "형용사 '맛있다'는 간접 화법 인용 시 '-다고 말하다'와 결합하여 '맛있다고 말했어요'가 알맞습니다.",
      "explanationVi": "Tính từ '맛있다' (ngon) khi trích dẫn gián tiếp kết hợp với '-다고 말하다', nên '맛있다고 말했어요' là phù hợp.",
      "explanationEn": "The adjective '맛있다' (delicious) combines with '-다고 말하다' in indirect speech, so '맛있다고 말했어요' is appropriate."
    },
    {
      "id": "q53",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 지금 다니는 회사가 어떻다고 생각해요?\nB: _________________________________. (일은 재미있는데 월급이 좀 적다)",
      "choices": [
        {
          "id": "c1",
          "text": "일은 재미있는데 월급이 좀 적자고 생각해요"
        },
        {
          "id": "c2",
          "text": "일은 재미있는데 월급이 좀 적냐고 생각해요"
        },
        {
          "id": "c3",
          "text": "일은 재미있는데 월급이 좀 적다고 생각해요"
        },
        {
          "id": "c4",
          "text": "일은 재미있는데 월급이 좀 적으라고 생각해요"
        }
      ],
      "correctAnswer": "c3",
      "explanationKo": "형용사 '적다'를 내 생각으로 인용하여 표현할 때 '-다고 생각하다'와 결합해 '적다고 생각해요'가 됩니다.",
      "explanationVi": "Khi trích dẫn tính từ '적다' (ít) theo suy nghĩ của bản thân, ta kết hợp với '-다고 생각하다', tạo thành '적다고 생각해요'.",
      "explanationEn": "When quoting the adjective '적다' (little/few) as one's own opinion, it combines with '-다고 생각하다', forming '적다고 생각해요'."
    },
    {
      "id": "q54",
      "type": "multiple-choice",
      "skill": "grammar",
      "unitLabel": "1과 · 문법",
      "questionText": "다음 대화의 빈칸에 알맞은 것을 고르십시오.\nA: 처음 여자 친구를 만났을 때 무슨 생각을 했어요?\nB: _________________________________. (참 예쁘다)",
      "choices": [
        {
          "id": "c1",
          "text": "참 예쁘다고 생각했어요"
        },
        {
          "id": "c2",
          "text": "참 예쁘자고 생각했어요"
        },
        {
          "id": "c3",
          "text": "참 예쁘냐고 생각했어요"
        },
        {
          "id": "c4",
          "text": "참 예쁘라고 생각했어요"
        }
      ],
      "correctAnswer": "c1",
      "explanationKo": "형용사 '예쁘다'를 생각으로 인용하여 나타낼 때 '-다고 생각하다'와 결합하여 '예쁘다고 생각했어요'가 됩니다.",
      "explanationVi": "Khi trích dẫn tính từ '예쁘다' (đẹp) theo suy nghĩ, ta kết hợp với '-다고 생각하다', tạo thành '예쁘다고 생각했어요'.",
      "explanationEn": "When quoting the adjective '예쁘다' (pretty) as a thought, it combines with '-다고 생각하다', forming '예쁘다고 생각했어요'."
    }
  ]
};

export default quiz;
