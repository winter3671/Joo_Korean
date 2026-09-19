# 한국어 복습 교실 (Korean Review Class)

외국인 한국어 학습자가 수업이 끝난 뒤 휴대폰이나 PC로 그날 배운 내용을 자유롭게 복습할 수 있는 웹 기반 퀴즈 시스템입니다. 주요 학습자는 베트남인 유학생을 포함한 외국인 한국어 학습자입니다.

- **배포 주소**: https://joo-korean.vercel.app
- **Vercel 프로젝트**: https://vercel.com/joo-korean
- **전체 기획/설계 문서**: [docs/설계서.md](./docs/설계서.md) — 프로젝트 목표, 기술 스택 선정 이유, 화면 와이어프레임, DB 스키마, 개발 단계(Phase 1~6) 등 전체 방향성은 여기로 이관했습니다.

## 기술 스택

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19 · Supabase (DB / Auth / Storage) · Vercel (배포)

## 로컬 실행 방법

```bash
npm install
npm run dev
```

- 학생 화면: http://localhost:3000
- 교사 관리자 화면: http://localhost:3000/admin
- `.env.local` 이 필요합니다 (Supabase 키 등). 저장소에는 포함되어 있지 않으니 별도로 생성해야 합니다.

배포 전 확인:

```bash
npx tsc --noEmit
npx eslint .
npm run build
```

## 프로젝트 구조

```text
app/            Next.js App Router 페이지 (/, /quiz/[quizId], /admin, ...)
components/     화면 컴포넌트 (components/quiz/, components/admin/ 등)
lib/            데이터 조회 계층(lib/quiz-repository.ts), Supabase 클라이언트(lib/supabase.ts),
                mock 데이터(lib/mock-data.ts, DB 연동 전 대체용), 변환된 퀴즈 데이터(lib/quizzes/*.ts),
                퀴즈 유틸(lib/quiz-utils.ts)
types/          공용 TypeScript 타입 (types/quiz.ts 등)
data/           문제은행 원본 md 파일 (data/<과>/<차시>_문제.md) + 변환 프롬프트 문서
scripts/        data/*.md → lib/quizzes/*.ts 변환 스크립트, lib/quizzes/*.ts → supabase/seed_content.sql 생성 스크립트
supabase/       DB 마이그레이션(supabase/migrations/*.sql), 콘텐츠 seed SQL(supabase/seed_content.sql)
docs/           전체 기획/설계 문서
```

## 현재 진행 상황 (2026-09-19)

이 저장소는 화면 프로토타입(학생/관리자) + Supabase·Vercel 연결 + 문제은행→앱 데이터 자동 변환 파이프라인까지 구축된 상태입니다. 자세한 배경은 [docs/설계서.md](./docs/설계서.md)를 참고하세요.

- **학생 화면**: 홈(`/`, 오늘의 복습 카드 + 1과 차시별 버튼) → 퀴즈 풀이(`/quiz/[quizId]`, 4지선다 + 참고자료 박스) → 정답 확인·해설(베트남어/영어 도움말 토글) → 결과 화면(어휘·문법·듣기 별점, 틀린 문제만 다시 풀기)까지 구현됨.
- **문제당 재시도는 최대 2회**: 4지선다 문제를 첫 시도에서 틀리면 오답 메시지와 함께 한 번 더 기회를 주고, 두 번째도 틀리면 해설을 보여주고 다음 문제로 넘어감. 정답률·능력치 별점은 "첫 시도에 맞힌 것"만 정답으로 인정.
- **관리자 화면**: `/admin` 전체가 Supabase Auth(이메일/비밀번호) 로그인으로 보호됩니다 — 로그인하지 않으면 로그인 폼만 보이고, 로그인해야 Dashboard/문제 등록 화면이 나타납니다. `/admin/questions/new` 문제 등록 폼은 실제로 Supabase에 저장됩니다(차시 선택 → 분류·문제·보기 4개·한/베/영 해설 입력 → 저장). 목록 조회·수정·삭제 화면과 나머지 nav 탭(수업/교재/단원 관리, 학습 통계)은 아직 "준비중".
- **Supabase 연결 + Vercel 배포 + 마이그레이션·seed SQL 실행 완료**. 학생 화면의 콘텐츠(퀴즈/문제/선택지)는 실제 Supabase DB를 읽고, 조회에 실패하면 자동으로 `lib/mock-data.ts` 의 mock 데이터로 대체됩니다 — 아래 "Supabase에 콘텐츠 이관하기" 참고. **교사 인증 + 문제 등록은 연결 완료**(아래 "관리자 로그인 설정하기" 참고), 문제 목록/수정/삭제와 학습 기록은 다음 단계.
- **문제 유형은 4지선다(객관식)로 통일**: 학생들이 비원어민이라 타이핑 부담을 줄이기 위한 결정.
- **문제은행 → 앱 데이터 자동 변환 파이프라인 구축 완료**: 아래 "문제은행(md) 추가하는 방법" 참고. 모든 문제는 한국어·베트남어·영어 해설을 함께 갖춘다.
- **1과 1차시(54문제)·2차시(31문제) 문제은행 등록 및 홈 화면 버튼 활성화 완료**.
- **"오늘의 복습" 분량 축소 완료**: `lib/quiz-utils.ts` 의 `buildShortReview()` 가 전체 문제은행에서 10문제를 등간격으로 골고루 뽑아(분류가 한쪽에 치우치지 않도록) 짧은 일일 복습 퀴즈를 만듦. 홈 화면 상단 "오늘의 복습" 카드는 이 축소판을, "1과 복습하기"의 1차시/2차시 버튼은 여전히 전체 문제은행을 가리킴.
- **Supabase 콘텐츠 스키마 + 조회 계층 구축 완료** (Phase 2 1단계): `quizzes`/`questions`/`choices` 3개 테이블과 지금 있는 1과 1·2차시 데이터를 옮기는 seed SQL을 만들었고, `lib/quiz-repository.ts`가 이 테이블을 읽어서 학생 화면에 내려줌(조회 실패 시 mock 데이터로 자동 대체). 교사 인증/문제 CRUD/학습 기록(quiz_attempts, answers)은 다음 단계.

### 다음 단계

- **최종 목표: 관리자 화면에서 문제 데이터를 업로드하면 자동으로 Supabase에 반영** — 첫걸음(교사 로그인 + 문제 등록이 실제로 DB에 저장되는 것)은 완료했습니다. 아직 남은 것: 등록한 문제를 목록에서 보고 수정·삭제하는 화면, 그리고 md/스크립트 없이도 새 차시(quiz) 자체를 관리자 화면에서 만드는 기능. 이게 다 갖춰지면 코드를 몰라도 콘텐츠를 완전히 관리할 수 있게 됩니다.
- **문제 목록/수정/삭제 화면**: 지금은 등록(Create)만 가능. 차시별 문제 목록을 보고 개별 수정·삭제할 수 있는 화면 추가 필요 — 수정/삭제는 RLS에 UPDATE/DELETE 정책도 추가해야 함(`supabase/migrations/0002_admin_write.sql`은 INSERT만 허용).
- 3차시 이후 문제은행 추가 (아래 워크플로우 반복 → `scripts/generate-seed-sql.mjs` 도 다시 실행해서 seed SQL 갱신 → Supabase에서 재실행). 관리자 화면에서 직접 등록해도 되지만, 대량 등록은 아직 md 파이프라인이 더 빠름.
- Phase 2 다음 단계: 학습 기록(quiz_attempts/answers) 테이블 추가
- 관리자 나머지 탭(수업/교재/단원 관리, 학습 통계) 라우트 구현

## 문제은행(md) 추가하는 방법

**`data/` 폴더에 문제은행 md 파일을 추가하는 것만으로는 앱에 자동으로 반영되지 않습니다.** md → TypeScript 변환은 파일 저장을 감지해 자동 실행되는 방식이 아니라, 아래 단계를 순서대로 직접(또는 Claude에게 요청해서) 실행해야 합니다.

### 1. 문제은행 md 작성

`data/<과>/<차시>_문제.md` 형식으로 작성합니다. 형식은 [`data/문제_생성_프롬프트.md`](./data/문제_생성_프롬프트.md)에 고정되어 있고, 이 문서를 그대로 복사해서 다른 에이전트에게 "이 PDF의 p.__~__ 를 이 형식으로 변환해줘"라고 맡기면 편합니다. 핵심 규칙:

- 문제 유형은 100% 4지선다(객관식). 원본이 빈칸/문장배열/O-X 등이어도 전부 4지선다로 변환.
- 빈칸은 항상 정확히 밑줄 6개 `______`.
- 문제마다 분류(어휘 | 문법 | 듣기)를 태깅.
- 해설은 한국어·베트남어·영어 3개 언어를 모두 작성 (학생 화면의 번역 토글 버튼에 쓰임). 세 언어의 내용은 서로 같은 뜻이어야 하고, 문법 예문·어미는 번역하지 않고 그대로 인용.
- 표/일정표/목록처럼 여러 문항이 공유하는 자료가 있으면 "참고자료:" 필드(문제 본문과 별도)에 텍스트로 반복 포함 — 빠뜨리면 "맥락 추론 문제"가 "단어 뜻 아는지 묻는 문제"로 변질됨.
- 원본 PDF 자체는 git에 커밋하지 않음 (저작권) — 변환된 md만 커밋.

### 2. TypeScript 데이터로 변환

```bash
node scripts/md-to-quiz.mjs data/<과>/<차시>_문제.md lib/quizzes/<파일명>.ts \
  --id=<quizId, 예: snu3-unit1-session2> \
  --className="서울대 한국어 3급" \
  --bookTitle="서울대 한국어 Workbook 3A" \
  --minutes=<예상 소요 분(생략 시 문제 수 × 0.4 로 자동 계산)>
```

변환 중 필드 누락이나 분류값 오류가 있으면 콘솔에 경고와 함께 해당 문항이 건너뛰어집니다 — 경고가 있으면 원본 md를 고치고 다시 실행하세요.

### 3. `lib/mock-data.ts` 에 등록

- import 추가: `import unitXSessionY from "./quizzes/<파일명>";`
- `quizzesById` 에 `[unitXSessionY.id]: unitXSessionY` 추가
- `LESSON_SESSIONS` 배열에 해당 차시 항목을 추가하거나(신규 차시), 기존 placeholder 항목의 `quizId`/`available: true` 를 갱신 (2차시까지는 이미 등록되어 있음)

### 4. 확인

`npm run dev` 로 홈 화면에서 새 차시 버튼이 뜨고 퀴즈가 정상적으로 풀리는지 확인한 뒤, `npx tsc --noEmit` 로 타입 오류가 없는지 확인합니다.

Supabase에 콘텐츠를 이관해서 쓰고 있다면(아래 "Supabase에 콘텐츠 이관하기" 참고), `node scripts/generate-seed-sql.mjs` 로 `supabase/seed_content.sql` 을 다시 만들고 Supabase SQL Editor에서 실행해 새 차시를 반영합니다.

## Supabase에 콘텐츠 이관하기

학생 화면이 `lib/quiz-repository.ts` 를 통해 Supabase를 먼저 조회하고, 테이블이 없거나 조회에 실패하면 자동으로 `lib/mock-data.ts` 로 대체됩니다. 마이그레이션은 이미 한 번 실행되어 실제 서비스가 Supabase 콘텐츠로 동작 중이며, 아래 순서는 **콘텐츠를 새로 추가하거나 고칠 때마다** 다시 반복하면 됩니다 (테이블을 새로 만드는 게 아니라면 1번은 건너뛰어도 됩니다).

이번 단계는 **콘텐츠(quizzes/questions/choices)만** 다룹니다. 교사 인증, 문제 등록 화면의 실제 저장, 학습 기록(quiz_attempts/answers) 연동은 다음 단계입니다.

### 1. 테이블 생성

Supabase 대시보드 → SQL Editor에서 [`supabase/migrations/0001_quiz_content.sql`](./supabase/migrations/0001_quiz_content.sql) 내용을 그대로 실행합니다. `quizzes`/`questions`/`choices` 3개 테이블과 인덱스, 그리고 누구나 읽기만 가능한 RLS 정책(공개 콘텐츠이므로 쓰기는 열어두지 않음)이 만들어집니다.

### 2. 콘텐츠 채우기

SQL Editor에서 [`supabase/seed_content.sql`](./supabase/seed_content.sql) 내용을 그대로 실행합니다. 지금 있는 1과 1차시(54문제)·2차시(31문제)가 들어갑니다. 이 파일은 손으로 만든 게 아니라 `lib/quizzes/*.ts` 에서 생성된 것이라, 문제은행을 고치거나 새 차시를 추가한 뒤에는 아래처럼 다시 만들어서 다시 실행하면 됩니다.

```bash
node scripts/generate-seed-sql.mjs
```

새 차시를 seed에 포함시키려면 `scripts/generate-seed-sql.mjs` 상단의 `QUIZZES` 배열에 `{ file, unitNumber, sessionNumber }` 항목을 추가하세요.

### 3. 확인

`.env.local` 에 `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` 가 설정된 상태로 `npm run dev` 를 실행하면, 홈 화면과 퀴즈 풀이가 이제 Supabase에서 읽은 데이터로 동작합니다. 브라우저 콘솔이나 터미널에 `[quiz-repository]` 로 시작하는 경고가 뜨면 Supabase 조회에 실패해 mock 데이터로 대체된 것이니, 테이블/RLS/환경변수를 확인하세요.

### 참고: 홈 화면 차시 목록은 이제 DB 기준

`LESSON_SESSIONS`(홈 화면 "1과 복습하기" 버튼 목록)는 더 이상 코드에 하드코딩되어 있지 않고, `quizzes` 테이블에서 `unit_number = 1` 인 행들을 `session_number` 순서로 읽어서 만듭니다. 즉 seed SQL로 3차시를 추가하면 코드를 따로 고치지 않아도 홈 화면에 "3차시" 버튼이 자동으로 나타납니다 (Supabase 미설정 시에는 여전히 `lib/mock-data.ts` 의 `LESSON_SESSIONS` 를 사용).

## 관리자 로그인 설정하기

`/admin` 화면은 Supabase Auth(이메일/비밀번호) 로그인으로 보호되어 있고, 로그인한 사용자만 문제를 등록할 수 있습니다. 회원가입 화면은 따로 없습니다 — 교사 계정은 관리자(=이 저장소를 운영하는 사람)가 Supabase 대시보드에서 직접 만듭니다.

### 1. 쓰기 권한 마이그레이션 실행

Supabase 대시보드 → SQL Editor에서 [`supabase/migrations/0002_admin_write.sql`](./supabase/migrations/0002_admin_write.sql) 내용을 그대로 실행합니다. 로그인한(= 인증된) 사용자가 `questions`/`choices` 테이블에 INSERT 할 수 있도록 RLS 정책을 추가합니다. (아직 UPDATE/DELETE 정책은 없습니다 — 목록/수정/삭제 화면을 만들 때 함께 추가할 예정.)

### 2. 교사 계정 만들기

Supabase 대시보드 → Authentication → Users → **Add user** 에서 이메일/비밀번호를 입력해 계정을 만듭니다. 이때 **"Auto Confirm User"를 체크**해야 이메일 인증 없이 바로 로그인할 수 있습니다. 교사가 여러 명이면 이 과정을 반복해서 계정을 여러 개 만들면 됩니다.

### 3. 로그인 확인

`/admin` 에 접속하면 로그인 폼이 뜹니다. 방금 만든 계정으로 로그인하면 Dashboard와 문제 등록 화면이 보입니다. `/admin/questions/new` 에서 차시를 선택하고 문제·보기 4개·한국어/베트남어/영어 해설을 모두 입력한 뒤 저장하면 바로 Supabase에 반영됩니다(새로고침 없이 다음 문제를 이어서 입력하려면 "저장 후 다음 문제" 버튼 사용). 헤더의 "로그아웃" 버튼으로 세션을 종료할 수 있습니다.
