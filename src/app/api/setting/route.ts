import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const setting = await prisma.setting.findFirst({
      where: {
        setting_id: 1,
      },
    });
    return NextResponse.json(setting);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
