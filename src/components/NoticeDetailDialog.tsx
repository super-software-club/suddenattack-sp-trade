import { Dialog, DialogActions } from "@mui/material";
import { useEffect } from "react";

type Props = {
  noticeId: number;
  noticeTitle: string;
  noticeContent: string;
  noticeCreatedAt: string;
  noticeVisitCount: number;
  open: boolean;
  onClose: () => void;
};

export default function NoticeDetailDialog({
  noticeContent,
  noticeCreatedAt,
  noticeTitle,
  noticeVisitCount,
  open,
  onClose,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <div className="flex bg-banner flex-col gap-4">
        <header className="flex flex-row bg-card-container px-4 py-4 items-center justify-between text-white">
          <h3 className="text-lg font-bold ">{noticeTitle}</h3>
          <div className="flex flex-col items-end gap-1 rounded-2xl">
            <p className="text-xs whitespace-nowrap">{noticeCreatedAt}</p>
            <p className="text-sm">조회수 : {noticeVisitCount}</p>
          </div>
        </header>
        <section className="flex no-scrollbar p-4 h-80 overflow-scroll">
          <pre className="text-white break-words w-full whitespace-pre-wrap">
            {noticeContent}
          </pre>
        </section>
        <DialogActions className="bg-card-container flex justify-end items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-2xl bg-card-background text-white"
          >
            닫기
          </button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
