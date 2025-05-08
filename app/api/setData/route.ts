import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { setStockData } from "@/lib/utils/setStockData";

const prisma = new PrismaClient();

export async function GET() {
  const tickers = await prisma.ticker.findMany({
    where: {
      id: {
        not: undefined,
      },
    },
  }) as Array<{
    id: number;
    name: string;
  }>;


  console.log("Tickers:", JSON.stringify(tickers));

  for (const ticker of tickers) {
    try {
      await setStockData(ticker.id, ticker.name);
    } catch (error) {
      console.error(`Error processing ticker ${ticker.id}:`, error);
    }
  }

  return NextResponse.json(tickers);
}