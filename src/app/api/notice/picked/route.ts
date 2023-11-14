import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pickedNotice = await prisma.notice.findMany({
      where: {
        picked: true,
      },
    });
    return NextResponse.json(pickedNotice);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
