import { NextResponse } from "next/server";
import {db} from "@/lib/utils/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company } = body;

    if (!company) {
      return NextResponse.json({ error: "Le paramètre 'company' est requis." }, { status: 400 });
    }

    // Requête SQL pour récupérer les données
    const [rows] = await db.query(
      "SELECT date, close FROM stock_market_data WHERE id_ticker = ? ORDER BY date ASC",
      [company]
    );

    if (!rows ) {
      return NextResponse.json({ error: "Aucune donnée trouvée pour cette entreprise." }, { status: 404 });
    }

    // Transformer les données si nécessaire
    const transformedData = (rows as []).map((item: any) => ({
      date: item.date,
      close: item.close,
    }));

    return NextResponse.json({ data: transformedData });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}