import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const reviewCount = await prisma.review.count();
    return NextResponse.json(reviewCount);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
