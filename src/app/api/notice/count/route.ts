import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const count = await prisma.notice.count();
    return NextResponse.json(count);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
