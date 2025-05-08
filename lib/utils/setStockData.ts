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

    const stockData = parsedData.data.map((row: any) => ({
      id_ticker: ticker, // Use id_ticker as required by the type
      date: new Date(row.Date),
      open: parseFloat(row.Open),
      high: parseFloat(row.High),
      low: parseFloat(row.Low),
      close: parseFloat(row.Close),
      adj_close: parseFloat(row['Adj Close']),
      volume: parseInt(row.Volume, 10),
    }));

    await prisma.stock_market_data.createMany({
      data: stockData,
      skipDuplicates: true, // évite les doublons si index existe
    });

    console.log(`Imported ${stockData.length} rows for ${ticker}`);
  

  await prisma.$disconnect();
}
