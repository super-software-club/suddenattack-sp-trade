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

export default function NoticePage() {
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const [page, setPage] = useState(1);

  const { data, refetch } = useGetNotice(page);

  const { data: noticeCount } = useGetNoticeCount();

  useEffect(() => {
    refetch();
  }, [page]);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <AnimationWrapper>
      <main className="pt-36 flex flex-col gap-6 items-center">
        <header className="px-4">
          <h1 className="text-white text-2xl font-bold">공지사항</h1>
        </header>
        <div className="p-4 bg-card-background flex flex-col gap-4 w-full max-w-4xl">
          {data?.map(notice => {
            return (
              <Accordion
                key={notice.notice_id}
                expanded={expanded === notice.notice_id}
                onChange={handleChange(notice.notice_id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className="bg-card-container text-white"
                >
                  <div className="flex flex-row items-center gap-4">
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {dateToString(notice.reg_date)}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {notice.notice_title}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{notice.notice_content}</Typography>
                </AccordionDetails>
              </Accordion>
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
        </div>
      </main>
    </AnimationWrapper>
  );
}
