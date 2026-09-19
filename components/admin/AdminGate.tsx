"use client";

import type { ReactNode } from "react";
import { useAdminAuth } from "./AdminAuthProvider";
import { AdminLoginForm } from "./AdminLoginForm";

/** 로그인 여부에 따라 관리자 화면 본문 또는 로그인 폼을 보여준다. */
export function AdminGate({ children }: { children: ReactNode }) {
  const { loading, session } = useAdminAuth();

  if (loading) {
    return <p className="py-12 text-center text-sm text-stone-400">확인 중...</p>;
  }
  if (!session) {
    return <AdminLoginForm />;
  }
  return <>{children}</>;
}
