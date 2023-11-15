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
      <div className="flex flex-col gap-4 justify-evenly items-start h-full py-6">
        <div className="flex flex-row gap-3 items-center">
          <p className="text-white font-bold px-4 py-1 bg-red-400 rounded-lg border-2 border-white italic">
            구매
          </p>{" "}
          <p className="text-white font-bold flex flex-row items-center gap-2">
            <span className="text-sm">1,000SP: </span>
            <span className="text-lg">
              {setting?.buy_rate_min} ~ {setting?.buy_rate_max}
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <p className="text-white font-bold px-4 py-1 rounded-lg bg-blue-400 border-2 border-white italic">
            판매
          </p>{" "}
          <p className="text-white font-bold flex flex-row items-center gap-2">
            <span className="text-sm">1,000SP: </span>
            <span className="text-lg">
              {setting?.sell_rate_min} ~ {setting?.sell_rate_max}
            </span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainRatio;
