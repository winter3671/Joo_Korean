import type { Quiz } from "@/types/quiz";

/**
 * 전체 문제은행(source)에서 일부만 뽑아 짧은 복습용 Quiz를 만든다.
 * "오늘의 복습"처럼 문제은행 전체(수십 문제)를 매번 다 풀기엔 긴 경우 사용한다.
 *
 * 문제은행은 보통 분류(어휘 → 문법 등)별로 순서대로 묶여 있으므로, 단순히
 * 앞에서부터 N개를 자르면 한쪽 분류에 치우칠 수 있다. 그래서 전체 문제를
 * 등간격으로 골고루 샘플링해서 분류가 섞이도록 한다.
 *
 * count가 전체 문제 수 이상이면 원본 문제를 그대로 사용한다.
 */
export function buildShortReview(
  source: Quiz,
  count: number,
  overrides: Partial<Pick<Quiz, "id" | "title" | "estimatedMinutes">> = {},
): Quiz {
  const total = source.questions.length;
  const n = Math.max(1, Math.min(count, total));

  const picked =
    n >= total
      ? source.questions
      : Array.from(
          { length: n },
          (_, i) => source.questions[Math.floor((i * total) / n)],
        );

  return {
    ...source,
    id: overrides.id ?? `${source.id}-daily`,
    title: overrides.title ?? `${source.title} (오늘의 복습)`,
    estimatedMinutes:
      overrides.estimatedMinutes ??
      Math.max(1, Math.round((source.estimatedMinutes * n) / total)),
    questions: picked,
  };
}
