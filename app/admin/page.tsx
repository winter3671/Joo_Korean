import Link from "next/link";
import { CLASSES, HARD_QUESTIONS, TEACHER_NAME, TODAY_STATS } from "@/lib/admin-mock-data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-brand-500">PROTOTYPE DEMO</p>
        <h1 className="mt-1 text-2xl font-black text-stone-800">
          안녕하세요, {TEACHER_NAME} 선생님.
        </h1>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-br from-brand-400 to-brand-500 p-6 text-white shadow-lg shadow-brand-200">
          <p className="text-sm font-medium text-brand-50">오늘 · 퀴즈 참여</p>
          <p className="mt-2 text-4xl font-black">{TODAY_STATS.participants}명</p>
        </div>
        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-stone-400">오늘 · 평균 점수</p>
          <p className="mt-2 text-4xl font-black text-brand-600">
            {TODAY_STATS.averageScore}점
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-stone-700">
            학생들이 어려워한 문제
          </h2>
          <span className="text-xs font-semibold text-stone-300">문제별 정답률 순</span>
        </div>
        <ul className="space-y-2">
          {HARD_QUESTIONS.map((q) => (
            <li
              key={q.rank}
              className="flex items-center gap-4 rounded-2xl bg-brand-50/60 px-4 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-400 text-sm font-black text-white">
                {q.rank}
              </span>
              <span className="flex-1 text-sm font-bold text-stone-700">
                {q.grammarPoint}
              </span>
              <span className="text-sm font-black text-rose-500">
                정답률 {q.correctRate}%
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold text-stone-700">내 수업</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CLASSES.map((c) => (
            <li
              key={c.id}
              className="rounded-2xl border border-brand-100 px-4 py-3 text-sm"
            >
              <p className="font-bold text-stone-700">{c.name}</p>
              <p className="mt-1 text-xs text-stone-400">
                {c.bookTitle} · 학생 {c.studentCount}명
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex justify-end">
        <Link
          href="/admin/questions/new"
          className="rounded-2xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-600 active:scale-[0.98]"
        >
          + 새 문제 만들기
        </Link>
      </div>
    </div>
  );
}
