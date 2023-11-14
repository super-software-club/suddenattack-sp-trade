import ReviewRootContainer from "@/components/review/ReviewRootContainer";
import { AnimationWrapper } from "@/components/root/AnimationWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
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
