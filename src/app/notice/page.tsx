"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { dateToString } from "@/utils/date";
import { AnimationWrapper } from "@/components/root/AnimationWrapper";
import { useGetNotice, useGetNoticeCount } from "@/utils/hooks";
import NoticeDetailDialog from "@/components/NoticeDetailDialog";
import { Notice } from "@prisma/client";

export default function NoticePage() {
  const [open, setOpen] = useState<boolean>(false);

  const [page, setPage] = useState(1);

  const [detailNotice, setDetailNotice] = useState<Notice>({
    notice_content: "",
    notice_id: 0,
    notice_title: "",
    picked: false,
    reg_date: new Date(),
    visit_count: 0,
  });

  const { data, refetch } = useGetNotice(page);

  const { data: noticeCount } = useGetNoticeCount();

  useEffect(() => {
    refetch();
  }, [page]);

  const onNoticeClickHandler = (notice: Notice) => {
    setDetailNotice(notice);
    setOpen(true);
  };

  return (
    <AnimationWrapper>
      <NoticeDetailDialog
        noticeContent={detailNotice.notice_content}
        noticeTitle={detailNotice.notice_title}
        noticeCreatedAt={dateToString(detailNotice.reg_date)}
        noticeVisitCount={detailNotice.visit_count}
        open={open}
        noticeId={detailNotice.notice_id}
        onClose={() => setOpen(false)}
      />
      <main className="pt-36 flex flex-col gap-6 items-center">
        <header className="px-4">
          <h1 className="text-white text-2xl font-bold">공지사항</h1>
        </header>
        <ul className="p-4 bg-card-background flex flex-col gap-4 w-full max-w-4xl">
          {data?.map(notice => {
            return (
              <li
                onClick={onNoticeClickHandler.bind(null, notice)}
                className="hover:cursor-pointer"
                key={notice.notice_id}
              >
                <div
                  id="panel1bh-header"
                  className="bg-card-container hover:bg-banner text-white p-4 rounded-xl"
                >
                  <div className="flex flex-row justify-between">
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {notice.notice_title}
                    </Typography>
                    <p>조회수 : {notice.visit_count}</p>
                  </div>
                  <pre className="w-full line-clamp-3 overflow-hidden break-words brf4tg5ved3c6 text-md text-ellipsis">
                    {notice.notice_content}
                  </pre>
                </div>
              </li>
            );
          })}
          <div className="w-full flex flex-row items-center justify-center">
            <Pagination
              color="primary"
              onChange={(event, page) => setPage(page)}
              count={noticeCount !== undefined ? Math.ceil(noticeCount / 5) : 1}
              sx={{
                ul: {
                  "& .MuiPaginationItem-root": {
                    color: "#fff",
                  },
                },
              }}
            />
          </div>
        </ul>
      </main>
    </AnimationWrapper>
  );
}
