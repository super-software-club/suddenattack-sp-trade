import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import RootHeader from "@/components/root/RootHeader";
import MyQueryProvider from "@/MyQueryProvider";
import { AnimationWrapper } from "@/components/root/AnimationWrapper";

const inter = Noto_Sans_KR({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin-ext", "latin"],
});
export const metadata: Metadata = {
  title: "누누SP 서든어택 SP거래 SP거래사이트 SP구매 서든어택SP 구매 사이트",
  description:
    "누누SP 서든어택 SP거래 SP거래사이트 SP구매 서든어택SP 구매 사이트",
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
