import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Link from "next/link";

const ReviewCard: React.FC<{
  title: string;
  content: string;
  date: string;
  favoriteCount: number;
}> = ({ title, content, date, favoriteCount }) => {
  return (
    <Link
      href="/"
      className="flex flex-col text-white bg-card-container p-4 rounded-2xl flex-1 h-full justify-between"
    >
      {/** TODO: 링크 클릭시 이용 후기 페이지로 넘어가도록 해야함 */}
      <div className="flex-1 flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg text-white font-bold">{title}</h3>
          <p className="text-xs text-gray-500">{date}</p>
        </header>
        <p className="text-sm text-white">{content}</p>
      </div>
      <footer className="flex flex-row justify-center w-full gap-1">
        <ThumbUpOffAltIcon />
        <p className="text-white text-sm font-bold items-center">
          {favoriteCount}
        </p>
      </footer>
    </Link>
  );
};

export default ReviewCard;
