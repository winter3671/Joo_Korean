"use client";

import { useState } from "react";
import Link from "next/link";
import type { Question, Quiz } from "@/types/quiz";
import { QUESTION_TYPE_LABEL } from "@/types/quiz";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultView, { type AttemptRecord } from "./ResultView";

type Phase = "answering" | "feedback" | "result";

function isAnswerCorrect(question: Question, value: string): boolean {
  if (question.type === "fill-blank") {
    return (
      value.trim().replace(/\s+/g, "") ===
      question.correctAnswer.trim().replace(/\s+/g, "")
    );
  }
  return value === question.correctAnswer;
}

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [pool, setPool] = useState<Question[]>(quiz.questions);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("answering");
  const [currentAnswer, setCurrentAnswer] = useState<{
    value: string;
    ready: boolean;
  }>({ value: "", ready: false });
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [records, setRecords] = useState<AttemptRecord[]>([]);
  const [translationLang, setTranslationLang] = useState<"none" | "vi" | "en">("none");

  const question = pool[index];
  const lastRecord = records[records.length - 1];

  function handleSubmit() {
    if (!currentAnswer.ready) return;
    const correct = isAnswerCorrect(question, currentAnswer.value);
    setSubmitted(currentAnswer.value);
    setRecords((prev) => [
      ...prev,
      { question, answerValue: currentAnswer.value, correct },
    ]);
    setPhase("feedback");
  }

  function goToNextQuestion() {
    setCurrentAnswer({ value: "", ready: false });
    setSubmitted(null);
    setTranslationLang("none");
    setPhase("answering");
  }

  function handleNext() {
    if (index + 1 < pool.length) {
      setIndex((i) => i + 1);
      goToNextQuestion();
    } else {
      setPhase("result");
    }
  }

  function handleRetryWrong() {
    const wrongQuestions = records.filter((r) => !r.correct).map((r) => r.question);
    if (wrongQuestions.length === 0) return;
    setPool(wrongQuestions);
    setIndex(0);
    setRecords([]);
    goToNextQuestion();
  }

  if (phase === "result") {
    return <ResultView quiz={quiz} records={records} onRetryWrong={handleRetryWrong} />;
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 pb-10 pt-6 sm:max-w-lg">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-stone-400 hover:text-stone-600">
          ← 나가기
        </Link>
        <span className="text-xs font-bold text-brand-500">
          {quiz.className} · {quiz.unitLabel} 복습
        </span>
      </div>

      <div className="mb-6">
        <ProgressBar current={index + 1} total={pool.length} label={question.unitLabel} />
      </div>

      <div className="flex-1 rounded-3xl border border-brand-100 bg-white p-5 shadow-sm">
        <div className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold text-brand-600">
          {QUESTION_TYPE_LABEL[question.type]}
        </div>

        <QuestionCard
          key={question.id}
          question={question}
          showResult={phase === "feedback"}
          submittedAnswer={submitted}
          onAnswerChange={(value, ready) => setCurrentAnswer({ value, ready })}
        />

        {phase === "feedback" && lastRecord && (
          <div
            className={`mt-5 rounded-2xl p-4 ${
              lastRecord.correct ? "bg-emerald-50" : "bg-rose-50"
            }`}
          >
            <p
              className={`mb-2 text-sm font-black ${
                lastRecord.correct ? "text-emerald-600" : "text-rose-500"
              }`}
            >
              {lastRecord.correct ? "✅ 맞았어요!" : "❌ 아쉬워요!"}
            </p>
            <p className="mb-1 text-xs font-bold text-stone-400">💡 왜 그럴까요?</p>
            <p className="whitespace-pre-line text-sm leading-relaxed text-stone-700">
              {question.explanationKo}
            </p>
            {(question.explanationVi || question.explanationEn) && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-3">
                  {question.explanationVi && (
                    <button
                      type="button"
                      onClick={() =>
                        setTranslationLang((l) => (l === "vi" ? "none" : "vi"))
                      }
                      className={`text-xs font-bold underline underline-offset-4 ${
                        translationLang === "vi" ? "text-brand-700" : "text-brand-500"
                      }`}
                    >
                      {translationLang === "vi"
                        ? "베트남어 설명 닫기"
                        : "🇻🇳 베트남어로 보기"}
                    </button>
                  )}
                  {question.explanationEn && (
                    <button
                      type="button"
                      onClick={() =>
                        setTranslationLang((l) => (l === "en" ? "none" : "en"))
                      }
                      className={`text-xs font-bold underline underline-offset-4 ${
                        translationLang === "en" ? "text-brand-700" : "text-brand-500"
                      }`}
                    >
                      {translationLang === "en"
                        ? "영어 설명 닫기"
                        : "🇺🇸 영어로 보기"}
                    </button>
                  )}
                </div>
                {translationLang !== "none" && (
                  <p className="mt-2 whitespace-pre-line rounded-xl bg-white p-3 text-sm text-stone-600">
                    {translationLang === "vi"
                      ? question.explanationVi
                      : question.explanationEn}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        disabled={phase === "answering" && !currentAnswer.ready}
        onClick={phase === "answering" ? handleSubmit : handleNext}
        className="mt-5 w-full rounded-2xl bg-brand-500 py-3.5 text-base font-bold text-white transition active:scale-[0.98] disabled:bg-stone-200 disabled:text-stone-400"
      >
        {phase === "answering"
          ? "정답 확인"
          : index + 1 < pool.length
            ? "다음 문제"
            : "결과 보기"}
      </button>
    </main>
  );
}
