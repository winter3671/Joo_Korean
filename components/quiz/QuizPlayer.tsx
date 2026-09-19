"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Question, QuestionType, Quiz } from "@/types/quiz";
import { QUESTION_TYPE_LABEL } from "@/types/quiz";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultView, { type AttemptRecord } from "./ResultView";

type Phase = "answering" | "feedback" | "result";

/**
 * 오답이어도 바로 정답을 보여주지 않고 한 번 더 기회를 주는 선택형 문제 유형.
 * 문제당 최대 2번까지만 시도할 수 있다 — 첫 시도에서 틀리면 오답 메시지와 함께
 * 한 번 더 기회를 주고, 두 번째도 틀리면 그대로 해설을 보여주고 다음 문제로 넘어간다.
 */
const RETRYABLE_TYPES: QuestionType[] = [
  "multiple-choice",
  "ox",
  "image",
  "listening",
];

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

  // 재시도 가능한 선택형 문제에서 오답을 고른 뒤, 정답을 맞힐 때까지의 상태
  const [hasFailedOnce, setHasFailedOnce] = useState(false);
  const [wrongChoiceId, setWrongChoiceId] = useState<string | null>(null);
  const [wrongToastVisible, setWrongToastVisible] = useState(false);
  const [attemptNonce, setAttemptNonce] = useState(0);
  const wrongTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const question = pool[index];
  const lastRecord = records[records.length - 1];
  // 방금 제출한 답이 실제로 맞았는지 (재시도형 문제는 채점용 lastRecord.correct와 다를 수 있음:
  // 재시도 끝에 맞혔다면 방금은 정답이지만, 처음에 틀렸으므로 채점상으로는 오답으로 기록됨)
  const lastAttemptCorrect =
    submitted !== null ? isAnswerCorrect(question, submitted) : false;

  function clearWrongTimers() {
    wrongTimers.current.forEach(clearTimeout);
    wrongTimers.current = [];
  }

  function handleSubmit() {
    if (!currentAnswer.ready) return;
    const correct = isAnswerCorrect(question, currentAnswer.value);

    // 재시도 가능한 유형에서 "첫 번째" 오답인 경우에만 한 번 더 기회를 준다.
    // hasFailedOnce가 이미 true라는 건 이번이 두 번째 시도라는 뜻이므로,
    // 정답이든 오답이든 더 이상 재시도를 주지 않고 아래 채점 로직으로 넘어간다.
    if (!correct && RETRYABLE_TYPES.includes(question.type) && !hasFailedOnce) {
      // 첫 번째 오답: 정답을 바로 보여주지 않고, 살짝 표시만 한 뒤 다시 고르게 한다
      clearWrongTimers();
      setHasFailedOnce(true);
      setWrongChoiceId(currentAnswer.value);
      setWrongToastVisible(true);
      setCurrentAnswer({ value: "", ready: false });

      wrongTimers.current = [
        setTimeout(() => setWrongToastVisible(false), 900),
        setTimeout(() => {
          setWrongChoiceId(null);
          setAttemptNonce((n) => n + 1);
        }, 1250),
      ];
      return;
    }

    setSubmitted(currentAnswer.value);
    setRecords((prev) => [
      ...prev,
      { question, answerValue: currentAnswer.value, correct: correct && !hasFailedOnce },
    ]);
    setPhase("feedback");
  }

  function goToNextQuestion() {
    clearWrongTimers();
    setCurrentAnswer({ value: "", ready: false });
    setSubmitted(null);
    setTranslationLang("none");
    setHasFailedOnce(false);
    setWrongChoiceId(null);
    setWrongToastVisible(false);
    setAttemptNonce(0);
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
          key={`${question.id}-${attemptNonce}`}
          question={question}
          showResult={phase === "feedback"}
          submittedAnswer={submitted}
          flashWrongId={wrongChoiceId}
          onAnswerChange={(value, ready) => setCurrentAnswer({ value, ready })}
        />

        {phase === "answering" && wrongChoiceId && (
          <div
            className={`mt-4 flex justify-center transition-opacity duration-300 ${
              wrongToastVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="rounded-full bg-rose-100 px-4 py-1.5 text-xs font-bold text-rose-500">
              ❌ 오답이에요, 다시 시도해보세요
            </span>
          </div>
        )}

        {phase === "feedback" && lastRecord && (
          <div
            className={`mt-5 rounded-2xl p-4 ${
              lastAttemptCorrect ? "bg-emerald-50" : "bg-rose-50"
            }`}
          >
            <p
              className={`mb-2 text-sm font-black ${
                lastAttemptCorrect ? "text-emerald-600" : "text-rose-500"
              }`}
            >
              {lastAttemptCorrect
                ? lastRecord.correct
                  ? "✅ 맞았어요!"
                  : "✅ 이제 맞았어요!"
                : "❌ 아쉬워요!"}
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
