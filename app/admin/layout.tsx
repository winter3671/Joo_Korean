import Link from "next/link";
import type { ReactNode } from "react";

const NAV_ITEMS: { label: string; href?: string }[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "수업 관리" },
  { label: "교재 관리" },
  { label: "단원 관리" },
  { label: "문제 관리", href: "/admin/questions/new" },
  { label: "학습 통계" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-brand-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="text-lg font-black text-brand-700">
            한국어 복습 교실 <span className="text-sm font-semibold text-brand-400">관리자</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-stone-400 hover:text-brand-500"
          >
            학생 화면 보기 →
          </Link>
        </div>
        <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 pb-2">
          {NAV_ITEMS.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-stone-500 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-stone-300"
                title="프로토타입 데모에서는 준비 중입니다"
              >
                {item.label}
                <span className="ml-1 rounded-full bg-stone-100 px-1.5 py-0.5 text-[9px] font-bold text-stone-400">
                  준비중
                </span>
              </span>
            ),
          )}
        </nav>
      </header>
      <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">{children}</div>
    </div>
  );
}
