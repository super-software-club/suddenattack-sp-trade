import Image from "next/image";
import LogoImage from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={LogoImage} alt={"nunusp-logo"} width={100} height={100} />
    </Link>
  );
};

export default Logo;
