import { NextResponse } from "next/server";
import { db } from "@/lib/utils/db";

export interface IStat{
  mean: number
  median: number
  min: number
  max: number
  stdDev: number
  skewness: number
  kurtosis: number
}

export async function POST(req: Request) {
  if(!req) {
    return NextResponse.json({
      message: "Error"
    })
  }

 let connection;
    try {
      const body = await req.json(); // ✅ Parse le corps JSON
      const { company, year } = body;

      connection = await db.getConnection();

      const [rows] = await connection.query(
        "SELECT * FROM stat_annual WHERE year = ? AND company = ?;",
        [year, company]
      );

      const [rows_y] = await connection.query(
        "SELECT DISTINCT YEAR(date) AS year FROM stock_market_data WHERE id_ticker IN (SELECT id FROM ticker WHERE name = ?) ORDER BY year DESC;",
        [company]
      );

      
      
      console.log("Données récupérées :", rows);
      console.log("Année :", rows_y);

      console.log("Query result:", JSON.stringify(rows, null, 2));
  
      
      if (!rows || !rows_y) {
        console.warn("Aucune donnée trouvée pour la requête.");
        return undefined;
      }

      const stats: IStat | undefined = (rows as any[]).map(row => ({
        mean: row.mean_price,
        median: row.median_price,
        min: row.min_price,
        max: row.max_price,
        stdDev: row.std_price,
        skewness: 0,     
        kurtosis: 0,    
      }))[0]; 
      
      const years: number[] = (rows_y as any[]).map(row => row.year);

      return NextResponse.json({
        message: "Réçus",
        data: stats,
        years: years
      });
    } catch(error) {
      console.error("Erreur: ", error);
      return NextResponse.json({
        error: "Errrrrrrreur",
      });
    } finally {
      if (connection) connection.release();
    }
}
