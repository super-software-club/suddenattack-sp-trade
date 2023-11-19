import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function updateNoticeVisitCount(noticeId: number) {
  const res = await prisma.notice.update({
    where: {
      notice_id: noticeId,
    },
    data: {
      visit_count: {
        increment: 1,
      },
    },
  });
  return NextResponse.json({}, { status: 200 });
}
