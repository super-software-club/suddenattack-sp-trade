"use client";

import ForwardIcon from "@mui/icons-material/Forward";
import { useEffect, useState } from "react";

const MainCalculator: React.FC<{
  fee: number;
}> = ({ fee }) => {
  const [resultSP, setResultSP] = useState<number>(0);
  const [labelWidth, setLabelWidth] = useState<number>(0);

  const onSPChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSP = Number(e.target.value);
    const calculateResultSP = inputSP + inputSP * fee;
    setResultSP(calculateResultSP);
  };

  useEffect(() => {
    const label = document.getElementById("fee-label");
    if (label) {
      setLabelWidth(label.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-card-background lg:rounded-2xl box-border flex flex-col items-center xl:flex-1">
      <header
        style={{
          backgroundImage: "url(images/title-bg2.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-4 w-full lg:rounded-t-2xl py-2"
      >
        <h2 className="text-xl font-extrabold text-center text-white">
          실수령 SP 계산기
        </h2>
      </header>
      <div className="h-full flex flex-row justify-evenly items-center py-6 gap-4 2xl:gap-8">
        <div className="flex flex-col gap-2 flex-1">
          <label
            id="fee-label"
            className="text-lg text-white font-bold 2xl:text-xl"
          >
            필요한 SP 수량
          </label>
          <input
            onChange={onSPChangeHandler}
            type="number"
            style={{
              width: `${labelWidth}px`,
            }}
            className="border-none bg-card-container rounded-sm px-2 text-white box-border"
          />
        </div>
        <ForwardIcon className="text-white font-bold" />
        <div className="text-white font-bold flex-1">
          <p className="whitespace-nowrap text-xl 2xl:text-xl">
            수수료 포함 SP
          </p>
          <p className="text-primary text-lg 2xl:text-xl">{resultSP} SP</p>
        </div>
      </div>
    </div>
  );
};

export default MainCalculator;
