import { AnimationWrapper } from "@/components/root/AnimationWrapper";
import MainBannerRoot from "@/components/root/MainBannerRoot";
import MainFooter from "@/components/root/MainFooter";
import MainInfoLayout from "@/components/root/MainInfoLayout";

export default function Home() {
  return (
    <AnimationWrapper>
      <main className="w-full flex flex-col items-center gap-14 pt-24 ">
        <MainBannerRoot />
        <MainInfoLayout />
      </main>
    </AnimationWrapper>
  );
}
