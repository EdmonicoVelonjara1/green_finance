import { PrismaClient } from "@/generated/prisma";
import { StockData } from "@/lib/data-utils";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const uniqueTicker = await prisma.ticker.findFirst({
    where: {
      name: "MCD",
    },
  });

const storyData = (await prisma.stock_market_data.findMany({
    where: {
      id_ticker: {
        in: uniqueTicker ? [uniqueTicker.id] : [],
      },
    },
    select: {
      high: true,
      open: true,
      close: true,
      low: true,
      volume: true,
      adj_close: true,
      date: true
    },
  }));

  console.log("StoryData:", JSON.stringify(storyData));

  const postData: StockData[] = storyData.map((s) => {
    return {
      high: s.high,
      open: s.open,
      close: s.close,
      low: s.low,
      volume: s.volume,
      adjClose: s.adj_close,
      date: s.date
    };
  });

  return NextResponse.json({
    data: postData,
    message: "Data fetched successfully",
  });
}