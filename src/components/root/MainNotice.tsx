import { prisma } from "@/prisma";
import { dateToString } from "@/utils/date";
import Link from "next/link";

const MainNotice = async () => {
  const notices = await prisma.notice.findMany({
    where: {
      picked: true,
    },
  });
  return (
    <section className="flex-1 bg-card-background lg:rounded-2xl flex flex-col">
      <header
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        className="flex flex-row items-center justify-between w-full px-4 py-2 lg:rounded-t-2xl"
      >
        <h2 className="text-xl font-bold text-white">공지사항</h2>
        <Link className="text-sm font-bold text-white" href="/notice">
          더보기 {">"}
        </Link>
      </header>
      <ul className="flex flex-col gap-2 px-4 py-6">
        {notices?.map(notice => {
          return (
            <li className="flex flex-row items-center justify-between text-white px-4 bg-card-container rounded-lg py-2 text-sm">
              <p>
                <strong className="text-sm font-bold">
                  {notice?.notice_title}
                </strong>
              </p>
              <p className="text-xs">{dateToString(notice.reg_date)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainNotice;
