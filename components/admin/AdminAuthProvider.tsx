"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

/**
 * 관리자 화면 전체를 감싸는 인증 컨텍스트.
 *
 * Supabase Auth(이메일/비밀번호)로 로그인한 세션을 기억하고,
 * AdminGate(로그인 여부에 따라 화면 분기)와 AdminHeaderAuth(로그아웃 버튼)가
 * 같은 세션 상태를 공유하도록 한다.
 *
 * 교사 계정은 회원가입 화면 없이 Supabase 대시보드(Authentication → Users)에서
 * 관리자가 직접 만든다 — README "교사 계정 만들기" 참고.
 */

interface AdminAuthValue {
  loading: boolean;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function signIn(email: string, password: string): Promise<string | null> {
    if (!supabase) return "Supabase가 설정되지 않았습니다.";
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  return (
    <AdminAuthContext.Provider value={{ loading, session, signIn, signOut }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth는 AdminAuthProvider 안에서만 사용할 수 있습니다.");
  }
  return ctx;
}
