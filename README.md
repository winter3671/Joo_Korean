## 📌 현재 진행 상황 (2026-09-19)

이 저장소는 "41. 추천 개발 단계" 기준 **Phase 1 (화면 프로토타입)** 완료 + **Phase 2 일부(인프라 연결)** 까지 진행된 상태입니다.

- **기술 스택 초기 세팅**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, `@supabase/supabase-js` 설치 완료
- **학생 화면 프로토타입**: 홈(`/`, 오늘의 복습 카드 + 지난 수업 목록) → 퀴즈 풀이(`/quiz/[quizId]`, 객관식/O·X/빈칸/문장배열/이미지 어휘/듣기 6종 모두 구현) → 정답 확인·해설(베트남어 도움말 토글) → 다음 문제 → 결과 화면(어휘·문법·듣기 별점, 틀린 문제만 다시 풀기)까지 클릭 가능한 흐름으로 구현. mock 퀴즈 id는 `snu3-unit7-review`.
- **교사 관리자 화면 프로토타입**: `/admin` Dashboard(오늘 참여자·평균 점수·어려운 문제 랭킹·내 수업)와 문제 등록 화면 `/admin/questions/new`(6개 유형 전환 UI) 구현. **저장 버튼은 아직 동작하지 않고 안내 메시지만 표시**됩니다. 나머지 nav 탭(수업 관리/교재 관리/단원 관리/학습 통계)은 "준비중" 배지만 있고 라우트는 아직 없습니다.
- **Supabase 연결 완료**: `.env.local` 생성 및 Supabase 프로젝트 연결 완료. 다만 **화면(학생/관리자 모두)은 아직 `lib/mock-data.ts` 의 mock 데이터를 사용** 중이며, DB 스키마 마이그레이션 및 실제 쿼리 연동은 아직 진행 전입니다.
- **Vercel 배포 완료**: Vercel 프로젝트 연결 및 배포 완료 (현재 배포된 화면도 위와 마찬가지로 mock 데이터 기반 프로토타입입니다).
  - 배포 주소: https://joo-korean.vercel.app
  - Vercel 프로젝트: https://vercel.com/joo-korean
- **문제 유형 방침 변경**: 학생들이 타이핑에 익숙하지 않은 외국인 학습자라, 앞으로 만드는 문제는 전부 4지선다(객관식)로 통일하기로 함.
- **수업 자료 → 문제은행 → 앱 데이터 파이프라인 구축**: 교재 PDF를 다른 에이전트가 `data/문제_생성_프롬프트.md` 양식(4지선다, 분류/정답/해설 필드 고정)에 따라 md 문제은행으로 변환하고, 그 md를 `scripts/md-to-quiz.mjs` 스크립트가 `types/quiz.ts` 의 `Quiz` 형태 TS 파일(`lib/quizzes/*.ts`)로 자동 변환하도록 구축함. 1과 1차시 문제은행(54문제, 어휘 13·문법 41)을 이 파이프라인으로 변환해 `snu3-unit1-session1` 퀴즈로 등록 — 홈 화면 "지난 수업 복습하기"에서 1과 카드가 이제 활성화되어 있음. `Question` 타입에 `skill` 필드를 추가해(4지선다로 통일되면서 문제 유형만으로는 어휘/문법 구분이 안 되므로) 결과 화면의 어휘·문법 별점이 정확히 계산되도록 함(`getQuestionSkill` 헬퍼 사용). 아직 문제은행 전체(54문제)를 한 퀴즈로 그대로 넣은 상태라 "오늘의 복습"용 짧은 분량으로 나누는 작업은 다음 단계.
- **검증**: `npm run build`, `npx tsc --noEmit`, `npx eslint .` 모두 통과 확인 (단, 위 문제은행 파이프라인 관련 파일들은 이번 세션에서 데이터 구조·타입 정합성만 수동/스크립트로 확인했고 실제 `npm run build` 는 로컬에서 아직 재확인 전 — 아래 "로컬 실행 방법"으로 확인 권장).
- **디자인**: 전체적으로 연한 오렌지 톤 테마 적용 (`app/globals.css` 의 `--color-brand-*` 참고). 웹폰트(Noto Sans KR) 대신 시스템 폰트 스택("Apple SD Gothic Neo", "Malgun Gothic" 등) 사용 중. 문장 배열 문제는 Drag & Drop 대신 "탭하여 순서대로 쌓기" 방식, 듣기 문제는 실제 음원 없이 재생 시뮬레이션으로 구현.

### 로컬 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 학생 화면을, `http://localhost:3000/admin` 에서 교사 관리자 화면을 확인할 수 있습니다. (`.env.local` 은 이미 생성되어 있어야 합니다.)

### 다음 단계 (README "41. 추천 개발 단계" 기준)

- **Phase 2 마무리**: 스키마(teachers/classes/books/units/quizzes/questions/choices/quiz_attempts/answers) 마이그레이션 → `lib/mock-data.ts` 를 실제 Supabase 쿼리로 교체
- **Phase 3~5**: 교사 관리자 CRUD 실제 동작 구현, 나머지 관리자 탭(수업/교재/단원 관리, 학습 통계) 라우트 구현, 학생 퀴즈 기능을 mock 데이터 대신 실 데이터로 교체, 통계 화면 고도화

---

# 한국어 수업 복습 퀴즈 웹사이트 설계서

## 1. 프로젝트 개요

### 프로젝트명
한국어 복습 교실  
가칭: **Korean Review Class**

### 목적
외국인 한국어 학습자들이 수업 종료 후 휴대폰이나 PC에서 자유롭게 접속하여 그날 배운 내용을 복습할 수 있는 웹 기반 퀴즈 시스템을 구축한다.

주요 학습자는 베트남인 유학생을 포함한 외국인 한국어 학습자이다.

### 핵심 목표

1. 학생이 별도의 복잡한 절차 없이 빠르게 복습할 수 있도록 한다.
2. 틀린 문제에 대해 쉬운 한국어 설명을 제공한다.
3. 필요한 경우 베트남어 도움말을 제공한다.
4. 교사가 개발 지식 없이 직접 문제를 등록하고 수정할 수 있도록 한다.
5. 학생들이 어려워하는 어휘·문법을 교사가 확인할 수 있도록 한다.
6. 서울대한국어, 세종한국어 등 특정 교재에 종속되지 않도록 설계한다.

---

# 2. 권장 기술 스택

## 기본 권장안

```text
Frontend / Backend
Next.js

Language
TypeScript

UI
React
Tailwind CSS

Database
PostgreSQL

Backend Service
Supabase

Authentication
Supabase Auth

Storage
Supabase Storage

Hosting
Vercel

Source Control
GitHub
```

### 최종 추천 구조

```text
Next.js + TypeScript
        │
        ├── React
        ├── Tailwind CSS
        │
        ├── Supabase
        │     ├── PostgreSQL
        │     ├── Authentication
        │     └── Storage
        │
        └── Vercel
```

---

# 3. React + TypeScript를 사용하는 이유

React와 TypeScript는 본 프로젝트에 적합하다.

### React 장점

- 퀴즈 화면처럼 사용자 interaction이 많은 UI 구현에 적합
- 문제 유형별 Component 제작 가능
- 모바일 UI 개발이 편리함
- 관련 라이브러리가 많음
- 향후 기능 확장이 쉬움

예:

```text
MultipleChoiceQuestion
FillBlankQuestion
SentenceOrderQuestion
ListeningQuestion
OXQuestion
ImageQuestion
```

문제 유형마다 React Component를 만들 수 있다.

---

## TypeScript를 사용하는 이유

퀴즈 시스템에서는 데이터 구조가 중요하다.

예를 들어 다음과 같은 실수를 줄일 수 있다.

```text
문제
정답
선택지
해설
문제 유형
음성 파일
이미지
단원
교재
```

TypeScript를 사용하면 각 데이터의 구조를 명확하게 정의할 수 있다.

예:

```ts
type QuestionType =
  | "multiple-choice"
  | "fill-blank"
  | "sentence-order"
  | "listening"
  | "ox";

interface Question {
  id: string;
  type: QuestionType;
  question: string;
  explanation: string;
}
```

---

# 4. React 대신 Next.js를 권장하는 이유

React + Vite만으로도 구현할 수 있지만 본 프로젝트에서는 Next.js를 권장한다.

Next.js는 React 기반 Framework이다.

### 장점

- 페이지 Routing 기본 지원
- Backend API 구현 가능
- 로그인 처리 용이
- 관리자 페이지 구현 용이
- SEO 지원
- Vercel 배포 용이
- 서버와 클라이언트 코드를 하나의 프로젝트에서 관리 가능

React만 사용할 경우 별도의 Backend 서버가 필요할 가능성이 높다.

따라서 본 프로젝트에서는

```text
React + TypeScript
```

보다는

```text
Next.js + TypeScript
```

구조를 권장한다.

---

# 5. Supabase를 사용하는 이유

Supabase는 다음 기능을 한번에 제공한다.

```text
Database
Authentication
Storage
API
```

따라서 별도의 Backend 서버를 처음부터 구축하지 않아도 된다.

### 사용 예

Database

```text
학생
교사
교재
단원
퀴즈
문제
정답
학습기록
```

Authentication

```text
교사 로그인
```

Storage

```text
문제 이미지
듣기 MP3
교재 관련 이미지
```

---

# 6. 사용자 유형

서비스 사용자는 크게 두 종류이다.

## 학생

가능하면 회원가입 없이 사용할 수 있도록 한다.

학생 기능:

```text
퀴즈 풀기
단원 선택
오늘의 복습
문제 채점
정답 확인
해설 확인
베트남어 도움말 확인
틀린 문제 다시 풀기
학습 결과 확인
```

향후 선택적으로 학생 계정을 추가할 수 있다.

---

## 교사

교사는 로그인이 필요하다.

교사 기능:

```text
교재 생성
반 생성
단원 생성
퀴즈 생성
문제 등록
문제 수정
문제 삭제
이미지 업로드
음원 업로드
퀴즈 공개
학생 결과 확인
문제별 정답률 확인
```

---

# 7. 기본 서비스 구조

```text
한국어 복습 사이트
│
├── 학생
│   │
│   ├── 오늘의 복습
│   ├── 교재 선택
│   ├── 단원 선택
│   ├── 퀴즈
│   ├── 결과
│   └── 틀린 문제 복습
│
└── 교사
    │
    ├── Dashboard
    ├── 수업 관리
    ├── 교재 관리
    ├── 단원 관리
    ├── 문제 관리
    └── 학습 통계
```

---

# 8. 학생 학습 흐름

학생은 가능한 적은 단계로 퀴즈를 시작할 수 있어야 한다.

```text
QR 또는 링크 접속
        ↓
오늘의 복습
        ↓
퀴즈 시작
        ↓
문제 풀이
        ↓
즉시 또는 최종 채점
        ↓
결과 확인
        ↓
틀린 문제 다시 풀기
```

---

# 9. 추천 URL 구조

```text
/
```

메인 페이지

```text
/class/[classId]
```

수업 페이지

예:

```text
/class/snu-korean-3
```

---

단원

```text
/class/[classId]/unit/[unitId]
```

예:

```text
/class/snu-korean-3/unit/07
```

---

퀴즈

```text
/quiz/[quizId]
```

---

결과

```text
/quiz/[quizId]/result
```

---

교사 관리자

```text
/admin
```

```text
/admin/classes
/admin/books
/admin/units
/admin/quizzes
/admin/questions
/admin/statistics
```

---

# 10. 문제 유형

초기에는 다음 문제를 지원한다.

## 1. 객관식

예:

```text
친구를 ______ 영화를 봤어요.

① 만나고
② 만나서
③ 만나면
④ 만나니까
```

---

## 2. 빈칸 채우기

```text
어제 친구를 ______ 영화를 봤어요.
```

---

## 3. O/X 문제

```text
'길이 막혀서 지하철을 탔어요.'

이 문장은 자연스럽다.

O / X
```

---

## 4. 문장 배열

```text
친구하고 / 시장에 / 어제 / 갔어요
```

학생이 Drag & Drop으로 배열한다.

정답:

```text
어제 친구하고 시장에 갔어요.
```

---

## 5. 이미지 어휘

```text
[음식 사진]

이것은 무엇입니까?

① 김밥
② 비빔밥
③ 불고기
④ 떡볶이
```

---

## 6. 듣기 문제

```text
🔊 듣기

음성을 듣고 알맞은 답을 고르세요.
```

음원은 Supabase Storage에 저장한다.

---

# 11. 해설 시스템

학생이 문제를 틀렸을 때 정답만 보여주지 않는다.

예:

```text
❌ 아쉬워요.

정답

길이 막혀서 지하철을 탔어요.

💡 왜 그럴까요?

'-아/어서'는 앞의 내용이 뒤의 행동의
이유이나 원인이 될 때 사용할 수 있습니다.

길이 막혔어요.
그래서 지하철을 탔어요.

→ 길이 막혀서 지하철을 탔어요.
```

---

## 베트남어 도움말

기본적으로 한국어 설명을 먼저 보여준다.

버튼:

```text
🇻🇳 베트남어로 보기
```

버튼을 누르면 베트남어 설명이 펼쳐진다.

데이터 구조 예:

```text
explanationKo
explanationVi
```

---

# 12. 학생 메인 화면

예상 UI:

```text
────────────────────────

       한국어 복습 교실

안녕하세요!

오늘 배운 내용을
복습해 볼까요?

────────────────────────

서울대 한국어 3급

7과

오늘의 복습

10문제
약 5분

[ 퀴즈 시작하기 ]

────────────────────────

지난 수업 복습하기

1과
2과
3과
4과
5과
6과

────────────────────────
```

---

# 13. 문제 풀이 화면

```text
7과 복습

3 / 10

███████─────────────

친구를 ______ 영화를 봤어요.

① 만나고

② 만나서

③ 만나면

④ 만나니까

        [정답 확인]
```

모바일 화면에서는 선택지를 크게 표시한다.

---

# 14. 정답 화면

정답:

```text
✅ 맞았어요!

친구를 만나서 영화를 봤어요.

'-아/어서'는 행동이 자연스럽게
이어질 때 사용할 수 있어요.

[다음 문제]
```

오답:

```text
❌ 아쉬워요!

정답은

② 만나서

입니다.

💡 설명

'-아/어서'는 앞 행동 다음에
뒤 행동이 이어질 때 사용할 수 있습니다.

[다음 문제]
```

---

# 15. 결과 화면

```text
오늘의 결과

8 / 10

잘했어요!

어휘
★★★★★

문법
★★★★☆

듣기
★★★☆☆

틀린 문제

2개

[틀린 문제 다시 풀기]

[다른 단원 복습하기]
```

---

# 16. 관리자 Dashboard

교사가 로그인하면 Dashboard를 표시한다.

예:

```text
안녕하세요, 선생님.

오늘

퀴즈 참여
18명

평균 점수
76점

────────────────────

학생들이 어려워한 문제

1위
-다고 하던데요
정답률 38%

2위
-던데요
정답률 45%

3위
-아/어지다
정답률 61%

────────────────────
```

---

# 17. 문제 등록 화면

```text
문제 만들기
```

문제 유형 선택:

```text
객관식
빈칸
문장 배열
O/X
듣기
이미지
```

입력 항목:

```text
문제

선택지

정답

한국어 해설

베트남어 도움말

이미지

음원
```

버튼:

```text
[저장]

[저장 후 다음 문제]
```

---

# 18. 데이터베이스 구조

초기 Database는 다음 정도면 충분하다.

```text
teachers

classes

books

units

quizzes

questions

choices

quiz_attempts

answers
```

---

# 19. teachers

```text
id
name
email
created_at
```

---

# 20. classes

수업 또는 반.

예:

```text
대구가톨릭대학교 서울대한국어 3급
청도 가족센터 세종한국어 1B
```

필드:

```text
id
teacher_id
name
description
created_at
```

---

# 21. books

교재.

예:

```text
서울대한국어 3급
서울대한국어 4급
세종한국어 1B
```

필드:

```text
id
title
level
publisher
```

---

# 22. units

단원.

```text
id
book_id
unit_number
title
description
```

예:

```text
7과
여행
```

---

# 23. quizzes

```text
id
unit_id
title
description
is_published
created_at
```

예:

```text
7과 수업 후 복습
```

---

# 24. questions

핵심 Table.

```text
id

quiz_id

type

question_text

correct_answer

explanation_ko

explanation_vi

image_url

audio_url

order_number

created_at
```

---

# 25. choices

객관식 선택지.

```text
id
question_id
text
is_correct
order_number
```

---

# 26. quiz_attempts

학생의 퀴즈 수행 기록.

```text
id

quiz_id

student_name

score

total_questions

started_at

completed_at
```

초기에는 학생 계정 없이 닉네임 정도만 받을 수 있다.

또는 완전 익명으로 사용할 수도 있다.

---

# 27. answers

학생 문제별 응답.

```text
id

attempt_id

question_id

answer

is_correct

created_at
```

이 Table을 이용하여 문제별 정답률을 계산한다.

---

# 28. 개인정보 최소화

초기 버전에서는 학생 개인정보를 최소한으로 수집한다.

권장 방식:

```text
학생 로그인 없음
```

또는

```text
별명 또는 학생번호 일부
```

정도만 사용한다.

민감한 개인정보는 저장하지 않는 방향을 권장한다.

---

# 29. QR 코드 활용

수업 종료 후 교사가 QR 코드를 보여준다.

예:

```text
오늘의 복습

서울대한국어 3급
7과

[QR CODE]
```

학생은 QR을 촬영한다.

```text
QR
↓
퀴즈 페이지
↓
바로 시작
```

카카오톡 또는 단체 채팅방에 링크를 공유할 수도 있다.

---

# 30. 모바일 우선 설계

Mobile First 방식으로 개발한다.

기준 화면:

```text
360px
390px
430px
```

PC에서도 사용 가능하지만 스마트폰 사용성을 가장 중요하게 고려한다.

---

# 31. UI 원칙

한국어 초급 학습자가 사용하는 사이트이므로 UI 문장은 짧고 쉽게 작성한다.

좋은 예:

```text
퀴즈 시작하기

정답 확인

다음 문제

다시 풀기

베트남어로 보기
```

피해야 할 표현:

```text
평가를 개시합니다.

답안을 제출하십시오.

학습 결과 분석 페이지로 이동합니다.
```

---

# 32. 디자인 방향

추천 스타일:

```text
밝은 배경

큰 글씨

둥근 버튼

적은 메뉴

간단한 아이콘

높은 가독성
```

어린이 교육 사이트처럼 보이지 않도록 한다.

대학생 및 성인 학습자를 고려하여 깔끔한 교육 서비스 디자인을 사용한다.

---

# 33. 프로젝트 폴더 구조 예시

```text
src/

├── app/
│
│   ├── page.tsx
│
│   ├── class/
│
│   ├── quiz/
│
│   └── admin/
│
├── components/
│
│   ├── quiz/
│   │
│   ├── admin/
│   │
│   └── common/
│
├── lib/
│
│   ├── supabase.ts
│   ├── database.ts
│   └── quiz.ts
│
├── types/
│
│   ├── quiz.ts
│   ├── question.ts
│   └── database.ts
│
└── utils/
```

---

# 34. Quiz Component 구조

```text
QuizPage

├── QuizHeader
├── ProgressBar
├── QuestionRenderer
│
│   ├── MultipleChoice
│   ├── FillBlank
│   ├── SentenceOrder
│   ├── OXQuestion
│   ├── ImageQuestion
│   └── ListeningQuestion
│
├── AnswerResult
├── Explanation
└── NextButton
```

---

# 35. 문제 렌더링 방식

Question type에 따라 Component를 선택한다.

개념:

```ts
switch (question.type) {
  case "multiple-choice":
    return <MultipleChoice />

  case "fill-blank":
    return <FillBlank />

  case "sentence-order":
    return <SentenceOrder />

  case "listening":
    return <ListeningQuestion />
}
```

이 구조를 사용하면 향후 새로운 문제 유형을 추가하기 쉽다.

---

# 36. MVP

첫 번째 버전에서는 기능을 너무 많이 만들지 않는다.

## 학생 기능

```text
QR/링크 접속

단원 확인

퀴즈 풀기

자동 채점

한국어 해설

베트남어 도움말

결과 확인

틀린 문제 다시 풀기
```

---

## 교사 기능

```text
로그인

교재 관리

단원 관리

퀴즈 생성

문제 생성

문제 수정

퀴즈 공개

평균 점수 확인

문제별 정답률 확인
```

---

# 37. MVP에서 제외할 기능

다음 기능은 처음부터 만들지 않는다.

```text
학생 회원가입

학생 간 Ranking

SNS 기능

게시판

실시간 Chat

AI Tutor

복잡한 Badge System

과도한 Game 요소
```

MVP 사용 후 필요하면 추가한다.

---

# 38. 2차 개발 기능

실제 학생들에게 사용해본 뒤 다음 기능을 고려한다.

```text
학생 계정

학습 History

오답 Note

즐겨찾기 문제

연속 학습 기록

단어장

랜덤 복습

문법별 복습

취약 유형 복습
```

---

# 39. AI 기능

AI는 초기 핵심 기능으로 넣지 않는 것을 권장한다.

서비스가 안정된 이후 추가한다.

예:

```text
교사가 문제 자동 생성

교사가 작성한 문장의 난이도 조정

한국어 해설 자동 생성

베트남어 도움말 생성

비슷한 문제 생성

오답 기반 추가 문제 생성
```

중요:

AI가 만든 문제는 자동 공개하지 않는다.

```text
AI 생성
↓
교사 확인
↓
수정
↓
공개
```

방식을 사용한다.

---

# 40. PWA

향후 PWA 지원을 고려한다.

PWA를 적용하면 학생이 사이트를 스마트폰 홈 화면에 추가할 수 있다.

```text
한국어 복습
```

아이콘을 누르면 일반 App처럼 사용할 수 있다.

App Store나 Google Play에 등록하지 않아도 된다.

---

# 41. 추천 개발 단계

## Phase 1

화면 Prototype 제작

```text
Home
Quiz
Answer
Result
Admin
```

---

## Phase 2

Database 연결

```text
Supabase
```

---

## Phase 3

교사 관리자 개발

```text
문제 CRUD
```

CRUD:

```text
Create
Read
Update
Delete
```

---

## Phase 4

학생 Quiz 기능 개발

```text
문제 출력
답 선택
채점
해설
결과
```

---

## Phase 5

Statistics

```text
참여 인원

평균 점수

문제별 정답률

자주 틀리는 문제
```

---

## Phase 6

실제 수업 Test

실제 학생 5~10명 정도를 대상으로 Test한다.

확인:

```text
QR 접속이 쉬운가?

글씨가 잘 보이는가?

문제를 이해할 수 있는가?

버튼 위치가 편한가?

베트남어 도움이 필요한가?

문제 풀이 시간이 적절한가?
```

---

# 42. 최종 권장 Architecture

```text
                    Student
                       │
                    Mobile
                       │
                       ▼
                ┌─────────────┐
                │   Next.js   │
                │    React    │
                │ TypeScript  │
                └──────┬──────┘
                       │
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
      Supabase                  Vercel
          │
    ┌─────┼─────┐
    │     │     │
    ▼     ▼     ▼
 Database Auth Storage
                │
                ▼
            MP3 / Image
```

---

# 43. 기술 선택 결론

본 프로젝트에서는 다음 구성을 권장한다.

```text
Next.js
+
TypeScript
+
React
+
Tailwind CSS
+
Supabase
+
Vercel
```

React + TypeScript만 사용하는 것보다 Next.js를 기반으로 만드는 것이 향후 관리자 기능과 Backend 기능을 추가하기 쉽다.

---

# 44. 프로젝트 개발 원칙

개발 과정에서는 다음 원칙을 유지한다.

### 1. 학생 화면은 단순하게

한 화면에서 한 가지 행동만 요구한다.

### 2. Mobile First

학생의 스마트폰 사용을 기준으로 한다.

### 3. 교사가 직접 관리 가능

개발자의 도움 없이 문제를 추가할 수 있어야 한다.

### 4. 특정 교재에 종속되지 않음

구조:

```text
수업
↓
교재
↓
단원
↓
퀴즈
↓
문제
```

### 5. 한국어 설명을 우선

베트남어는 보조 수단으로 사용한다.

### 6. 정답보다 해설을 중요하게 설계

학생이 틀린 이유를 이해할 수 있어야 한다.

### 7. 개인정보 최소화

초기에는 학생 회원가입 없이 사용할 수 있도록 한다.

---

# 45. 개발 시작 시 AI 또는 개발자에게 전달할 지시문

아래 내용을 함께 전달하면 프로젝트를 이어가기 쉽다.

```text
이 프로젝트는 외국인 한국어 학습자를 위한
수업 후 복습 Quiz Web Application이다.

주 사용자는 베트남인 한국어 학습자이며
Mobile First로 개발한다.

Tech Stack:

Next.js
TypeScript
React
Tailwind CSS
Supabase
Vercel

학생은 로그인 없이 Quiz를 풀 수 있어야 한다.

교사는 로그인 후 다음 작업을 할 수 있어야 한다.

- 교재 관리
- 단원 관리
- Quiz 생성
- 문제 생성/수정/삭제
- 이미지/음원 등록
- Quiz 공개
- 학생 학습 통계 확인

Quiz 문제 유형:

- 객관식
- 빈칸
- O/X
- 문장 배열
- 이미지
- 듣기

문제에는 다음 정보가 포함될 수 있다.

- 한국어 문제
- 정답
- 선택지
- 한국어 해설
- 베트남어 도움말
- 이미지
- 음원

학생 Quiz Flow:

Quiz 접속
→ 문제 풀이
→ 채점
→ 해설
→ 결과
→ 틀린 문제 다시 풀기

UI는 대학생 및 성인 학습자를 대상으로
깔끔하고 단순하게 설계한다.
```

---

# 46. 핵심 목표 한 문장

> 교사가 수업 내용을 쉽게 퀴즈로 만들고, 외국인 학생이 휴대폰으로 5~10분 동안 부담 없이 복습할 수 있는 한국어 학습 웹서비스를 만든다.