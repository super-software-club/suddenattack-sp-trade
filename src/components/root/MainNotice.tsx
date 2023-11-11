import Link from "next/link";

const MainNotice = () => {
  return (
    <section className="flex-1 bg-card-background lg:rounded-2xl px-6 py-4 flex flex-col gap-3">
      <header className="flex flex-row items-center justify-between w-full">
        <h2 className="text-xl font-bold text-white">공지사항</h2>
        <Link className="text-sm font-bold text-white" href="/">
          더보기 {">"}
        </Link>
      </header>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-row items-center justify-between text-white px-2 bg-card-container rounded-lg py-2 text-sm">
          <p>15. 공지사항 제목 1</p>
          <p>2023.01.10</p>
        </li>
        <li className="flex flex-row items-center justify-between text-white px-2 bg-card-container rounded-lg py-2 text-sm">
          <p>14. 공지사항 제목 1</p>
          <p>2023.01.10</p>
        </li>
        <li className="flex flex-row items-center justify-between text-white px-2 bg-card-container rounded-lg py-2 text-sm">
          <p>13. 공지사항 제목 1</p>
          <p>2023.01.10</p>
        </li>
      </ul>
    </section>
  );
};

export default MainNotice;
