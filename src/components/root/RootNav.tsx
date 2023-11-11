"use client";

import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const RootNav = () => {
  const kakaoLink = ""; // TODO: 서버에서 카카오링크 받아오기
  const discordLink = ""; // TODO: 서버에서 디스코드링크 받아오기

  const pathname = usePathname();

  const onClickMenu = () => {
    const menuContainer = document.getElementById("menu-container");
    const navModalBackdrop = document.getElementById("nav-modal-backdrop");
    if (menuContainer) {
      menuContainer.classList.toggle("hidden");
      menuContainer.classList.toggle("flex");
    }
    if (navModalBackdrop) {
      navModalBackdrop.classList.toggle("hidden");
    }
  };

  return (
    <>
      <div
        onClick={onClickMenu}
        id="nav-modal-backdrop"
        className="hidden w-screen h-screen gap-6 fixed z-30 top-0 left-0 bg-black bg-opacity-40 lg:hidden"
      ></div>
      <Menu
        onClick={onClickMenu}
        fontSize="large"
        className="text-white font-bold lg:hidden"
      />
      <nav
        id="menu-container"
        className="hidden flex-col fixed h-screen w-2/3 px-6 py-4 bg-banner z-30 right-0 bottom-0 lg:flex lg:flex-row lg:gap-8 text-white font-bold lg:bg-transparent"
      >
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
        <div
          onClick={onClickMenu}
          className="lg:hidden fixed bottom-2 left-1/2 -translate-x-1/2 hover:scale-110 p-1 rounded-full border-white border-2"
        >
          <IconButton>
            <CloseIcon fontSize="large" className="text-white font-bold" />
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default RootNav;
