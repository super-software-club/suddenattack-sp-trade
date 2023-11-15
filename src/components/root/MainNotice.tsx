"use client";
import { dateToString } from "@/utils/date";
import { useGetPickedNotice } from "@/utils/hooks";
import Link from "next/link";

const MainNotice = () => {
  const { data: notices } = useGetPickedNotice();
  return (
    <section className="flex-1 bg-card-background lg:rounded-2xl flex flex-col">
      <header
        style={{
          backgroundImage: "url(/images/title-background.jpeg)",
        }}
        className="flex flex-row items-center justify-between w-full px-4 py-2 lg:rounded-t-2xl"
      >
        <h2 className="text-xl font-bold text-white">공지사항</h2>
        <Link className="text-sm font-bold text-white" href="/notice">
          더보기 {">"}
        </Link>
      </header>
      <ul className="flex flex-col gap-2 px-4 py-6">
        {notices?.map(notice => {
          return (
            <Link
              href="/notice"
              key={`${notice.notice_id}notice`}
              className="flex flex-row items-center justify-between text-white px-4 bg-card-container rounded-lg py-2 text-sm"
            >
              <p>
                <strong className="text-sm font-bold">
                  {notice?.notice_title}
                </strong>
              </p>
              <p className="text-xs text-gray-500">
                {dateToString(notice.reg_date)}
              </p>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default MainNotice;
