"use client";

import { useGetSetting } from "@/utils/hooks";

const MainFooter = () => {
  const { data: setting, isLoading, isError } = useGetSetting();

  if (isLoading || isError) return <></>;

  return (
    <footer className="w-full h-24 bottom-0 bg-banner flex flex-col items-center justify-center gap-2 py-6 box-border">
      <p className="text-white text-xs">{`COPYRIGHT INFORMATION GOSE HERE NUNUSP © 2023. All rights reserved.`}</p>
    </footer>
  );
};

export default MainFooter;
