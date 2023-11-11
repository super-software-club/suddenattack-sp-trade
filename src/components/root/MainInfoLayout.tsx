import MainCalculator from "./MainCalculator";
import MainNotice from "./MainNotice";
import MainRatio from "./MainRatio";
import ReviewContainer from "./ReviewContainer";

const MainInfoLayout = () => {
  return (
    <section className="px-20 py-10 flex flex-col gap-6">
      <div className="flex w-full flex-row justify-between gap-12">
        <MainNotice />
        <MainCalculator />
        <MainRatio />
      </div>
      <ReviewContainer />
    </section>
  );
};

export default MainInfoLayout;
