import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MainCalculator = () => {
  return (
    <div className="bg-card-background lg:rounded-2xl px-6 py-4 flex-1 box-border flex flex-col gap-4 items-center">
      <h2 className="text-xl font-bold text-white">실수령 SP 계산기</h2>
      <div className="h-full flex flex-col justify-evenly items-center">
        <div className="flex flex-row gap-2">
          <label className="text-sm text-white font-bold">필요 SP</label>
          <input
            type="number"
            className="border-none bg-card-container rounded-sm px-2 text-white"
          />
        </div>
        <ArrowDownwardIcon className="text-white font-bold" />
        <p className="text-white font-bold">
          수수료 계산 결과: <span className="text-primary">10000 SP</span>
        </p>
      </div>
    </div>
  );
};

export default MainCalculator;
