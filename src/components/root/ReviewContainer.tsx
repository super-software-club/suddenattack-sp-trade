"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const DUMMY_REVIEW_DATA = [
  {
    review_id: 1,
    review_title: "누누SP 최고",
    review_content: "누누SP 최고",
    reg_date: "2021-10-10",
    favorite_count: 10,
  },
  {
    review_id: 2,
    review_title: "누누SP 최고",
    review_content: "누누SP 최고",
    reg_date: "2021-10-10",
    favorite_count: 10,
  },
  {
    review_id: 3,
    review_title: "누누SP 최고",
    review_content: "누누SP 최고",
    reg_date: "2021-10-10",
    favorite_count: 10,
  },
  {
    review_id: 4,
    review_title: "누누SP 최고",
    review_content: "누누SP 최고",
    reg_date: "2021-10-10",
    favorite_count: 10,
  },
  {
    review_id: 5,
    review_title: "누누SP 최고",
    review_content: "누누SP 최고",
    reg_date: "2021-10-10",
    favorite_count: 10,
  },
];

const ReviewContainer = () => {
  const width = window.innerWidth;
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 1024) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  });

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-center text-white font-bold text-2xl">이용후기</h2>
      <ul
        className={`flex flex-row w-full bg-card-background h-72 lg:rounded-2xl justify-between p-8 gap-8 items-center`}
      >
        <IconButton>
          <ArrowBackIos className="text-white font-bold" />
        </IconButton>
        {isLargeScreen ? (
          DUMMY_REVIEW_DATA.map(review => {
            return (
              <ReviewCard
                key={`ReviewContainer${review.review_id}`}
                content={review.review_content}
                date={review.reg_date}
                favoriteCount={review.favorite_count}
                title={review.review_title}
              />
            );
          })
        ) : (
          <ReviewCard
            content={DUMMY_REVIEW_DATA[0].review_content}
            title={DUMMY_REVIEW_DATA[0].review_title}
            date={DUMMY_REVIEW_DATA[0].reg_date}
            favoriteCount={DUMMY_REVIEW_DATA[0].favorite_count}
          />
        )}
        <IconButton>
          <ArrowForwardIos className="text-white font-bold" />
        </IconButton>
      </ul>
    </section>
  );
};

export default ReviewContainer;
