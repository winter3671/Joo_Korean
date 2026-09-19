"use client";

import { useAdminAuth } from "./AdminAuthProvider";

/** 헤더에 표시되는 로그인 이메일 + 로그아웃 버튼. 로그인 상태가 아니면 아무것도 렌더링하지 않는다. */
export function AdminHeaderAuth() {
  const { loading, session, signOut } = useAdminAuth();

  if (loading || !session) return null;

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-stone-400">{session.user.email}</span>
      <button
        type="button"
        onClick={() => {
          void signOut();
        }}
        className="rounded-full border border-stone-200 px-3 py-1 font-semibold text-stone-500 transition hover:bg-stone-50"
      >
        로그아웃
      </button>
    </div>
  );
}
