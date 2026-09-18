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
lib/            mock 데이터(lib/mock-data.ts), Supabase 클라이언트, 변환된 퀴즈 데이터(lib/quizzes/*.ts)
types/          공용 TypeScript 타입 (types/quiz.ts 등)
data/           문제은행 원본 md 파일 (data/<과>/<차시>_문제.md) + 변환 프롬프트 문서
scripts/        data/*.md → lib/quizzes/*.ts 변환 스크립트 (scripts/md-to-quiz.mjs)
docs/           전체 기획/설계 문서
```

## 현재 진행 상황 (2026-09-19)

이 저장소는 화면 프로토타입(학생/관리자) + Supabase·Vercel 연결 + 문제은행→앱 데이터 자동 변환 파이프라인까지 구축된 상태입니다. 자세한 배경은 [docs/설계서.md](./docs/설계서.md)를 참고하세요.

- **학생 화면**: 홈(`/`, 오늘의 복습 카드 + 1과 차시별 버튼) → 퀴즈 풀이(`/quiz/[quizId]`, 4지선다 + 참고자료 박스) → 정답 확인·해설(베트남어 도움말 토글) → 결과 화면(어휘·문법·듣기 별점, 틀린 문제만 다시 풀기)까지 구현됨.
- **관리자 화면**: `/admin` Dashboard, `/admin/questions/new` 문제 등록 폼(저장 버튼은 아직 미동작). 나머지 nav 탭(수업/교재/단원 관리, 학습 통계)은 "준비중" 배지만 있음.
- **Supabase 연결 + Vercel 배포 완료**. 다만 화면 로직은 아직 `lib/mock-data.ts` 의 mock 데이터를 사용 중이며, DB 스키마 마이그레이션 및 실제 쿼리 연동은 진행 전.
- **문제 유형은 4지선다(객관식)로 통일**: 학생들이 비원어민이라 타이핑 부담을 줄이기 위한 결정.
- **문제은행 → 앱 데이터 자동 변환 파이프라인 구축 완료**: 아래 "문제은행(md) 추가하는 방법" 참고.
- **1과 1차시(54문제)·2차시(31문제) 문제은행 등록 및 홈 화면 버튼 활성화 완료**.

### 다음 단계

- 1과 1차시/2차시 전체 문제를 "오늘의 복습"용 적정 분량(예: 10문제)으로 나누는 로직/화면
- 3차시 이후 문제은행 추가 (아래 워크플로우 반복)
- Phase 2 마무리: Supabase 스키마 마이그레이션 → `lib/mock-data.ts`/`lib/quizzes/*.ts` 를 실제 쿼리로 교체
- 관리자 나머지 탭(수업/교재/단원 관리, 학습 통계) 라우트 구현

## 문제은행(md) 추가하는 방법

**`data/` 폴더에 문제은행 md 파일을 추가하는 것만으로는 앱에 자동으로 반영되지 않습니다.** md → TypeScript 변환은 파일 저장을 감지해 자동 실행되는 방식이 아니라, 아래 단계를 순서대로 직접(또는 Claude에게 요청해서) 실행해야 합니다.

### 1. 문제은행 md 작성

`data/<과>/<차시>_문제.md` 형식으로 작성합니다. 형식은 [`data/문제_생성_프롬프트.md`](./data/문제_생성_프롬프트.md)에 고정되어 있고, 이 문서를 그대로 복사해서 다른 에이전트에게 "이 PDF의 p.__~__ 를 이 형식으로 변환해줘"라고 맡기면 편합니다. 핵심 규칙:

- 문제 유형은 100% 4지선다(객관식). 원본이 빈칸/문장배열/O-X 등이어도 전부 4지선다로 변환.
- 빈칸은 항상 정확히 밑줄 6개 `______`.
- 문제마다 분류(어휘 | 문법 | 듣기)를 태깅.
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
