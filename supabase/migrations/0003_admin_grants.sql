-- 한국어 복습 교실 — 테이블 권한(GRANT) 보정 (Phase 2 2단계 후속)
--
-- 0001/0002 마이그레이션에서는 RLS 정책만 만들고, Postgres의 기본 오브젝트
-- 권한(GRANT)은 부여하지 않았다. RLS는 "행 단위" 필터링만 할 뿐이고, 그
-- 이전 단계로 "이 role이 이 테이블에 접근할 자격이 있는지" 자체는 GRANT가
-- 결정한다 — GRANT가 없으면 RLS 정책이 맞더라도
-- "permission denied for table ..." 에러가 난다.
--
-- 실제로 로그인한(= authenticated) 사용자가 관리자 화면에서 quizzes를
-- SELECT하려다가 이 에러를 만났다 (anon 쪽은 이미 어딘가에서 grant가
-- 되어 있었는지 학생 화면은 문제없이 동작해왔음).
--
-- 적용 방법: Supabase 대시보드 → SQL Editor → 이 파일 내용을 그대로 실행.
-- (0002_admin_write.sql을 아직 실행하지 않았다면 그것도 함께 실행해야
-- 문제 등록 저장까지 정상 동작한다 — RLS 정책 + GRANT 둘 다 필요.)

grant usage on schema public to anon, authenticated;

grant select on quizzes to anon, authenticated;
grant select on questions to anon, authenticated;
grant select on choices to anon, authenticated;

grant insert on questions to authenticated;
grant insert on choices to authenticated;
