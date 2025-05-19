import { db } from "./utils/db"

export async function get_years(ticker: string) {
    let connection;
    try {
        connection = await db.getConnection();
        const [rows] = await connection.query(
            "SELECT DISTINCT YEAR(date) AS year FROM stock_market_data WHERE id_ticker IN (SELECT id FROM ticker WHERE name = ?) ORDER BY year DESC;",
            [ticker]
          );

          console.log("Query result:", JSON.stringify(rows, null, 2));
      
          
          if (!rows ) {
            console.warn("Aucune donnée trouvée pour la requête.");
            return undefined;
          }
    
          const years: number[] = (rows as any[]).map(row => row.year);
          
          return years;

    } catch (error) {
        console.error("Erreur", error);
    } finally {
        if(connection) connection.release();
    }
}

