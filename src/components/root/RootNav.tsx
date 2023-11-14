"use client";

import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { API_URL } from "@/const";
import { Setting } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function getSetting() {
  try {
    const response = await fetch(`${API_URL}/setting`);
    const data = (await response.json()) as Setting;
    return data;
  } catch (error) {
    console.error(error);
  }
}

function useGetSetting() {
  return useQuery({
    queryKey: ["setting"],
    queryFn: () => getSetting(),
  });
}

const RootNav = () => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const pathname = usePathname();

  const { data } = useGetSetting();

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

  function handleTouchStart(event: React.TouchEvent) {
    setTouchStartX(event.changedTouches[0].screenX);
  }

  function handleTouchEnd(event: React.TouchEvent) {
    setTouchEndX(event.changedTouches[0].screenX);
  }

  if (touchStartX - touchEndX < -50) {
    // 오른쪽에서 왼쪽으로 스와이프
    onClickMenu(); // 메뉴 숨기는 함수 호출
    setTouchEndX(0);
    setTouchStartX(0);
  }

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={onClickMenu}
        id="nav-modal-backdrop"
        className="hidden w-screen h-screen gap-6 fixed z-30 top-0 left-0 bg-black bg-opacity-40 lg:hidden"
      ></div>
      <div className="lg:hidden">
        <Menu
          onClick={onClickMenu}
          fontSize="large"
          className="text-white font-bold "
        />
      </div>
      <nav
        id="menu-container"
        className="hidden flex-col gap-6 fixed h-screen w-2/3 px-6 py-4 bg-banner z-30 right-0 bottom-0 lg:flex lg:flex-row lg:gap-8 text-white font-bold lg:bg-transparent lg:static lg:h-auto lg:items-center lg:w-auto lg:px-0 lg:py-0 lg:justify-evenly"
      >
        <Link
          onClick={onClickMenu}
          className={`${pathname === "/" ? "text-primary" : ""}`}
          href="/"
        >
          메인
        </Link>
        <Link
          onClick={onClickMenu}
          className={`${pathname === "/review" ? "text-primary" : ""}`}
          href="/review"
        >
          이용후기
        </Link>
        <Link
          onClick={onClickMenu}
          className={`${pathname === "/notice" ? "text-primary" : ""}`}
          href="/notice"
        >
          공지사항
        </Link>
        <Link target="_blank" href={data?.kakaotalk_link ?? "/"}>
          카톡문의
        </Link>
        <Link target="_blank" href={data?.discord_link ?? "/"}>
          디스코드
        </Link>
        <div
          onClick={onClickMenu}
          className="lg:hidden fixed bottom-12 left-1/2 -translate-x-1/2 hover:scale-110 p-1 rounded-full border-white border-2"
        >
          <IconButton className="lg:hidden">
            <CloseIcon fontSize="large" className="text-white font-bold" />
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default RootNav;
