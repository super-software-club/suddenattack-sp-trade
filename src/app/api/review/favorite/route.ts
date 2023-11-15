import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const id = await req.json();
    await prisma.review.update({
      where: {
        review_id: id,
      },
      data: {
        review_count: {
          increment: 1,
        },
      },
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
