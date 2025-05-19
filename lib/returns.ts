import { db } from "./utils/db"

export async function return_annual(ticker: string, year: number) {
    let connection;
    try {
        connection = await db.getConnection();
        const [rows] = await connection.query(
            "SELECT * FROM yield WHERE id_ticker IN (SELECT id from ticker WHERE name =  ?) ;",
            [ticker]
        )
        console.log("ROWS",JSON.stringify(rows,null,2));
        if(!rows) {
            console.warn("Aucune donnée trouvée pour la requête.");
            return undefined;
        }

        const annualYield: {date: Date, return: number}[] = (rows as any[]).map(row => ({
            date: row.date,
            return: row.value
        }))

        return annualYield;

    } catch (error) {
        console.error("Erreur", error);
    } finally {
        if(connection) connection.release();
    }
}


export function calculateSMA(data: { close: number }[], period: number) {
    const sma = [];
    for (let i = 0; i < data.length; i++) {
      if (i < period - 1) {
        sma.push({ sma: null });
      } else {
        const sum = data.slice(i - period + 1, i + 1).reduce((acc, curr) => acc + curr.close, 0);
        sma.push({ sma: sum / period });
      }
    }
    return sma;
  }
  
  export function calculateEMA(data: { close: number }[], period: number) {
    const ema: { ema: number }[] = [];
    const multiplier = 2 / (period + 1);
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        ema.push({ ema: data[i].close });
      } else {
        const prevEma = ema[i - 1].ema;
        const currentEma = (data[i].close - prevEma) * multiplier + prevEma;
        ema.push({ ema: currentEma });
      }
    }
    return ema;
  }
