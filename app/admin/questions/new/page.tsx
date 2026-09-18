"use client";

import { useState } from "react";
import type { QuestionType } from "@/types/quiz";
import { QUESTION_TYPE_LABEL } from "@/types/quiz";

const TYPE_OPTIONS: QuestionType[] = [
  "multiple-choice",
  "fill-blank",
  "sentence-order",
  "ox",
  "image",
  "listening",
];

const NEEDS_CHOICES: QuestionType[] = ["multiple-choice", "image", "listening"];

const EMPTY_CHOICES = ["", "", "", ""];

export default function NewQuestionPage() {
  const [type, setType] = useState<QuestionType>("multiple-choice");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState<string[]>(EMPTY_CHOICES);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [correctText, setCorrectText] = useState("");
  const [explanationKo, setExplanationKo] = useState("");
  const [explanationVi, setExplanationVi] = useState("");
  const [explanationEn, setExplanationEn] = useState("");
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const usesChoices = NEEDS_CHOICES.includes(type);
  const usesOx = type === "ox";
  const usesTextAnswer = type === "fill-blank" || type === "sentence-order";

  function resetForm() {
    setQuestionText("");
    setChoices(EMPTY_CHOICES);
    setCorrectIndex(0);
    setCorrectText("");
    setExplanationKo("");
    setExplanationVi("");
    setExplanationEn("");
  }

  function handleSave(andNext: boolean) {
    setSavedMessage(
      andNext
        ? "프로토타입 화면입니다 — 실제 저장은 Supabase 연동 후 동작합니다. 다음 문제 입력으로 이동합니다."
        : "프로토타입 화면입니다 — 실제 저장은 Supabase 연동 후 동작합니다.",
    );
    if (andNext) resetForm();
    window.setTimeout(() => setSavedMessage(null), 4000);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-sm font-semibold text-brand-500">PROTOTYPE DEMO</p>
        <h1 className="mt-1 text-2xl font-black text-stone-800">문제 만들기</h1>
      </header>

      {savedMessage && (
        <div className="rounded-2xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
          {savedMessage}
        </div>
      )}

      <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <label className="mb-2 block text-sm font-bold text-stone-600">
          문제 유형
        </label>
        <div className="flex flex-wrap gap-2">
          {TYPE_OPTIONS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition ${
                type === t
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-brand-200 bg-white text-brand-600 hover:bg-brand-50"
              }`}
            >
              {QUESTION_TYPE_LABEL[t]}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-2 block text-sm font-bold text-stone-600">
            문제
          </label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            rows={3}
            placeholder="예) 친구를 ______ 영화를 봤어요."
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
          />
        </div>

        {usesChoices && (
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">
              선택지 (정답에 표시)
            </label>
            <div className="space-y-2">
              {choices.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="correctChoice"
                    checked={correctIndex === i}
                    onChange={() => setCorrectIndex(i)}
                    className="h-4 w-4 accent-brand-500"
                    aria-label={`${i + 1}번 선택지를 정답으로 지정`}
                  />
                  <input
                    type="text"
                    value={c}
                    onChange={(e) =>
                      setChoices((prev) =>
                        prev.map((v, idx) => (idx === i ? e.target.value : v)),
                      )
                    }
                    placeholder={`선택지 ${i + 1}`}
                    className="flex-1 rounded-xl border-2 border-brand-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {usesOx && (
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">정답</label>
            <div className="flex gap-3">
              {["O", "X"].map((v, i) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setCorrectIndex(i)}
                  className={`h-14 w-14 rounded-2xl border-2 text-xl font-black transition ${
                    correctIndex === i
                      ? "border-brand-500 bg-brand-100 text-brand-700"
                      : "border-brand-200 bg-white text-brand-400"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        {usesTextAnswer && (
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">
              정답 {type === "sentence-order" && "(띄어쓰기로 어절 구분)"}
            </label>
            <input
              type="text"
              value={correctText}
              onChange={(e) => setCorrectText(e.target.value)}
              placeholder={
                type === "sentence-order"
                  ? "예) 어제 친구하고 시장에 갔어요"
                  : "예) 만나서"
              }
              className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-bold text-stone-600">
            한국어 해설
          </label>
          <textarea
            value={explanationKo}
            onChange={(e) => setExplanationKo(e.target.value)}
            rows={3}
            placeholder="학생이 틀린 이유를 이해할 수 있도록 쉬운 한국어로 설명해주세요."
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">
              베트남어 도움말 <span className="font-normal text-stone-300">(선택)</span>
            </label>
            <textarea
              value={explanationVi}
              onChange={(e) => setExplanationVi(e.target.value)}
              rows={2}
              className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">
              영어 도움말 <span className="font-normal text-stone-300">(선택)</span>
            </label>
            <textarea
              value={explanationEn}
              onChange={(e) => setExplanationEn(e.target.value)}
              rows={2}
              className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">
              이미지 업로드 <span className="font-normal text-stone-300">(선택)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              disabled
              className="w-full rounded-2xl border-2 border-dashed border-brand-200 px-4 py-3 text-xs text-stone-400"
            />
            <p className="mt-1 text-[11px] text-stone-300">
              프로토타입에서는 업로드가 동작하지 않습니다.
            </p>
          </div>
          {type === "listening" && (
            <div>
              <label className="mb-2 block text-sm font-bold text-stone-600">
                음원 업로드
              </label>
              <input
                type="file"
                accept="audio/*"
                disabled
                className="w-full rounded-2xl border-2 border-dashed border-brand-200 px-4 py-3 text-xs text-stone-400"
              />
              <p className="mt-1 text-[11px] text-stone-300">
                프로토타입에서는 업로드가 동작하지 않습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => handleSave(false)}
          className="flex-1 rounded-2xl border-2 border-brand-300 bg-white py-3.5 text-base font-bold text-brand-600 transition active:scale-[0.98]"
        >
          저장
        </button>
        <button
          type="button"
          onClick={() => handleSave(true)}
          className="flex-1 rounded-2xl bg-brand-500 py-3.5 text-base font-bold text-white transition active:scale-[0.98]"
        >
          저장 후 다음 문제
        </button>
      </div>
    </div>
  );
}
