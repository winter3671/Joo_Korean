-- 한국어 복습 교실 — 콘텐츠 스키마 (Phase 2 1단계: 콘텐츠만 이관)
--
-- 이 마이그레이션은 quizzes / questions / choices 3개 테이블만 만든다.
-- 교사 인증, 문제 CRUD, 학습 기록(quiz_attempts/answers) 등은 다음 단계에서
-- 별도 마이그레이션으로 추가한다 (docs/설계서.md 18~27번 항목 참고).
--
-- 적용 방법: Supabase 대시보드 → SQL Editor → 이 파일 내용을 그대로 붙여넣고 실행.

create table if not exists quizzes (
  id text primary key,
  class_name text not null,
  book_title text not null,
  unit_label text not null,
  title text not null,
  estimated_minutes integer not null,
  -- 홈 화면 "N과 M차시" 목록 구성에 쓰는 메타데이터
  unit_number integer,
  session_number integer,
  created_at timestamptz not null default now()
);

create table if not exists questions (
  -- id 는 퀴즈 안에서만 고유하면 된다 (예: "q1"). 전역 고유 식별은 (quiz_id, id) 조합.
  id text not null,
  quiz_id text not null references quizzes (id) on delete cascade,
  -- 문제 순서 (배열 순서를 DB에서 그대로 유지하기 위함)
  order_number integer not null,
  type text not null,
  skill text,
  unit_label text not null,
  -- 일정표/표/지문처럼 여러 문항이 공유하는 참고 자료 (questionText와 별도 렌더링)
  context text,
  question_text text not null,
  correct_answer text not null,
  -- 문장 배열 문제용 어절 목록 (지금은 사용 안 하지만 향후 대비해 컬럼만 마련)
  sentence_parts jsonb,
  explanation_ko text not null,
  explanation_vi text,
  explanation_en text,
  image_emoji text,
  primary key (quiz_id, id)
);

create table if not exists choices (
  id text not null,
  quiz_id text not null,
  question_id text not null,
  order_number integer not null,
  text text not null,
  emoji text,
  primary key (quiz_id, question_id, id),
  foreign key (quiz_id, question_id) references questions (quiz_id, id) on delete cascade
);

create index if not exists questions_quiz_id_order_idx on questions (quiz_id, order_number);
create index if not exists choices_quiz_question_order_idx on choices (quiz_id, question_id, order_number);
create index if not exists quizzes_unit_session_idx on quizzes (unit_number, session_number);

-- RLS: 학생 화면은 로그인 없이 누구나 콘텐츠를 "읽기"만 할 수 있어야 한다.
-- 쓰기(등록/수정/삭제)는 아직 관리자 인증이 없으므로 이번 단계에서는 열지 않는다
-- (콘텐츠는 SQL Editor에서 직접 넣는다 — supabase/seed_content.sql 참고).
alter table quizzes enable row level security;
alter table questions enable row level security;
alter table choices enable row level security;

drop policy if exists "public read quizzes" on quizzes;
create policy "public read quizzes" on quizzes for select using (true);

drop policy if exists "public read questions" on questions;
create policy "public read questions" on questions for select using (true);

drop policy if exists "public read choices" on choices;
create policy "public read choices" on choices for select using (true);
