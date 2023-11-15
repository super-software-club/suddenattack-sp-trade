"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useGetReview } from "@/utils/hooks";

const ReviewContainer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const { data, refetch } = useGetReview(page);

  useEffect(() => {
    refetch();
  }, [page]);

  const [mobileReviewCount, setMobileReviewCount] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  function onLeftArrowClickHandler() {
    if (isLargeScreen && page > 1) {
      setPage(prev => prev - 1);
    } else if (!isLargeScreen && page > 1) {
      if (mobileReviewCount === 0) {
        setMobileReviewCount(4);
        setPage(prev => prev - 1);
      } else {
        setMobileReviewCount(prev => prev - 1);
      }
    } else if (!isLargeScreen && page === 1) {
      if (mobileReviewCount === 0) {
        return;
      } else {
        setMobileReviewCount(prev => prev - 1);
      }
    }
  }

  function onRightArrowClickHandler() {
    if (isLargeScreen && !!data && data.length < 5) return;
    if (isLargeScreen) {
      setPage(prev => prev + 1);
    } else {
      if (!data || data[mobileReviewCount + 1] === undefined) return;
      if (mobileReviewCount === 4) {
        setMobileReviewCount(0);
        setPage(prev => prev + 1);
      } else {
        setMobileReviewCount(prev => prev + 1);
      }
    }
  }

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-center text-white font-bold text-2xl">이용후기</h2>
      <ul
        className={`flex flex-row w-full bg-card-background h-72 lg:rounded-2xl justify-between p-8 gap-4 items-center`}
      >
        <IconButton onClick={onLeftArrowClickHandler}>
          <ArrowBackIos className="text-white font-bold" />
        </IconButton>
        <AnimatePresence>
          /
          {isLargeScreen ? (
            data?.map(review => {
              return (
                <ReviewCard
                  reviewId={review.review_id}
                  page={page}
                  key={`ReviewContainer${review.review_id}`}
                  content={review.review_content}
                  review_name={review.review_name}
                  favoriteCount={review.review_count}
                  title={review.review_title}
                />
              );
            })
          ) : (
            <ReviewCard
              reviewId={
                !data || data.length === 0
                  ? 0
                  : data[mobileReviewCount].review_id
              }
              page={page}
              content={
                !data || data.length === 0
                  ? ""
                  : data[mobileReviewCount].review_content
              }
              title={
                !data || data.length === 0
                  ? ""
                  : data[mobileReviewCount].review_title
              }
              review_name={
                !data || data.length === 0
                  ? ""
                  : data[mobileReviewCount].review_name
              }
              favoriteCount={
                !data || data.length === 0
                  ? 0
                  : +data[mobileReviewCount].review_count
              }
            />
          )}
        </AnimatePresence>
        <IconButton onClick={onRightArrowClickHandler}>
          <ArrowForwardIos className="text-white font-bold" />
        </IconButton>
      </ul>
    </section>
  );
};

export default ReviewContainer;
