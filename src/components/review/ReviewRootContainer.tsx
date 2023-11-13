"use client";

import { API_URL } from "@/const";
import { ThumbUp } from "@mui/icons-material";
import { IconButton, Pagination } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGetReview } from "../root/ReviewContainer";
import { dateToString } from "@/utils/date";

const getReviewCount = async () => {
  try {
    const response = await fetch(`${API_URL}/review/count`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useGetReviewCount = () => {
  return useQuery({
    queryKey: ["reviewCount"],
    queryFn: () => getReviewCount(),
  });
};

const ReviewRootContainer = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    content: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onTextAreaChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  async function onSubmitHandler() {
    try {
      const result = await fetch(`${API_URL}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (result.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [page, setPage] = useState(1);

  const { data: reviewCount } = useGetReviewCount();
  const { data, refetch } = useGetReview(page);

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <section className="w-full py-12 flex flex-col gap-6 max-w-4xl">
      <header className="px-4">
        <h1 className="text-white text-2xl font-bold">이용후기</h1>
      </header>
      <main className="w-full bg-card-background py-6 px-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4 ">
          <input
            name="name"
            onChange={onChangeHandler}
            className="px-2 py-2"
            placeholder="별명을 입력해 주세요."
          />
          <input
            name="title"
            onChange={onChangeHandler}
            className="px-2 py-2"
            placeholder="제목을 입력해 주세요."
          />
          <textarea
            name="content"
            onChange={onTextAreaChangeHandler}
            placeholder="여러분의 소중한 후기를 입력해주세요."
            className="px-2 py-3"
          />
        </div>
        <div className="flex flex-row justify-end">
          <button
            onClick={onSubmitHandler}
            className="px-4 py-2 bg-primary rounded-lg text-white"
          >
            후기 등록
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {data?.map(review => {
            return (
              <li
                className="flex flex-row text-white gap-4 px-4 py-2 bg-card-container rounded-lg items-center justify-between"
                key={review.review_id}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-teal-500">{review.review_name}</p>
                  <p className="font-bold text-lg">{review.review_title}</p>
                  <p className="text-sm">{review.review_content}</p>
                </div>
                <p className="text-sm font-bold text-gray-400">
                  {dateToString(review.reg_date)}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="w-full flex flex-row items-center justify-center">
          <Pagination
            color="primary"
            onChange={(e, page) => setPage(page)}
            count={reviewCount !== undefined ? Math.ceil(reviewCount / 10) : 1}
            sx={{
              ul: {
                "& .MuiPaginationItem-root": {
                  color: "#fff",
                },
              },
            }}
          />
        </div>
      </main>
    </section>
  );
};

export default ReviewRootContainer;
