"use client";

import { useEffect, useState } from "react";
import type { Question } from "@/types/quiz";

interface QuestionCardProps {
  question: Question;
  showResult: boolean;
  submittedAnswer: string | null;
  onAnswerChange: (value: string, ready: boolean) => void;
}

export default function QuestionCard({
  question,
  showResult,
  submittedAnswer,
  onAnswerChange,
}: QuestionCardProps) {
  const [listeningReady, setListeningReady] = useState(false);

  return (
    <div>
      <p className="mb-5 whitespace-pre-line text-lg font-bold leading-relaxed text-stone-800">
        {question.questionText}
      </p>

      {question.type === "image" && question.imageEmoji && (
        <div className="mb-5 flex h-32 items-center justify-center rounded-2xl bg-brand-50 text-6xl">
          <span aria-hidden>{question.imageEmoji}</span>
        </div>
      )}

      {question.type === "listening" && (
        <ListeningGate onReady={() => setListeningReady(true)} />
      )}

      {question.type === "ox" && question.choices && (
        <OxChoices
          choices={question.choices}
          showResult={showResult}
          submittedAnswer={submittedAnswer}
          correctAnswer={question.correctAnswer}
          onAnswerChange={onAnswerChange}
        />
      )}

      {(question.type === "multiple-choice" ||
        question.type === "image" ||
        question.type === "listening") &&
        question.choices && (
          <ChoiceList
            choices={question.choices}
            showResult={showResult}
            submittedAnswer={submittedAnswer}
            correctAnswer={question.correctAnswer}
            onAnswerChange={onAnswerChange}
            disabled={question.type === "listening" && !listeningReady && !showResult}
          />
        )}

      {question.type === "fill-blank" && (
        <FillBlankInput
          showResult={showResult}
          submittedAnswer={submittedAnswer}
          correctAnswer={question.correctAnswer}
          onAnswerChange={onAnswerChange}
        />
      )}

      {question.type === "sentence-order" && question.sentenceParts && (
        <SentenceOrder
          parts={question.sentenceParts}
          showResult={showResult}
          submittedAnswer={submittedAnswer}
          correctAnswer={question.correctAnswer}
          onAnswerChange={onAnswerChange}
        />
      )}
    </div>
  );
}

/* ---------------- 듣기: 재생 게이트 ---------------- */

function ListeningGate({ onReady }: { onReady: () => void }) {
  const [status, setStatus] = useState<"idle" | "playing" | "played">("idle");

  useEffect(() => {
    if (status !== "playing") return;
    const t = setTimeout(() => {
      setStatus("played");
      onReady();
    }, 1200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="mb-5">
      <button
        type="button"
        onClick={() => status === "idle" && setStatus("playing")}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-brand-300 bg-white py-3 text-sm font-bold text-brand-600 transition active:scale-[0.98]"
      >
        {status === "playing" ? (
          <>🔊 재생 중...</>
        ) : status === "played" ? (
          <>✅ 다시 듣기</>
        ) : (
          <>🔊 듣기 버튼을 눌러주세요</>
        )}
      </button>
      {status !== "played" && (
        <p className="mt-2 text-center text-[11px] text-stone-400">
          (프로토타입 화면입니다 · 실제 서비스에서는 음원이 재생됩니다)
        </p>
      )}
    </div>
  );
}

/* ---------------- 공용: 객관식류 선택지 ---------------- */

function ChoiceList({
  choices,
  showResult,
  submittedAnswer,
  correctAnswer,
  onAnswerChange,
  disabled,
}: {
  choices: Question["choices"];
  showResult: boolean;
  submittedAnswer: string | null;
  correctAnswer: string;
  onAnswerChange: (value: string, ready: boolean) => void;
  disabled?: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  if (!choices) return null;

  return (
    <div className="grid gap-2.5">
      {choices.map((choice, i) => {
        const isSelected = (showResult ? submittedAnswer : selected) === choice.id;
        const isCorrectChoice = choice.id === correctAnswer;

        let stateClasses =
          "border-brand-200 bg-white hover:border-brand-400 hover:bg-brand-50";
        if (showResult) {
          if (isCorrectChoice) {
            stateClasses = "border-emerald-400 bg-emerald-50 text-emerald-700";
          } else if (isSelected) {
            stateClasses = "border-rose-300 bg-rose-50 text-rose-600";
          } else {
            stateClasses = "border-stone-200 bg-stone-50 text-stone-400";
          }
        } else if (isSelected) {
          stateClasses = "border-brand-500 bg-brand-100 text-brand-700";
        } else if (disabled) {
          stateClasses = "border-stone-100 bg-stone-50 text-stone-300";
        }

        return (
          <button
            key={choice.id}
            type="button"
            disabled={showResult || disabled}
            onClick={() => {
              setSelected(choice.id);
              onAnswerChange(choice.id, true);
            }}
            className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-sm font-semibold transition active:scale-[0.99] disabled:active:scale-100 ${stateClasses}`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs">
              {i + 1}
            </span>
            {choice.emoji && <span className="text-xl">{choice.emoji}</span>}
            <span>{choice.text}</span>
            {showResult && isCorrectChoice && <span className="ml-auto">✅</span>}
            {showResult && isSelected && !isCorrectChoice && (
              <span className="ml-auto">❌</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- O / X ---------------- */

function OxChoices({
  choices,
  showResult,
  submittedAnswer,
  correctAnswer,
  onAnswerChange,
}: {
  choices: Question["choices"];
  showResult: boolean;
  submittedAnswer: string | null;
  correctAnswer: string;
  onAnswerChange: (value: string, ready: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  if (!choices) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {choices.map((choice) => {
        const isSelected = (showResult ? submittedAnswer : selected) === choice.id;
        const isCorrectChoice = choice.id === correctAnswer;

        let stateClasses = "border-brand-200 bg-white text-brand-500";
        if (showResult) {
          if (isCorrectChoice) {
            stateClasses = "border-emerald-400 bg-emerald-50 text-emerald-600";
          } else if (isSelected) {
            stateClasses = "border-rose-300 bg-rose-50 text-rose-500";
          } else {
            stateClasses = "border-stone-200 bg-stone-50 text-stone-300";
          }
        } else if (isSelected) {
          stateClasses = "border-brand-500 bg-brand-100 text-brand-700";
        }

        return (
          <button
            key={choice.id}
            type="button"
            disabled={showResult}
            onClick={() => {
              setSelected(choice.id);
              onAnswerChange(choice.id, true);
            }}
            className={`flex h-24 items-center justify-center rounded-3xl border-2 text-4xl font-black transition active:scale-[0.97] ${stateClasses}`}
          >
            {choice.text}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- 빈칸 채우기 ---------------- */

function FillBlankInput({
  showResult,
  submittedAnswer,
  correctAnswer,
  onAnswerChange,
}: {
  showResult: boolean;
  submittedAnswer: string | null;
  correctAnswer: string;
  onAnswerChange: (value: string, ready: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const displayValue = showResult ? submittedAnswer ?? "" : value;
  const isCorrect =
    showResult &&
    displayValue.trim().replace(/\s+/g, "") ===
      correctAnswer.trim().replace(/\s+/g, "");

  return (
    <div>
      <input
        type="text"
        inputMode="text"
        disabled={showResult}
        value={displayValue}
        onChange={(e) => {
          setValue(e.target.value);
          onAnswerChange(e.target.value, e.target.value.trim().length > 0);
        }}
        placeholder="정답을 입력하세요"
        className={`w-full rounded-2xl border-2 px-4 py-3 text-base font-semibold outline-none transition ${
          showResult
            ? isCorrect
              ? "border-emerald-400 bg-emerald-50 text-emerald-700"
              : "border-rose-300 bg-rose-50 text-rose-600"
            : "border-brand-200 bg-white text-stone-800 focus:border-brand-400"
        }`}
      />
      {showResult && !isCorrect && (
        <p className="mt-2 text-sm text-stone-500">
          정답: <span className="font-bold text-emerald-600">{correctAnswer}</span>
        </p>
      )}
    </div>
  );
}

/* ---------------- 문장 배열 ---------------- */

function SentenceOrder({
  parts,
  showResult,
  submittedAnswer,
  correctAnswer,
  onAnswerChange,
}: {
  parts: string[];
  showResult: boolean;
  submittedAnswer: string | null;
  correctAnswer: string;
  onAnswerChange: (value: string, ready: boolean) => void;
}) {
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);

  const assembled = showResult
    ? (submittedAnswer ?? "").split(" ").filter(Boolean)
    : usedIndexes.map((i) => parts[i]);

  const isCorrect = showResult && assembled.join(" ") === correctAnswer;

  function tapPart(index: number) {
    if (showResult || usedIndexes.includes(index)) return;
    const next = [...usedIndexes, index];
    setUsedIndexes(next);
    const value = next.map((i) => parts[i]).join(" ");
    onAnswerChange(value, next.length === parts.length);
  }

  function reset() {
    setUsedIndexes([]);
    onAnswerChange("", false);
  }

  return (
    <div>
      <div
        className={`mb-3 flex min-h-14 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed px-3 py-3 ${
          showResult
            ? isCorrect
              ? "border-emerald-300 bg-emerald-50"
              : "border-rose-300 bg-rose-50"
            : "border-brand-300 bg-brand-50"
        }`}
      >
        {assembled.length === 0 && (
          <span className="text-sm text-stone-400">
            아래 어절을 순서대로 눌러주세요
          </span>
        )}
        {assembled.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="rounded-xl bg-white px-3 py-1.5 text-sm font-bold text-stone-700 shadow-sm"
          >
            {word}
          </span>
        ))}
      </div>

      {!showResult && (
        <div className="flex flex-wrap gap-2">
          {parts.map((part, i) => {
            const used = usedIndexes.includes(i);
            return (
              <button
                key={`${part}-${i}`}
                type="button"
                disabled={used}
                onClick={() => tapPart(i)}
                className={`rounded-xl border-2 px-3 py-1.5 text-sm font-semibold transition active:scale-95 ${
                  used
                    ? "border-stone-100 bg-stone-50 text-stone-300"
                    : "border-brand-200 bg-white text-brand-600 hover:border-brand-400"
                }`}
              >
                {part}
              </button>
            );
          })}
          {usedIndexes.length > 0 && (
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border-2 border-stone-200 bg-white px-3 py-1.5 text-sm font-semibold text-stone-400 hover:border-stone-300"
            >
              ↺ 초기화
            </button>
          )}
        </div>
      )}

      {showResult && !isCorrect && (
        <p className="mt-2 text-sm text-stone-500">
          정답: <span className="font-bold text-emerald-600">{correctAnswer}</span>
        </p>
      )}
    </div>
  );
}
