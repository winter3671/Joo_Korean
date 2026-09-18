import { createClient } from "@supabase/supabase-js";

/**
 * Supabase 클라이언트 초기 세팅.
 *
 * 프로토타입 단계에서는 아직 실제 DB를 연결하지 않으므로
 * 화면(components, app/*)에서는 lib/mock-data.ts 의 mock 데이터를 사용한다.
 *
 * 2차 개발(README "9. 추천 개발 단계 - Phase 2 Database 연결")부터
 * 이 클라이언트를 사용해 teachers / classes / books / units / quizzes /
 * questions / choices / quiz_attempts / answers 테이블을 조회·수정한다.
 *
 * .env.local 에 아래 값을 채워 넣어야 한다. (.env.local.example 참고)
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
