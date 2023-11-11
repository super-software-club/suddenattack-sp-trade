import MainBannerRoot from "@/components/root/MainBannerRoot";
import MainFooter from "@/components/root/MainFooter";
import MainInfoLayout from "@/components/root/MainInfoLayout";

export default function Home() {
  return (
    <main className="w-full">
      <MainBannerRoot />
      <MainInfoLayout />
      <MainFooter />
    </main>
  );
}
