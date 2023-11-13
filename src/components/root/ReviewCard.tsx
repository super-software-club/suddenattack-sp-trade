"use client";

import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { API_URL } from "@/const";
import { motion } from "framer-motion";

const ReviewCard: React.FC<{
  reviewId: number;
  title: string;
  content: string;
  review_name: string;
  favoriteCount: number;
  page: number;
}> = ({ reviewId, title, content, review_name, favoriteCount, page }) => {
  async function onLikeClickHandler() {
    try {
      const result = await fetch(`${API_URL}/review/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewId),
      });
      if (result.ok) {
        window.location.reload();
      }
    } catch (error) {}
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col text-white bg-card-container p-4 rounded-2xl flex-1 h-full justify-between max-w-sm"
    >
      {/** TODO: 링크 클릭시 이용 후기 페이지로 넘어가도록 해야함 */}
      <Link href={"/review"} className="flex-1 flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg text-white font-bold">{title}</h3>
          <p className="text-xs text-gray-500">{review_name}</p>
        </header>
        <p className="text-sm text-white">{content}</p>
      </Link>
      <footer className="flex flex-row justify-center w-full gap-1 items-center">
        <IconButton onClick={onLikeClickHandler}>
          <ThumbUpOffAltIcon className="text-white" />
        </IconButton>
        <p className="text-white text-sm font-bold items-center">
          {favoriteCount}
        </p>
      </footer>
    </motion.section>
  );
};

export default ReviewCard;
