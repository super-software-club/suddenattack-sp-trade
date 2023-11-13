import Logo from "./Logo";
import RootNav from "./RootNav";

const RootHeader = async () => {
  return (
    <header className="fixed top-0 z-20 w-full bg-banner lg:bg-transparent">
      <nav className="w-full p-8 flex flex-row items-center justify-between">
        <Logo />
        <RootNav />
      </nav>
    </header>
  );
};

export default RootHeader;
