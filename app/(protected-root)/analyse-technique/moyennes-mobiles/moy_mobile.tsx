"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { calculateSMA, calculateEMA, StockData } from "@/lib/data-utils";

export default function MoyennesMobilesPage() {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [smaPeriod1, setSmaPeriod1] = useState(20);
  const [emaPeriod1, setEmaPeriod1] = useState(20);
  const [company, setCompany] = useState("AAPL");

  useEffect(() => {
    async function fetchStockData() {
      setLoading(true);
      try {
        const response = await fetch("/api/moyennes-mobiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company }),
        });

        const result = await response.json();

        if (result.error) {
          console.error("Erreur API :", result.error);
          setStockData([]);
          return;
        }

        setStockData(
          result.data.map((item: StockData) => ({
            date: new Date(item.date).toISOString().split("T")[0],
            close: item.close,
            open: item.open || 0,
            high: item.high || 0,
            low: item.low || 0,
            adjClose: item.adjClose || 0,
            volume: item.volume || 0,
          }))
        );
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
        setStockData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchStockData();
  }, [company]);

  // Calculer les moyennes mobiles
  const smaData = calculateSMA(stockData, smaPeriod1);
  const emaData = calculateEMA(stockData, emaPeriod1);

  // Préparer les données pour le graphique
  const chartData = stockData.map((day, index) => ({
    date: day.date,
    price: day.close,
    sma: smaData[index]?.sma || null,
    ema: emaData[index]?.ema || null,
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800">Moyennes Mobiles</h1>
      <div className="flex gap-4 my-4">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Entreprise"
          className="border border-green-300 rounded-md px-2 py-1"
        />
        <input
          type="number"
          value={smaPeriod1}
          onChange={(e) => setSmaPeriod1(Number(e.target.value))}
          placeholder="Période SMA"
          className="border border-green-300 rounded-md px-2 py-1"
        />
        <input
          type="number"
          value={emaPeriod1}
          onChange={(e) => setEmaPeriod1(Number(e.target.value))}
          placeholder="Période EMA"
          className="border border-green-300 rounded-md px-2 py-1"
        />
      </div>

      {loading ? (
        <p>Chargement des données...</p>
      ) : chartData.length === 0 ? (
        <p>Aucune donnée disponible pour {company}.</p>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#10b981" name="Prix" />
            <Line type="monotone" dataKey="sma" stroke="#059669" name={`SMA(${smaPeriod1})`} />
            <Line type="monotone" dataKey="ema" stroke="#047857" name={`EMA(${emaPeriod1})`} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}