const MainRatio = () => {
  return (
    <div className="flex-1 bg-card-background rounded-2xl px-6 py-4 flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold text-white">비율 안내</h2>
      <div className="flex flex-col justify-evenly items-center h-full">
        <div className="flex flex-row gap-3">
          <p className="text-red-500 font-bold">구매</p>{" "}
          <p className="text-white font-bold">1000SP: 1600 ~ 2000</p>
        </div>
        <div className="flex flex-row gap-3">
          <p className="text-blue-500 font-bold">판매</p>{" "}
          <p className="text-white font-bold">1000SP: 2100 ~ 2500</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainRatio;
