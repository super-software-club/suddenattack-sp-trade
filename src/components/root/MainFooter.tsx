"use client";

import { useGetSetting } from "@/utils/hooks";
import { useState } from "react";
import FooterAgreeDialog from "./FooterAgreeDialog";
import FooterPersonal from "./FooterPersonal";

const MainFooter = () => {
  const { data: setting, isLoading, isError } = useGetSetting();
  const [openAgree, setOpenAgree] = useState(false);
  const [openPersonal, setOpenPersonal] = useState(false);

  if (isLoading || isError) return <></>;

  const agreeButtonHandler = () => {
    setOpenAgree(true);
  };

  const personalButtonHandler = () => {
    setOpenPersonal(true);
  };

  return (
    <footer className="w-full bottom-0 bg-banner flex flex-col items-center justify-center gap-2 py-12 box-border">
      <p className="text-white text-xs">{`COPYRIGHT INFORMATION GOSE HERE NUNUSP © 2023. All rights reserved.`}</p>
      <div className="flex flex-row text-sm text-white gap-8 mt-4">
        <button onClick={agreeButtonHandler}>이용약관</button>
        <button onClick={personalButtonHandler} className="font-bold">
          개인정보처리방침
        </button>
      </div>
      <FooterAgreeDialog
        open={openAgree}
        setClose={() => setOpenAgree(false)}
      />
      <FooterPersonal
        open={openPersonal}
        setClose={() => setOpenPersonal(false)}
      />
    </footer>
  );
};

export default MainFooter;
