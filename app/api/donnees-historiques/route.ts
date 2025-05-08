import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { company, page = 1, pageSize = 10 } = await req.json()
  
    const skip = (page - 1) * pageSize
    const take = pageSize
  
    const uniqueTicker = await prisma.ticker.findFirst({
      where: { name: company },
    })
  
    if (!uniqueTicker) {
      return NextResponse.json({ data: [], total: 0 })
    }
  
    const [stockList, totalCount] = await Promise.all([
      prisma.stock_market_data.findMany({
        where: { id_ticker: uniqueTicker.id },
        orderBy: { date: "desc" },
        skip,
        take,
        select: {
          high: true,
          open: true,
          close: true,
          low: true,
          volume: true,
          adj_close: true,
          date: true,
        },
      }),
      prisma.stock_market_data.count({
        where: { id_ticker: uniqueTicker.id },
      }),
    ])
  
    const formatted = stockList.map((s) => ({
      high: s.high,
      open: s.open,
      close: s.close,
      low: s.low,
      volume: s.volume,
      adjClose: s.adj_close,
      date: s.date,
    }))
  
    console.log("FORMATTED", JSON.stringify(formatted))
    return NextResponse.json({ data: formatted, total: totalCount })
  }
  
