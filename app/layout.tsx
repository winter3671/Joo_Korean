import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한국어 복습 교실",
  description:
    "수업 후 배운 내용을 휴대폰으로 바로 복습하는 한국어 학습 퀴즈 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-brand-50">{children}</body>
    </html>
  );
}
