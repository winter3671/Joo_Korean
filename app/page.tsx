import Link from "next/link";
import { LESSON_SESSIONS, TODAY_QUIZ } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-12 pt-8 sm:max-w-lg">
      <header className="mb-6 text-center">
        <p className="mb-1 text-xs font-semibold tracking-wide text-brand-500">
          PROTOTYPE DEMO
        </p>
        <h1 className="text-2xl font-black text-brand-700">
          한국어 복습 교실
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-stone-500">
          안녕하세요! 오늘 배운 내용을
          <br />
          복습해 볼까요?
        </p>
      </header>

      {/* 오늘의 복습 카드 */}
      <section className="mb-8 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-500 p-6 text-white shadow-lg shadow-brand-200">
        <p className="text-sm font-medium text-brand-50">
          {TODAY_QUIZ.className}
        </p>
        <p className="mt-1 text-xl font-bold">{TODAY_QUIZ.unitLabel} 오늘의 복습</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-brand-50">
          <span>📝 {TODAY_QUIZ.questionCount}문제</span>
          <span>⏱ 약 {TODAY_QUIZ.estimatedMinutes}분</span>
        </div>

        <Link
          href={`/quiz/${TODAY_QUIZ.quizId}`}
          className="mt-5 flex w-full items-center justify-center rounded-2xl bg-white py-3 text-base font-bold text-brand-600 shadow-sm transition active:scale-[0.98]"
        >
          퀴즈 시작하기
        </Link>
      </section>

      {/* 1과 복습하기 */}
      <section>
        <h2 className="mb-3 text-sm font-bold text-stone-600">
          1과 복습하기
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {LESSON_SESSIONS.map((session) => (
            <Link
              key={session.unitNumber}
              href={session.available ? `/quiz/${session.quizId}` : "#"}
              aria-disabled={!session.available}
              className={
                session.available
                  ? "flex flex-col items-center justify-center rounded-2xl border border-brand-200 bg-white py-4 text-sm font-semibold text-brand-700 shadow-sm transition hover:border-brand-400 hover:bg-brand-50 active:scale-[0.97]"
                  : "flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50 py-4 text-sm font-semibold text-stone-300"
              }
            >
              {session.unitLabel}
              {!session.available && (
                <span className="mt-1 text-[10px] font-normal text-stone-300">
                  준비 중
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-auto pt-10 text-center">
        <Link
          href="/admin"
          className="text-xs font-medium text-stone-400 underline decoration-stone-300 underline-offset-4 hover:text-brand-500"
        >
          선생님이신가요? 관리자 페이지로 이동
        </Link>
      </footer>
    </main>
  );
}
