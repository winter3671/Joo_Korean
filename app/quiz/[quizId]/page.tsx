import Link from "next/link";
import { getQuizById } from "@/lib/mock-data";
import QuizPlayer from "@/components/quiz/QuizPlayer";

export default async function QuizPage({
  params,
}: PageProps<"/quiz/[quizId]">) {
  const { quizId } = await params;
  const quiz = getQuizById(quizId);

  if (!quiz) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-5 py-12 text-center">
        <p className="text-4xl">🚧</p>
        <p className="mt-4 text-lg font-bold text-stone-700">
          아직 준비되지 않은 퀴즈예요
        </p>
        <p className="mt-2 text-sm text-stone-400">
          프로토타입 데모에서는 7과 퀴즈만 준비되어 있어요.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-2xl bg-brand-500 px-6 py-3 text-sm font-bold text-white"
        >
          홈으로 돌아가기
        </Link>
      </main>
    );
  }

  return <QuizPlayer quiz={quiz} />;
}
