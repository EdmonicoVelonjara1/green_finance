import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { PrismaClient } from '@/generated/prisma';  
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

export async function setStockData(ticker: number, tickerName?: string) {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, `${tickerName}.csv`);

    if (!fs.existsSync(filePath)) {
      console.warn(`File for ${tickerName} not found at ${filePath}`);
      return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const parsedData = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    // const stockData = parsedData.data.map((row: any) => ({
    //   id_ticker: ticker, // Use id_ticker as required by the type
    //   date: new Date(row.Date),
    //   open: parseFloat(row.Open),
    //   high: parseFloat(row.High),
    //   low: parseFloat(row.Low),
    //   close: parseFloat(row.Close),
    //   adj_close: parseFloat(row['Adj Close']),
    //   volume: parseInt(row.Volume, 10),
    // }));

    const stockData = parsedData.data
  .map((row: any) => {
    const date = new Date(row.Date);
    const open = parseFloat(row.Open);
    const high = parseFloat(row.High);
    const low = parseFloat(row.Low);
    const close = parseFloat(row.Close);
    const adj_close = parseFloat(row['Adj Close']);
    const volume = parseInt(row.Volume, 10);

    return {
      id_ticker: ticker,
      date,
      open,
      high,
      low,
      close,
      adj_close,
      volume,
    };
  })
  .filter((data) => {
    // Éliminer les lignes avec une date invalide
    if (isNaN(data.date.getTime())) return false;

    // Ne garder que les données à partir de 2021
    if (data.date.getFullYear() < 2021) return false;

    // Exclure les lignes ayant au moins une valeur égale à 0
    return (
      data.open !== 0 &&
      data.high !== 0 &&
      data.low !== 0 &&
      data.close !== 0 &&
      data.adj_close !== 0 &&
      data.volume !== 0
    );
  });


    await prisma.stock_market_data.createMany({
      data: stockData,
      skipDuplicates: true, // évite les doublons si index existe
    });

    console.log(`Imported ${stockData.length} rows for ${ticker}`);
  

  await prisma.$disconnect();
}
