"use client";
import { dateToString } from "@/utils/date";
import { useGetPickedNotice, useUpdateNoticeVisitCount } from "@/utils/hooks";
import Link from "next/link";
import NoticeDetailDialog from "../NoticeDetailDialog";
import { useState } from "react";
import { Notice } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

const MainNotice = () => {
  const { data: notices } = useGetPickedNotice();

  const [open, setOpen] = useState<boolean>(false);

  const { mutate } = useUpdateNoticeVisitCount();

  const queryClient = useQueryClient();

  const [detailNotice, setDetailNotice] = useState<Notice>({
    notice_content: "",
    notice_id: 0,
    notice_title: "",
    picked: false,
    reg_date: new Date(),
    visit_count: 0,
  });

  const onNoticeClickHandler = (notice: Notice) => {
    mutate(notice.notice_id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["pickedNotice"] });
      },
    });
    const newNotice: Notice = {
      ...notice,
      visit_count: notice.visit_count + 1,
    };
    setDetailNotice(newNotice);
    setOpen(true);
  };

  return (
    <>
      <NoticeDetailDialog
        open={open}
        noticeContent={detailNotice.notice_content}
        noticeTitle={detailNotice.notice_title}
        noticeCreatedAt={dateToString(detailNotice.reg_date)}
        noticeVisitCount={detailNotice.visit_count}
        noticeId={detailNotice.notice_id}
        onClose={() => setOpen(false)}
      />
      <section className="flex-1 bg-card-background lg:rounded-2xl flex flex-col">
        <header className="flex flex-row bg-card-container items-center justify-between w-full px-8 py-2 lg:rounded-t-2xl">
          <h2 className="text-xl font-bold text-white">공지사항</h2>
          <Link className="text-sm font-bold text-white" href="/notice">
            더보기 {">"}
          </Link>
        </header>
        <ul className="flex flex-col gap-2 px-4 py-6">
          {notices?.map(notice => {
            return (
              <div
                onClick={onNoticeClickHandler.bind(null, notice)}
                key={`${notice.notice_id}notice`}
                className="cursor-pointer flex flex-row items-center justify-between text-white px-6 bg-card-container rounded-full py-2 text-sm"
              >
                <p>
                  <strong className="text-sm font-bold">
                    {notice?.notice_title}
                  </strong>
                </p>
                <div className="flex flex-col items-center">
                  <p
                    style={{
                      fontSize: "0.7rem",
                    }}
                    className="text-gray-500"
                  >
                    {dateToString(notice.reg_date)}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default MainNotice;
