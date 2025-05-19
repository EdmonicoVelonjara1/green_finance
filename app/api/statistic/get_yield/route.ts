import { NextResponse } from "next/server";
import { return_annual } from "@/lib/returns";
import { get_years } from "@/lib/get_years";

export async function POST(req: Request) {
  if(!req) {
    return NextResponse.json({
      message: "Error"
    })
  }

  try {
    const body = await req.json(); // ✅ Parse le corps JSON
    const { company, year } = body;
    const annualYield = await return_annual(company, year);
    console.log("Annual Yield:", JSON.stringify(annualYield));

    if (!annualYield || annualYield.length === 0) {
      return NextResponse.json({
        error: "No data available",
      });
    }

    const years = get_years(company);

    return NextResponse.json({
      message: "Réçus",
      data: annualYield,
      years: years
    });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({
      error: "Une erreur est survenue",
    }, { status: 500 });
  }
}