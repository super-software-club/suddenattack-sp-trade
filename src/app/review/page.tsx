import ReviewRootContainer from "@/components/review/ReviewRootContainer";
import { AnimationWrapper } from "@/components/root/AnimationWrapper";

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
