-- 한국어 복습 교실 — 관리자 쓰기 권한 (Phase 2 2단계: 교사 인증 + 문제 등록)
--
-- 로그인한 교사(Supabase Auth로 인증된 사용자)만 questions/choices를 새로 등록할 수
-- 있도록 RLS INSERT 정책을 추가한다. 수정(UPDATE)/삭제(DELETE) 정책은 다음 단계
-- (문제 목록/수정/삭제 화면)에서 별도 마이그레이션으로 추가한다.
--
-- 적용 방법: Supabase 대시보드 → SQL Editor → 이 파일 내용을 그대로 붙여넣고 실행.
--
-- 교사 계정 만들기: Supabase 대시보드 → Authentication → Users → Add user 에서
-- 이메일/비밀번호를 직접 입력해 만든다 (회원가입 화면은 따로 만들지 않음 —
-- 관리자만 교사 계정을 발급하는 구조). "Auto Confirm User"를 체크해야
-- 이메일 인증 없이 바로 로그인할 수 있다.

drop policy if exists "authenticated insert questions" on questions;
create policy "authenticated insert questions"
  on questions for insert
  to authenticated
  with check (true);

drop policy if exists "authenticated insert choices" on choices;
create policy "authenticated insert choices"
  on choices for insert
  to authenticated
  with check (true);
