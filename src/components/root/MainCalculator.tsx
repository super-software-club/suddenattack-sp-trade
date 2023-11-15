"use client";

import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from "react";

const MainCalculator: React.FC<{
  fee: number;
}> = ({ fee }) => {
  const [resultSP, setResultSP] = useState<number>(0);

  const onSPChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSP = Number(e.target.value);
    const calculateResultSP = inputSP + inputSP * fee;
    setResultSP(calculateResultSP);
  };

  return (
    <div className="bg-card-background lg:rounded-2xl flex-1 box-border flex flex-col items-center">
      <header
        style={{
          backgroundImage: "url(/images/title-background.jpeg)",
          objectFit: "fill",
          objectPosition: "center",
        }}
        className="px-4 w-full lg:rounded-t-2xl py-2"
      >
        <h2 className="text-xl font-bold text-white">실수령 SP 계산기</h2>
      </header>
      <div className="h-full flex flex-row justify-evenly items-center py-6 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white font-bold">필요한 SP 수량</label>
          <input
            onChange={onSPChangeHandler}
            type="number"
            className="border-none bg-card-container rounded-sm px-2 text-white max-w-xs w-24"
          />
        </div>
        <ForwardIcon className="text-white font-bold" />
        <div className="text-white font-bold flex-1">
          <p className="whitespace-nowrap">수수료 포함 SP</p>
          <p className="text-primary">{resultSP} SP</p>
        </div>
      </div>
    </div>
  );
};

export default MainCalculator;
