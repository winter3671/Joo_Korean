"use client";

import Link from "next/link";
import type { Question, Quiz, SkillCategory } from "@/types/quiz";
import { QUESTION_TYPE_LABEL, getQuestionSkill } from "@/types/quiz";

export interface AttemptRecord {
  question: Question;
  answerValue: string;
  correct: boolean;
}

interface ResultViewProps {
  quiz: Quiz;
  records: AttemptRecord[];
  onRetryWrong: () => void;
}

const SKILL_LABEL: Record<SkillCategory, string> = {
  vocab: "어휘",
  grammar: "문법",
  listening: "듣기",
};

const SKILL_ORDER: SkillCategory[] = ["vocab", "grammar", "listening"];

export default function ResultView({ quiz, records, onRetryWrong }: ResultViewProps) {
  const total = records.length;
  const correctCount = records.filter((r) => r.correct).length;
  const wrongRecords = records.filter((r) => !r.correct);
  const scoreMessage =
    total === 0
      ? ""
      : correctCount / total >= 0.8
        ? "잘했어요!"
        : correctCount / total >= 0.5
          ? "조금만 더 연습해봐요!"
          : "다시 한 번 복습해볼까요?";

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-12 pt-8 sm:max-w-lg">
      <header className="mb-6 text-center">
        <p className="text-sm font-semibold text-stone-400">
          {quiz.className} · {quiz.unitLabel} · 오늘의 결과
        </p>
        <p className="mt-2 text-5xl font-black text-brand-600">
          {correctCount} / {total}
        </p>
        <p className="mt-2 text-base font-bold text-stone-600">{scoreMessage}</p>
      </header>

      <section className="mb-6 rounded-3xl border border-brand-100 bg-white p-5 shadow-sm">
        <div className="space-y-3">
          {SKILL_ORDER.map((skill) => {
            const skillRecords = records.filter(
              (r) => getQuestionSkill(r.question) === skill,
            );
            const hasData = skillRecords.length > 0;
            const ratio = hasData
              ? skillRecords.filter((r) => r.correct).length / skillRecords.length
              : 0;
            const filledStars = Math.round(ratio * 5);

            return (
              <div key={skill} className="flex items-center justify-between">
                <span className="text-sm font-bold text-stone-600">
                  {SKILL_LABEL[skill]}
                </span>
                {hasData ? (
                  <span className="text-lg tracking-wide text-brand-400">
                    {"★".repeat(filledStars)}
                    <span className="text-stone-200">
                      {"★".repeat(5 - filledStars)}
                    </span>
                  </span>
                ) : (
                  <span className="text-xs text-stone-300">해당 문제 없음</span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {wrongRecords.length > 0 && (
        <section className="mb-8 rounded-3xl border border-rose-100 bg-rose-50 p-5">
          <p className="mb-3 text-sm font-bold text-rose-500">
            틀린 문제 {wrongRecords.length}개
          </p>
          <ul className="space-y-2">
            {wrongRecords.map((r) => (
              <li
                key={r.question.id}
                className="rounded-xl bg-white px-3 py-2 text-xs text-stone-600"
              >
                <span className="mr-2 rounded-full bg-rose-100 px-2 py-0.5 font-bold text-rose-500">
                  {QUESTION_TYPE_LABEL[r.question.type]}
                </span>
                {r.question.questionText}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-auto flex flex-col gap-3">
        {wrongRecords.length > 0 && (
          <button
            type="button"
            onClick={onRetryWrong}
            className="w-full rounded-2xl bg-brand-500 py-3.5 text-base font-bold text-white transition active:scale-[0.98]"
          >
            틀린 문제 다시 풀기
          </button>
        )}
        <Link
          href="/"
          className="flex w-full items-center justify-center rounded-2xl border-2 border-brand-200 bg-white py-3.5 text-base font-bold text-brand-600 transition active:scale-[0.98]"
        >
          다른 단원 복습하기
        </Link>
      </div>
    </main>
  );
}
