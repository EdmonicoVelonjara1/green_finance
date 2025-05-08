import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const uniqueTicker = await prisma.ticker.findFirst({
    where: {
      name: "LKNCY",
    },
  });

  const storyData = (await prisma.stock_market_data.findMany({
    where: {
      id_ticker: {
        in: uniqueTicker ? [uniqueTicker.id] : [],
      },
    },
  })).map(data => ({
    id: data.id,
    name: uniqueTicker?.name || "Unknown",
  })) as Array<{
    id: number;
    name: string;
  }>;


  console.log("StoryData:", JSON.stringify(storyData));

  return NextResponse.json({
    data: storyData,
    message: "Data fetched successfully",
  });
}