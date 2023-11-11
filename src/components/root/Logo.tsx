import Image from "next/image";
import LogoImage from "@/assets/logo.png";

const Logo = () => {
  return <Image src={LogoImage} alt={"logo"} width={100} height={100} />;
};

export default Logo;
