"use client";

import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { API_URL } from "@/const";
import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";

const ReviewCard: React.FC<{
  reviewId: number;
  title: string;
  content: string;
  review_name: string;
  favoriteCount: number;
  page: number;
}> = ({ reviewId, title, content, review_name, favoriteCount, page }) => {
  const queryClient = useQueryClient();

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
        queryClient.invalidateQueries({
          queryKey: ["review", page],
        });
      }
    } catch (error) {}
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col text-white justify-between bg-card-container p-2 rounded-2xl w-48 md:w-72 lg:w-auto box-border"
    >
      <Link href={"/review"} className="flex flex-col gap-2">
        <header className="flex flex-col gap-1">
          <h3 className="text-lg text-white font-bold break-words">{title}</h3>
          <p className="text-xs text-gray-500">{review_name}</p>
        </header>
        <p className="text-sm text-white break-words">{content}</p>
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
