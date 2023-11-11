import MainCalculator from "./MainCalculator";
import MainNotice from "./MainNotice";
import MainRatio from "./MainRatio";
import ReviewContainer from "./ReviewContainer";

const MainInfoLayout = () => {
  // TODO: 설정에서 배터 채움 값 받아와서 채우던지 말던지 하기 0 => 채움, 1 => 채우지 않음
  return (
    <section
      className={`w-full lg:w-10/12 lg:px-10 lg:py-6 flex flex-col gap-6 bg-banner lg:rounded-2xl`}
    >
      <div className="flex flex-col w-full lg:flex-row lg:justify-between gap-12">
        <MainNotice />
        <MainCalculator />
        <MainRatio />
      </div>
      <ReviewContainer />
    </section>
  );
};

export default MainInfoLayout;
