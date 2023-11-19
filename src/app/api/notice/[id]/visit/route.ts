import { NextRequest, NextResponse } from "next/server";
import { updateNoticeVisitCount } from "./heandler";

type Params = {
  params: { id: string };
};

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const noticeId = Number(params.id);
    return updateNoticeVisitCount(noticeId);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
