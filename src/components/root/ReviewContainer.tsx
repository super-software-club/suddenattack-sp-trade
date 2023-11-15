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
    if (isLargeScreen) {
      if (!data?.hasNextPage) {
        return;
      }
      setPage(prev => prev + 1);
      return;
    }

    if (!data?.hasNextPage && mobileReviewCount === 4) {
      return;
    }

    if (mobileReviewCount === 4) {
      setMobileReviewCount(0);
      setPage(prev => prev + 1);
    } else {
      setMobileReviewCount(prev => prev + 1);
    }

    return;
  }

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-center text-white font-bold text-2xl">이용후기</h2>
      <div className="flex flex-row items-center bg-card-background lg:px-4 rounded-2xl">
        <IconButton onClick={onLeftArrowClickHandler}>
          <ArrowBackIos className="text-white font-bold" />
        </IconButton>
        <ul
          className={`lg:grid lg:grid-cols-5 w-full lg:rounded-2xl justify-center py-4 lg:p-8 gap-4 flex box-border`}
        >
          <AnimatePresence>
            /
            {isLargeScreen ? (
              data?.reviews?.map(review => {
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
                  !data?.reviews || data.reviews.length === 0
                    ? 0
                    : data.reviews[mobileReviewCount].review_id
                }
                page={page}
                content={
                  !data?.reviews || data.reviews.length === 0
                    ? ""
                    : data.reviews[mobileReviewCount].review_content
                }
                title={
                  !data?.reviews || data.reviews.length === 0
                    ? ""
                    : data.reviews[mobileReviewCount].review_title
                }
                review_name={
                  !data?.reviews || data.reviews.length === 0
                    ? ""
                    : data.reviews[mobileReviewCount].review_name
                }
                favoriteCount={
                  !data?.reviews || data.reviews.length === 0
                    ? 0
                    : +data.reviews[mobileReviewCount].review_count
                }
              />
            )}
          </AnimatePresence>
        </ul>
        <IconButton onClick={onRightArrowClickHandler}>
          <ArrowForwardIos className="text-white font-bold" />
        </IconButton>
      </div>
    </section>
  );
};

export default ReviewContainer;
