import { NextResponse } from "next/server";
import {db} from "@/lib/utils/db";

export interface IRsiDATA {
  date: Date
  rsi_7: number
  rsi_14: number
  rsi_21: number
}

export async function POST(req: Request) {
  let connection;
  try {
    const body = await req.json();
    const { company } = body;
    connection = await db.getConnection()
    if (!company) {
      return NextResponse.json({ error: "Le paramètre 'company' est requis." }, { status: 400 });
    }

    const [rows] = await connection.query(
      `SELECT * FROM indicator_rsi WHERE id_ticker = ? ORDER BY date ASC`,
      [company]
    );

    if (!rows) {
      return NextResponse.json({ error: "Aucune donnée trouvée pour cette entreprise." }, { status: 404 });
    }

    const rsiData: IRsiDATA [] = (rows as []).map((item: any) => ({
      date: item.date,
      rsi_7: item.rsi_7,
      rsi_14: item.rsi_14,
      rsi_21: item.rsi_21
    }));

    return NextResponse.json({ data: rsiData });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}