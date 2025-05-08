import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {

  const tickers = await prisma.ticker.findMany({
    where: {
      id: {
        not: undefined,
      },
    },
  }) as Array<{
    id: string;
    name: string;
  }>;

  console.log("Tickers:", JSON.stringify(tickers));
  return NextResponse.json(tickers);
}