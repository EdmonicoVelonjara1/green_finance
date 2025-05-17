// API route pour appeler la procédure MySQL

import { NextResponse } from 'next/server'
import { db } from "@/lib/utils/db"

export async function GET(req: Request) {

    let connection;
    
    const tickers: number[] = []
    const mois: number[] = []
    const annees: number[] = []
    try {
        connection = await db.getConnection();
        const [rows]: any[] = await  connection.query("SELECT DISTINCT id_ticker, MONTH(date) AS month_val, YEAR(date) AS year_val FROM stock_market_data ORDER BY year_val, month_val")
          
          // Initialiser les tableaux

          
          // Boucler sur chaque ligne pour remplir les tableaux
          for (const row of rows) {
            tickers.push(row.id_ticker)
            mois.push(row.month_val)
            annees.push(row.year_val)
          }
          
          // Vérification
          console.log({ tickers, mois, annees })
          
        for(let i=0; i<tickers.length;i++) {
            await connection.query('CALL add_statistic(?, ?, ?)', [
            tickers[i],
            mois[i],
            annees[i]
            ])
        }
        return NextResponse.json({
            message: "Données insérées"
        })
    } catch (error) {
    console.error('Erreur lors de l’appel à la procédure:', error)
    return NextResponse.json({ error: 'Erreur lors de l’appel à la procédure' })
  } finally {
    if (connection)  connection.release();
  }
}
