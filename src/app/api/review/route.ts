import { prisma } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const page = req.nextUrl.searchParams.get("page");
    const limit = 5;
    const offset = page ? (parseInt(page) - 1) * limit : 0;
    const reviews = await prisma.review.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        reg_date: "desc",
      },
    });
    const reviewCount = await prisma.review.count();
    const hasNextPage = reviewCount > offset + limit;
    return NextResponse.json({ reviews, hasNextPage });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, title, content } = data;
    const review = await prisma.review.create({
      data: {
        review_name: name,
        review_title: title,
        review_content: content,
      },
    });
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
