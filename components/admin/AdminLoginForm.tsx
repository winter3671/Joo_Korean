"use client";

import { useState, type FormEvent } from "react";
import { isSupabaseConfigured } from "@/lib/supabase";
import { useAdminAuth } from "./AdminAuthProvider";

export function AdminLoginForm() {
  const { signIn } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!isSupabaseConfigured) {
    return (
      <div className="mx-auto max-w-sm rounded-3xl border border-brand-100 bg-white p-6 text-sm text-stone-500">
        Supabase 설정이 없어서 로그인할 수 없습니다. .env.local을 확인해주세요.
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const message = await signIn(email, password);
    setSubmitting(false);
    if (message) setError(message);
  }

  return (
    <div className="mx-auto max-w-sm space-y-6 py-12">
      <header className="text-center">
        <p className="text-sm font-semibold text-brand-500">관리자 로그인</p>
        <h1 className="mt-1 text-2xl font-black text-stone-800">한국어 복습 교실</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm"
      >
        {error && (
          <p className="rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-500">
            {error}
          </p>
        )}

        <div>
          <label className="mb-1 block text-sm font-bold text-stone-600">이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-bold text-stone-600">비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-2xl bg-brand-500 py-3 text-sm font-bold text-white transition active:scale-[0.98] disabled:opacity-60"
        >
          {submitting ? "로그인 중..." : "로그인"}
        </button>
      </form>

      <p className="text-center text-xs text-stone-400">
        계정이 없으신가요? Supabase 대시보드에서 교사 계정을 만들어주세요.
      </p>
    </div>
  );
}
