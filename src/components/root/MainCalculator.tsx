"use client";

import { prisma } from "@/prisma";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";

const MainCalculator: React.FC<{
  fee: number;
}> = ({ fee }) => {
  const [resultSP, setResultSP] = useState<number>(0);

  const onSPChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSP = Number(e.target.value);
    const calculateResultSP = inputSP - inputSP * fee;
    setResultSP(calculateResultSP);
  };

  return (
    <div className="bg-card-background lg:rounded-2xl flex-1 box-border flex flex-col gap-4 items-center">
      <header
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519810755548-39cd217da494?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        className="px-4 w-full rounded-t-2xl py-2"
      >
        <h2 className="text-xl font-bold text-white">실수령 SP 계산기</h2>
      </header>
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="flex flex-row gap-2">
          <label className="text-sm text-white font-bold">필요 SP</label>
          <input
            onChange={onSPChangeHandler}
            type="number"
            className="border-none bg-card-container rounded-sm px-2 text-white"
          />
        </div>
        <ArrowDownwardIcon className="text-white font-bold" />
        <p className="text-white font-bold">
          수수료 계산 결과: <span className="text-primary">{resultSP} SP</span>
        </p>
      </div>
    </div>
  );
};

export default MainCalculator;
