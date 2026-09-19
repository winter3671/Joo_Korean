#!/usr/bin/env node
/**
 * lib/quizzes/*.ts 로 변환되어 있는 퀴즈 데이터를 Supabase seed SQL로 만든다.
 * (콘텐츠는 이미 scripts/md-to-quiz.mjs 로 검증된 .ts 파일이므로, 여기서는
 *  그 내용을 그대로 SQL INSERT 문으로 옮기기만 한다 — 별도 데이터 가공 없음.)
 *
 * 사용법: node scripts/generate-seed-sql.mjs
 *
 * 새 차시를 추가하려면 아래 QUIZZES 배열에 항목을 추가하고 다시 실행한다.
 * (unitNumber/sessionNumber 는 quizzes 테이블에 메타데이터로 저장되어,
 *  홈 화면의 "N과 M차시" 목록을 만들 때 사용된다.)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const QUIZZES = [
  { file: "lib/quizzes/unit1-session1.ts", unitNumber: 1, sessionNumber: 1 },
  { file: "lib/quizzes/unit1-session2.ts", unitNumber: 1, sessionNumber: 2 },
];

function loadQuiz(relPath) {
  const abs = path.join(root, relPath);
  let src = readFileSync(abs, "utf-8");
  // TS -> 실행 가능한 JS 로 최소 변환 (타입만 제거)
  src = src.replace(/^import type \{ Quiz \} from "@\/types\/quiz";\n/m, "");
  src = src.replace(/const quiz: Quiz = /, "const quiz = ");
  src = src.replace(/^export default quiz;\s*$/m, "globalThis.__quiz = quiz;");
  // eslint-disable-next-line no-new-func
  new Function(src)();
  const quiz = globalThis.__quiz;
  delete globalThis.__quiz;
  return quiz;
}

function esc(value) {
  if (value === undefined || value === null) return "NULL";
  return `'${String(value).replace(/'/g, "''")}'`;
}

function escJson(value) {
  if (value === undefined || value === null) return "NULL";
  return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
}

const lines = [];
lines.push("-- 이 파일은 scripts/generate-seed-sql.mjs 로 자동 생성되었습니다.");
lines.push("-- lib/quizzes/*.ts (검증된 퀴즈 데이터)를 그대로 SQL로 옮긴 것입니다.");
lines.push("-- 다시 만들려면: node scripts/generate-seed-sql.mjs");
lines.push("");
lines.push("begin;");
lines.push("");

let totalQuestions = 0;
let totalChoices = 0;

for (const { file, unitNumber, sessionNumber } of QUIZZES) {
  const quiz = loadQuiz(file);

  lines.push(`-- ${file} (${quiz.title})`);
  lines.push(
    `insert into quizzes (id, class_name, book_title, unit_label, title, estimated_minutes, unit_number, session_number)`,
  );
  lines.push(
    `values (${esc(quiz.id)}, ${esc(quiz.className)}, ${esc(quiz.bookTitle)}, ${esc(quiz.unitLabel)}, ${esc(quiz.title)}, ${quiz.estimatedMinutes}, ${unitNumber}, ${sessionNumber})`,
  );
  lines.push(
    `on conflict (id) do update set class_name = excluded.class_name, book_title = excluded.book_title, unit_label = excluded.unit_label, title = excluded.title, estimated_minutes = excluded.estimated_minutes, unit_number = excluded.unit_number, session_number = excluded.session_number;`,
  );
  lines.push("");

  quiz.questions.forEach((q, qIndex) => {
    totalQuestions += 1;
    lines.push(
      `insert into questions (quiz_id, id, order_number, type, skill, unit_label, context, question_text, correct_answer, sentence_parts, explanation_ko, explanation_vi, explanation_en, image_emoji)`,
    );
    lines.push(
      `values (${esc(quiz.id)}, ${esc(q.id)}, ${qIndex}, ${esc(q.type)}, ${esc(q.skill)}, ${esc(q.unitLabel)}, ${esc(q.context)}, ${esc(q.questionText)}, ${esc(q.correctAnswer)}, ${escJson(q.sentenceParts)}, ${esc(q.explanationKo)}, ${esc(q.explanationVi)}, ${esc(q.explanationEn)}, ${esc(q.imageEmoji)})`,
    );
    lines.push(
      `on conflict (quiz_id, id) do update set order_number = excluded.order_number, type = excluded.type, skill = excluded.skill, unit_label = excluded.unit_label, context = excluded.context, question_text = excluded.question_text, correct_answer = excluded.correct_answer, sentence_parts = excluded.sentence_parts, explanation_ko = excluded.explanation_ko, explanation_vi = excluded.explanation_vi, explanation_en = excluded.explanation_en, image_emoji = excluded.image_emoji;`,
    );

    (q.choices || []).forEach((c, cIndex) => {
      totalChoices += 1;
      lines.push(
        `insert into choices (quiz_id, question_id, id, order_number, text, emoji) values (${esc(quiz.id)}, ${esc(q.id)}, ${esc(c.id)}, ${cIndex}, ${esc(c.text)}, ${esc(c.emoji)}) on conflict (quiz_id, question_id, id) do update set order_number = excluded.order_number, text = excluded.text, emoji = excluded.emoji;`,
      );
    });
  });

  lines.push("");
}

lines.push("commit;");

const outPath = path.join(root, "supabase/seed_content.sql");
writeFileSync(outPath, lines.join("\n") + "\n", "utf-8");

console.log(
  `✅ ${QUIZZES.length}개 퀴즈, 문제 ${totalQuestions}개, 선택지 ${totalChoices}개 → ${outPath}`,
);
