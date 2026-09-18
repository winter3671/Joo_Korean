#!/usr/bin/env node
/**
 * data/<과>/<차시>_문제.md 형식의 문제은행 md 파일을
 * types/quiz.ts 의 Quiz 객체 형태 TypeScript 파일로 변환한다.
 *
 * 사용법:
 *   node scripts/md-to-quiz.mjs <입력.md> <출력.ts> \
 *     --id=snu3-unit1-session1 \
 *     --className="서울대 한국어 3급" \
 *     --minutes=20
 *
 * md 파일은 반드시 data/문제_생성_프롬프트.md 에 정의된 형식을 따라야 한다:
 *   - 분류: 어휘 | 문법 | 듣기
 *   - 참고자료: (선택. 여러 줄 가능, "- 문제:" 줄 전까지. 일정표/표/지문 등)
 *   - 문제: (여러 줄 가능, "- 보기1:" 줄 전까지)
 *   - 보기1~4: ...
 *   - 정답: 1~4
 *   - 해설(한국어): ...
 *   - 해설(베트남어): (비어 있을 수 있음)
 */
import { readFileSync, writeFileSync } from "node:fs";

const SKILL_BY_CATEGORY = {
  어휘: "vocab",
  문법: "grammar",
  듣기: "listening",
};

function parseArgs(argv) {
  const [input, output, ...rest] = argv;
  const opts = { id: "", className: "", bookTitle: "", minutes: 20 };
  for (const arg of rest) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) opts[m[1]] = m[2];
  }
  return { input, output, opts };
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function parseMd(rawText) {
  const text = rawText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const titleMatch = text.match(/^#\s*(.+?)\s*—\s*(.+?)\s*\(p\.([^)]+)\)/m);
  if (!titleMatch) fail("제목 줄(# 과 — 차시 (p.시작-끝))을 찾을 수 없습니다.");
  const [, unit, session] = titleMatch;

  const bookMatch = text.match(/^- 교재:\s*(.+)$/m);
  const unitMetaMatch = text.match(/^- 단원:\s*(.+)$/m);

  // 문제 블록 단위로 분리 ("## Q숫자" 기준)
  const blocks = text.split(/^##\s*Q(\d+)\s*$/m).slice(1);
  // split 결과는 [번호, 본문, 번호, 본문, ...] 형태
  const questions = [];
  const warnings = [];

  for (let i = 0; i < blocks.length; i += 2) {
    const qNumber = blocks[i].trim();
    const body = blocks[i + 1];

    const 분류Match = body.match(/^- 분류:\s*(.+)$/m);
    const 정답Match = body.match(/^- 정답:\s*([1-4])\s*$/m);
    const 참고자료Match = body.match(/^- 참고자료:\s*([\s\S]*?)(?=\n- 문제:)/m);
    const 문제Match = body.match(/^- 문제:\s*([\s\S]*?)(?=\n- 보기1:)/m);
    const 보기1 = body.match(/^- 보기1:\s*(.+)$/m);
    const 보기2 = body.match(/^- 보기2:\s*(.+)$/m);
    const 보기3 = body.match(/^- 보기3:\s*(.+)$/m);
    const 보기4 = body.match(/^- 보기4:\s*(.+)$/m);
    const 해설코Match = body.match(
      /^- 해설\(한국어\):\s*([\s\S]*?)(?=\n- 해설\(베트남어\):)/m,
    );
    const 해설비Match = body.match(/^- 해설\(베트남어\):\s*([\s\S]*)$/m);

    const missing = [];
    if (!분류Match) missing.push("분류");
    if (!문제Match) missing.push("문제");
    if (!보기1 || !보기2 || !보기3 || !보기4) missing.push("보기1~4");
    if (!정답Match) missing.push("정답");
    if (!해설코Match) missing.push("해설(한국어)");

    if (missing.length > 0) {
      warnings.push(`Q${qNumber}: 필드 누락 (${missing.join(", ")}) — 건너뜀`);
      continue;
    }

    const categoryRaw = 분류Match[1].trim();
    const skill = SKILL_BY_CATEGORY[categoryRaw];
    if (!skill) {
      warnings.push(
        `Q${qNumber}: 분류 값 "${categoryRaw}" 을(를) 인식할 수 없습니다 (어휘/문법/듣기만 허용) — 건너뜀`,
      );
      continue;
    }

    const correctIndex = Number(정답Match[1]);
    const choicesText = [보기1[1], 보기2[1], 보기3[1], 보기4[1]].map((s) =>
      s.trim(),
    );
    const explanationVi = 해설비Match ? 해설비Match[1].trim() : "";
    const context = 참고자료Match ? 참고자료Match[1].trim() : "";

    questions.push({
      id: `q${qNumber}`,
      type: "multiple-choice",
      skill,
      unitLabel: `${(unitMetaMatch || [, unit])[1].trim()} · ${categoryRaw}`,
      ...(context ? { context } : {}),
      questionText: 문제Match[1].trim(),
      choices: choicesText.map((t, idx) => ({ id: `c${idx + 1}`, text: t })),
      correctAnswer: `c${correctIndex}`,
      explanationKo: 해설코Match[1].trim(),
      ...(explanationVi ? { explanationVi } : {}),
    });
  }

  return {
    unit: (unitMetaMatch || [, unit])[1].trim(),
    session: session.trim(),
    bookTitle: bookMatch ? bookMatch[1].trim() : "",
    questions,
    warnings,
  };
}

function toTs(quizId, opts, parsed) {
  const title = `${parsed.unit} ${parsed.session} 복습`;
  const quiz = {
    id: quizId,
    className: opts.className || "서울대 한국어 3급",
    bookTitle: opts.bookTitle || parsed.bookTitle,
    unitLabel: parsed.unit,
    title,
    estimatedMinutes: Number(opts.minutes) || Math.round(parsed.questions.length * 0.4),
    questions: parsed.questions,
  };

  return `// 이 파일은 scripts/md-to-quiz.mjs 로 자동 생성되었습니다.
// 원본: ${opts.__sourceLabel || ""}
// 수정이 필요하면 원본 md 파일을 고친 뒤 스크립트를 다시 실행하세요.
import type { Quiz } from "@/types/quiz";

const quiz: Quiz = ${JSON.stringify(quiz, null, 2)};

export default quiz;
`;
}

const { input, output, opts } = parseArgs(process.argv.slice(2));
if (!input || !output) {
  fail("사용법: node md-to-quiz.mjs <입력.md> <출력.ts> --id=<quizId> [--className=...] [--bookTitle=...] [--minutes=...]");
}
if (!opts.id) fail("--id=<quizId> 는 필수입니다.");

const text = readFileSync(input, "utf-8");
const parsed = parseMd(text);

if (parsed.questions.length === 0) fail("변환된 문제가 0개입니다. md 형식을 확인하세요.");

opts.__sourceLabel = input;
const ts = toTs(opts.id, opts, parsed);
writeFileSync(output, ts, "utf-8");

console.log(`✅ ${parsed.questions.length}개 문제 변환 완료 → ${output}`);
if (parsed.warnings.length > 0) {
  console.log(`⚠️  건너뛴 항목 ${parsed.warnings.length}개:`);
  parsed.warnings.forEach((w) => console.log(`   - ${w}`));
}
