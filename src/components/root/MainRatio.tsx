"use client";

import { useGetSetting } from "@/utils/hooks";
import Image from "next/image";
import SellButton from "@/assets/sell-button.png";
import BuyButton from "@/assets/buy-button.png";

const MainRatio = () => {
  const { data: setting } = useGetSetting();
  return (
    <div className="flex-1 bg-card-background lg:rounded-2xl  flex flex-col items-center">
      <header
        style={{
          backgroundImage: "url(images/title-bg3.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full bg-card-container py-2 lg:rounded-t-2xl"
      >
        <h2 className="text-xl text-stroke text-center font-extrabold text-white">
          비율 안내
        </h2>
      </header>
      <div className="flex flex-col gap-4 justify-evenly items-start h-full py-6">
        <div className="flex flex-row gap-6 items-center">
          <Image src={BuyButton} width={93} height={27} alt="buy button" />
          <p className="text-white font-bold flex flex-row items-center gap-1">
            <span className="text-sm">1,000SP : </span>
            <span className="text-lg">
              {setting?.buy_rate_min.toLocaleString()} ~{" "}
              {setting?.buy_rate_max.toLocaleString()}원
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <Image src={SellButton} width={93} height={27} alt="sell button" />
          <p className="text-white font-bold flex flex-row items-center gap-1">
            <span className="text-sm">1,000SP : </span>
            <span className="text-lg">
              {setting?.sell_rate_min.toLocaleString()} ~{" "}
              {setting?.sell_rate_max.toLocaleString()}원
            </span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainRatio;
