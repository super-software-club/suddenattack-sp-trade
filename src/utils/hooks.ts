import { API_URL } from "@/const";
import { Notice, Review } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

async function getNotice(page: number) {
  try {
    const response = await fetch(`${API_URL}/notice?page=${page}`);
    const data = (await response.json()) as Notice[];
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const useGetNotice = (page: number) => {
  return useQuery({
    queryKey: ["notice", page],
    queryFn: () => getNotice(page),
  });
};

async function getNoticeCount() {
  try {
    const response = await fetch(`${API_URL}/notice/count`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function useGetNoticeCount() {
  return useQuery({
    queryKey: ["noticeCount"],
    queryFn: getNoticeCount,
  });
}

const getReviewCount = async () => {
  try {
    const response = await fetch(`${API_URL}/review/count`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetReviewCount = () => {
  return useQuery({
    queryKey: ["reviewCount"],
    queryFn: () => getReviewCount(),
  });
};

const getSetting = async () => {
  try {
    const response = await fetch(`${API_URL}/setting`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetSetting = () => {
  return useQuery({
    queryKey: ["setting"],
    queryFn: getSetting,
  });
};

const getPickedNotice = async () => {
  try {
    const res = await fetch(`${API_URL}/notice/picked`);
    const data = (await res.json()) as Notice[];
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetPickedNotice = () => {
  return useQuery({
    queryKey: ["pickedNotice"],
    queryFn: getPickedNotice,
  });
};

const getReview = async (page: number) => {
  try {
    const response = await fetch(`${API_URL}/review?page=${page}`);
    const data = (await response.json()) as Review[];
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const useGetReview = (page: number) => {
  return useQuery({
    queryKey: ["review", page],
    queryFn: () => getReview(page),
  });
};
