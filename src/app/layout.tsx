import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import RootHeader from "@/components/root/RootHeader";
import MyQueryProvider from "@/MyQueryProvider";

const inter = Noto_Sans_KR({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin-ext", "latin"],
});
export const metadata: Metadata = {
  title: "누누SP - 서든어택 SP 거래소",
  description:
    "누누SP - 서든어택 SP 거래소 24시간 운영 신속 안전 거래 보장. 서든어택 SP 구매 및 판매 상담",
  keywords: [
    "누누SP",
    "서든",
    "서든어택",
    "서든어택SP",
    "서든SP",
    "서든SP거래소",
    "서든SP거래",
    "서든SP시세",
    "쏘SP",
    "서든sp",
    "서든어택 sp",
    "서든어택 SP",
    "서든어택sp",
    "서든SP시세",
    "서든SP수수료",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MyQueryProvider>
        <body
          className={`${inter.className} bg-[url('../assets/background.png')] w-screen bg-cover bg-center bg-fixed scroll-m-0 bg-no-repeat no-scrollbar bg-banner overflow-x-hidden`}
        >
          <RootHeader />
          {children}
        </body>
      </MyQueryProvider>
    </html>
  );
}
