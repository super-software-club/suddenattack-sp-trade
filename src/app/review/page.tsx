import ReviewRootContainer from "@/components/review/ReviewRootContainer";
import { AnimationWrapper } from "@/components/root/AnimationWrapper";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "누누SP 리뷰 페이지 - 서든어택 SP 거래소 -",
  description: "누누SP 리뷰 페이지",
};

const ReviewPage = () => {
  return (
    <AnimationWrapper>
      <main className="pt-24 flex flex-col items-center">
        <ReviewRootContainer />
      </main>
    </AnimationWrapper>
  );
};

export default ReviewPage;
