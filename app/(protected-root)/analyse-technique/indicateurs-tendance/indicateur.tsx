"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Cell,
} from "recharts";
import { useCompany } from "@/components/company-context";
import { type StockData, calculateMACD } from "@/lib/data-utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function IndicateursTendancePage() {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [macdFast, setMacdFast] = useState("12");
  const [macdSlow, setMacdSlow] = useState("26");
  const [macdSignal, setMacdSignal] = useState("9");

  const { selectedCompany } = useCompany();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const response = await fetch("/api/indicateurs-tendance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company: selectedCompany }),
        });

        const result = await response.json();

        if (result.error) {
          console.error("Erreur API :", result.error);
          setStockData([]);
          return;
        }

        console.log("Données récupérées :", result.data);
        setStockData(result.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
        setStockData([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [selectedCompany]);


//   useEffect(() => {
//     async function loadData() {
//       setLoading(true);
//       try {
//         const response = await fetch("/api/indicateurs-tendance", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ company: selectedCompany }),
//         });
  
//         const result = await response.json();
  
//         if (result.error) {
//           console.error("Erreur API :", result.error);
//           setStockData([]);
//           return;
//         }
  
//         console.log("Données récupérées :", result.data);
//         setStockData(result.data);
//       } catch (error) {
//         console.error("Erreur lors du chargement des données :", error);
//         setStockData([]);
//       } finally {
//         setLoading(false);
//       }
//     }
  
//     loadData();
//   }, [selectedCompany]);
  // Calculer le MACD
  const macdData =
    stockData.length > 0
      ? calculateMACD(stockData, Number.parseInt(macdFast), Number.parseInt(macdSlow), Number.parseInt(macdSignal))
      : [];

  // Préparer les données pour les graphiques
  const priceChartData = stockData.map((day) => ({
    date: new Date(day.date).toISOString().split("T")[0],
    price: day.close,
  }));

  const macdChartData = macdData.map((day) => ({
    date: new Date(day.date).toISOString().split("T")[0],
    macd: day.macd,
    signal: day.signal,
    histogram: day.histogram,
  }));

  // Identifier les signaux MACD
  const macdSignals = [];
  for (let i = 1; i < macdChartData.length; i++) {
    const prev = macdChartData[i - 1];
    const curr = macdChartData[i];

    // Signal d'achat: MACD croise au-dessus de la ligne de signal
    if (
      prev.macd !== null &&
      prev.signal !== null &&
      curr.macd !== null &&
      curr.signal !== null &&
      prev.macd < prev.signal &&
      curr.macd > curr.signal
    ) {
      macdSignals.push({
        date: curr.date,
        type: "Croisement haussier",
        description: "MACD a croisé au-dessus de la ligne de signal",
        signal: "Achat",
      });
    }

    // Signal de vente: MACD croise en-dessous de la ligne de signal
    if (
      prev.macd !== null &&
      prev.signal !== null &&
      curr.macd !== null &&
      curr.signal !== null &&
      prev.macd > prev.signal &&
      curr.macd < curr.signal
    ) {
      macdSignals.push({
        date: curr.date,
        type: "Croisement baissier",
        description: "MACD a croisé en-dessous de la ligne de signal",
        signal: "Vente",
      });
    }
  }

  // Limiter aux 5 signaux les plus récents
  const recentMacdSignals = macdSignals.slice(-5).reverse();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Indicateurs de Tendance</h1>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-green-700 border-green-200"
        >
          <RefreshCw size={14} />
          <span>Actualiser</span>
        </Button>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <p>Chargement des données...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {/* Graphique des prix */}
          <Card>
            <CardHeader>
              <CardTitle>Graphique des Prix</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="#10b981" name="Prix" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Graphique MACD */}
          <Card>
            <CardHeader>
              <CardTitle>Graphique MACD</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={macdChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="macd" stroke="#10b981" name="MACD" />
                  <Line type="monotone" dataKey="signal" stroke="#047857" name="Signal" />
                  <Bar dataKey="histogram" fill="#34d399" name="Histogramme" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Table des signaux MACD */}
          <Card>
            <CardHeader>
              <CardTitle>Signaux MACD</CardTitle>
            </CardHeader>
            <CardContent>
              {recentMacdSignals.length > 0 ? (
                <table className="w-full border-collapse border border-green-200">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="border border-green-200 p-2">Date</th>
                      <th className="border border-green-200 p-2">Type</th>
                      <th className="border border-green-200 p-2">Description</th>
                      <th className="border border-green-200 p-2">Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMacdSignals.map((signal, index) => (
                      <tr key={index}>
                        <td className="border border-green-200 p-2">{signal.date}</td>
                        <td className="border border-green-200 p-2">{signal.type}</td>
                        <td className="border border-green-200 p-2">{signal.description}</td>
                        <td className="border border-green-200 p-2">{signal.signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Aucun signal MACD détecté récemment.</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}