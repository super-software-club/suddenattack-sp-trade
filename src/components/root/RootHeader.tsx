import Logo from "./Logo";
import RootNav from "./RootNav";

const RootHeader = () => {
  return (
    <header className="w-full">
      <nav className="w-full p-8 flex flex-row items-center justify-between">
        <Logo />
        <RootNav />
      </nav>
    </header>
  );
};

export default RootHeader;
