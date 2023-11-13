import { prisma } from "@/prisma";
import Image from "next/image";
import Link from "next/link";

const MainBannerRoot = async () => {
  const settings = await prisma.setting.findFirst({
    where: {
      setting_id: 1,
    },
  });
  return (
    <Link
      target="_blank"
      href={settings?.kakaotalk_link ?? ""}
      className="w-full flex flex-col lg:w-full lg:h-80 lg:flex lg:flex-row bg-banner"
    >
      <div className="w-full aspect-video flex-1 lg:h-full relative lg:aspect-auto">
        {
          <Image
            src={settings?.left_image_link ?? ""}
            alt="left-image"
            fill
            layout="cover"
            objectFit="fill"
          />
        }
      </div>
      <div className="w-full aspect-video lg:aspect-auto flex-1 lg:h-full relative">
        <Image
          src={settings?.mid_image_link ?? ""}
          alt="mid-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-full aspect-video flex-1 lg:h-full relative lg:aspect-auto">
        <Image
          src={settings?.right_image_link ?? ""}
          alt="right-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </div>
    </Link>
  );
};

export default MainBannerRoot;
