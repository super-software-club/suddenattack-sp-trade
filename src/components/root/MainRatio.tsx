import { prisma } from "@/prisma";

const MainRatio = async () => {
  const setting = await prisma.setting.findFirst({
    where: {
      setting_id: 1,
    },
  });
  return (
    <div className="flex-1 bg-card-background lg:rounded-2xl  flex flex-col items-center gap-2">
      <header
        className="w-full px-4 py-2 rounded-t-2xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1580432551600-8c9768628a9e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <h2 className="text-xl font-bold text-white">비율 안내</h2>
      </header>
      <div className="flex flex-col justify-evenly items-center h-full">
        <div className="flex flex-row gap-3">
          <p className="text-red-500 font-bold">구매</p>{" "}
          <p className="text-white font-bold">
            1000SP: {setting?.buy_rate_min} ~ {setting?.buy_rate_max}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <p className="text-blue-500 font-bold">판매</p>{" "}
          <p className="text-white font-bold">
            1000SP: {setting?.sell_rate_min} ~ {setting?.sell_rate_max}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainRatio;
