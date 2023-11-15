"use client";

import { useGetSetting } from "@/utils/hooks";

const MainRatio = () => {
  const { data: setting } = useGetSetting();
  return (
    <div className="flex-1 bg-card-background lg:rounded-2xl  flex flex-col items-center">
      <header
        className="w-full px-4 py-2 lg:rounded-t-2xl"
        style={{
          backgroundImage: "url(/images/title-background.jpeg)",
        }}
      >
        <h2 className="text-xl font-bold text-white">비율 안내</h2>
      </header>
      <div className="flex flex-col gap-4 justify-evenly items-center h-full py-6">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-white font-bold px-3 py-1 bg-red-500 rounded-lg">
            구매
          </p>{" "}
          <p className="text-white font-bold ">
            1000SP: {setting?.buy_rate_min} ~ {setting?.buy_rate_max}
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <p className="text-white font-bold px-3 py-1 rounded-lg bg-blue-500">
            판매
          </p>{" "}
          <p className="text-white font-bold">
            1000SP: {setting?.sell_rate_min} ~ {setting?.sell_rate_max}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainRatio;
