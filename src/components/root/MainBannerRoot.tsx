"use client";

import { useGetSetting } from "@/utils/hooks";
import Image from "next/image";
import Link from "next/link";

const MainBannerRoot = () => {
  const { data: settings, isLoading, isError } = useGetSetting();

  if (isLoading || isError) return <></>;

  return (
    <div className="w-full flex flex-col lg:w-full lg:flex lg:flex-row bg-banner ">
      <Link
        target="_blank"
        href={settings.left_image_src}
        className="w-full aspect-video flex-1 relative hidden lg:block"
      >
        {
          <Image
            src={settings?.left_image_link ?? ""}
            alt="left-image"
            fill
            layout="cover"
            objectFit="fill"
          />
        }
      </Link>
      <Link
        target="_blank"
        href={settings.mid_image_src}
        className="w-full aspect-video flex-1 relative"
      >
        <Image
          src={settings?.mid_image_link ?? ""}
          alt="mid-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </Link>
      <Link
        target="_blank"
        href={settings.right_image_src}
        className="w-full aspect-video flex-1 relative"
      >
        <Image
          src={settings?.right_image_link ?? ""}
          alt="right-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </Link>
    </div>
  );
};

export default MainBannerRoot;
