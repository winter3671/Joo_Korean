"use client";

import { useEffect, useState } from "react";
import type { SkillCategory } from "@/types/quiz";
import {
  CATEGORY_LABEL,
  insertQuestion,
  listQuizOptions,
  type QuizOption,
} from "@/lib/admin-questions";

const CATEGORY_OPTIONS: SkillCategory[] = ["vocab", "grammar", "listening"];
const EMPTY_CHOICES: [string, string, string, string] = ["", "", "", ""];

export default function NewQuestionPage() {
  const [quizzes, setQuizzes] = useState<QuizOption[]>([]);
  const [quizzesLoading, setQuizzesLoading] = useState(true);
  const [quizzesError, setQuizzesError] = useState<string | null>(null);
  const [quizId, setQuizId] = useState("");

  const [skill, setSkill] = useState<SkillCategory>("grammar");
  const [context, setContext] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState<[string, string, string, string]>(EMPTY_CHOICES);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [explanationKo, setExplanationKo] = useState("");
  const [explanationVi, setExplanationVi] = useState("");
  const [explanationEn, setExplanationEn] = useState("");

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );

  useEffect(() => {
    listQuizOptions()
      .then((options) => {
        setQuizzes(options);
        setQuizId((prev) => prev || options[0]?.id || "");
      })
      .catch((err: unknown) => {
        setQuizzesError(
          err instanceof Error ? err.message : "차시 목록을 불러오지 못했습니다.",
        );
      })
      .finally(() => setQuizzesLoading(false));
  }, []);

  function resetQuestionFields() {
    setContext("");
    setQuestionText("");
    setChoices(EMPTY_CHOICES);
    setCorrectIndex(0);
    setExplanationKo("");
    setExplanationVi("");
    setExplanationEn("");
  }

  function validate(): string | null {
    if (!quizId) return "차시를 선택해주세요.";
    if (!questionText.trim()) return "문제를 입력해주세요.";
    if (choices.some((c) => !c.trim())) return "선택지 4개를 모두 입력해주세요.";
    if (!explanationKo.trim()) return "한국어 해설을 입력해주세요.";
    if (!explanationVi.trim()) return "베트남어 해설을 입력해주세요.";
    if (!explanationEn.trim()) return "영어 해설을 입력해주세요.";
    return null;
  }

  async function handleSave(andNext: boolean) {
    const validationError = validate();
    if (validationError) {
      setMessage({ type: "error", text: validationError });
      return;
    }
    const quiz = quizzes.find((q) => q.id === quizId);
    if (!quiz) {
      setMessage({ type: "error", text: "선택한 차시를 찾을 수 없습니다." });
      return;
    }

    setSaving(true);
    setMessage(null);
    try {
      await insertQuestion({
        quizId,
        quizUnitLabel: quiz.unitLabel,
        skill,
        context: context.trim() || undefined,
        questionText: questionText.trim(),
        choices: choices.map((c) => c.trim()) as [string, string, string, string],
        correctIndex,
        explanationKo: explanationKo.trim(),
        explanationVi: explanationVi.trim(),
        explanationEn: explanationEn.trim(),
      });
      setMessage({
        type: "success",
        text: andNext ? "저장했습니다. 다음 문제를 입력해주세요." : "저장했습니다.",
      });
      if (andNext) resetQuestionFields();
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err instanceof Error
            ? `저장 실패: ${err.message}`
            : "저장 중 알 수 없는 오류가 발생했습니다.",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-sm font-semibold text-brand-500">문제 관리</p>
        <h1 className="mt-1 text-2xl font-black text-stone-800">문제 만들기</h1>
      </header>

      {message && (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
            message.type === "success"
              ? "border-brand-200 bg-brand-50 text-brand-700"
              : "border-rose-200 bg-rose-50 text-rose-600"
          }`}
        >
          {message.text}
        </div>
      )}

      <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <label className="mb-2 block text-sm font-bold text-stone-600">차시</label>
        {quizzesLoading ? (
          <p className="text-sm text-stone-400">불러오는 중...</p>
        ) : quizzesError ? (
          <p className="text-sm text-rose-500">{quizzesError}</p>
        ) : quizzes.length === 0 ? (
          <p className="text-sm text-stone-400">
            등록된 차시가 없습니다. 먼저 Supabase에 차시(quizzes)를 만들어주세요.
          </p>
        ) : (
          <select
            value={quizId}
            onChange={(e) => setQuizId(e.target.value)}
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
          >
            {quizzes.map((q) => (
              <option key={q.id} value={q.id}>
                {q.unitLabel} — {q.title}
              </option>
            ))}
          </select>
        )}
      </section>

      <section className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <label className="mb-2 block text-sm font-bold text-stone-600">분류</label>
        <div className="flex flex-wrap gap-2">
          {CATEGORY_OPTIONS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSkill(c)}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition ${
                skill === c
                  ? "border-brand-500 bg-brand-500 text-white"
                  : "border-brand-200 bg-white text-brand-600 hover:bg-brand-50"
              }`}
            >
              {CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-2 block text-sm font-bold text-stone-600">
            참고자료 <span className="font-normal text-stone-300">(선택 — 일정표·표·지문 등)</span>
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={3}
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-stone-600">문제</label>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            rows={3}
            placeholder="예) 친구를 ______ 영화를 봤어요."
            className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
          />
        </div>

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
                    setChoices((prev) => {
                      const next = [...prev] as [string, string, string, string];
                      next[i] = e.target.value;
                      return next;
                    })
                  }
                  placeholder={`선택지 ${i + 1}`}
                  className="flex-1 rounded-xl border-2 border-brand-200 px-3 py-2 text-sm outline-none focus:border-brand-400"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-stone-600">한국어 해설</label>
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
            <label className="mb-2 block text-sm font-bold text-stone-600">베트남어 해설</label>
            <textarea
              value={explanationVi}
              onChange={(e) => setExplanationVi(e.target.value)}
              rows={2}
              className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-600">영어 해설</label>
            <textarea
              value={explanationEn}
              onChange={(e) => setExplanationEn(e.target.value)}
              rows={2}
              className="w-full rounded-2xl border-2 border-brand-200 px-4 py-3 text-sm outline-none focus:border-brand-400"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => void handleSave(false)}
          disabled={saving}
          className="flex-1 rounded-2xl border-2 border-brand-300 bg-white py-3.5 text-base font-bold text-brand-600 transition active:scale-[0.98] disabled:opacity-60"
        >
          {saving ? "저장 중..." : "저장"}
        </button>
        <button
          type="button"
          onClick={() => void handleSave(true)}
          disabled={saving}
          className="flex-1 rounded-2xl bg-brand-500 py-3.5 text-base font-bold text-white transition active:scale-[0.98] disabled:opacity-60"
        >
          {saving ? "저장 중..." : "저장 후 다음 문제"}
        </button>
      </div>
    </div>
  );
}
