import { db } from "./utils/db";

export interface IStat{
  mean: number
  median: number
  min: number
  max: number
  stdDev: number
  skewness: number
  kurtosis: number
}

export async function get_stat(
    company: string, 
    year: number
  ): Promise<IStat | undefined> {
    let connection;
    try {
      connection = await db.getConnection();
      const [rows] = await connection.query(
        `
        SELECT * FROM statistic 
        WHERE YEAR(data) = ? 
        AND id_ticker IN 
        (SELECT id FROM stock_market_data WHERE name = ?);
        `,
        [year, company]
      );

      console.log("Données récupérées :", rows);

      console.log("Query result:", JSON.stringify(rows, null, 2));
  
      if (!rows) {
        console.warn("Aucune donnée trouvée pour la requête.");
        return undefined;
      }

      const stats: IStat | undefined = (rows as any[]).map(row => ({
        mean: row.avg_price,
        median: row.median_price,
        min: row.min_price,
        max: row.max_price,
        stdDev: row.std_price,
        skewness: 0,     // par défaut si non présent
        kurtosis: 0,     // par défaut si non présent
      }))[0]; // Extract the first object or undefined if the array is empty
      
      return stats;
    } catch(error) {
      console.error("Erreur: ", error);
      return undefined;
    } finally {
      if (connection) connection.release();
    }
  }
