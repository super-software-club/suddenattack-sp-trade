import Image from "next/image";

const MainBannerRoot = () => {
  return (
    <section className="w-full flex flex-col lg:w-full lg:h-80 lg:flex lg:flex-row bg-banner">
      <div className="w-full aspect-video flex-1 lg:h-full relative lg:aspect-auto">
        <Image
          src="https://i.ibb.co/Rzn8THV/SPsmall.png"
          alt="left-image"
          fill
          layout="cover"
          objectFit="fill"
        />
      </div>
      <div className="w-full aspect-video lg:aspect-auto flex-1 lg:h-full relative">
        <Image
          src="https://i.ibb.co/G91dSg2/mid-image.png"
          alt="mid-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-full aspect-video flex-1 lg:h-full relative lg:aspect-auto">
        <Image
          src="https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="right-image"
          fill
          objectFit="cover"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default MainBannerRoot;
