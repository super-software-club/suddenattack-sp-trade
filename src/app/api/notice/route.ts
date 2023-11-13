import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const page = req.nextUrl.searchParams.get("page");
    const limit = 5;
    const offset = page ? (parseInt(page) - 1) * limit : 0;
    const reviews = await prisma.notice.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        reg_date: "desc",
      },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
