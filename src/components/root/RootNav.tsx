"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const RootNav = () => {
  const kakaoLink = ""; // TODO: 서버에서 카카오링크 받아오기
  const discordLink = ""; // TODO: 서버에서 디스코드링크 받아오기

  const pathname = usePathname();

  return (
    <span className="flex flex-row gap-8 text-white font-bold">
      <Link className={`${pathname === "/" ? "text-primary" : ""}`} href="/">
        메인
      </Link>
      <Link
        className={`${pathname === "/review" ? "text-primary" : ""}`}
        href="/review"
      >
        이용후기
      </Link>
      <Link
        className={`${pathname === "/notice" ? "text-primary" : ""}`}
        href="/notice"
      >
        공지사항
      </Link>
      <Link href="">카톡문의</Link>
      <Link href="">디스코드</Link>
    </span>
  );
};

export default RootNav;
