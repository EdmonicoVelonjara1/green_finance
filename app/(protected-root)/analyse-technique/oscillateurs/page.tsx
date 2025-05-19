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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCompany } from "@/components/company-context";
import { IRsiDATA } from "@/app/api/oscillateurs/route";

export default function OscillateursPage() {
  const [rsiData, setRsiData] = useState<IRsiDATA[]>([]);
  const [loading, setLoading] = useState(true);
  const [rsiOverbought, setRsiOverbought] = useState("70");
  const [rsiOversold, setRsiOversold] = useState("30");

  const { selectedCompany } = useCompany();

  useEffect(() => {
    async function fetchRsiData() {
      setLoading(true);
      try {
        const response = await fetch("/api/oscillateurs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ company: selectedCompany }),
        });

        const result = await response.json();

        if (result.error) {
          console.error("Erreur API :", result.error);
          setRsiData([]);
          return;
        }

        setRsiData(
          result.data.map((item: IRsiDATA) => ({
            ...item,
            date: new Date(item.date).toISOString().split("T")[0], // Formater la date
          }))
        );
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setRsiData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRsiData();
  }, [selectedCompany]);

  // Préparer les données pour le graphique
  const rsiChartData = rsiData.map((day) => ({
    date: day.date,
    rsi_7: day.rsi_7,
    rsi_14: day.rsi_14,
    rsi_21: day.rsi_21,
    overbought: Number.parseInt(rsiOverbought),
    oversold: Number.parseInt(rsiOversold),
  }));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Oscillateurs</h1>
        <Button variant="outline" size="sm" className="flex items-center gap-1 text-green-700 border-green-200">
          Actualiser
        </Button>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <p>Chargement des données...</p>
        </div>
      ) : rsiChartData.length === 0 ? (
        <p>Aucune donnée RSI disponible pour {selectedCompany}.</p>
      ) : (
        <div className="grid gap-6">
          {/* Graphique RSI */}
          <Card className="border-green-100">
            <CardHeader className="pb-3">
              <CardTitle className="text-green-800">RSI (Relative Strength Index)</CardTitle>
              <CardDescription>Analyse des oscillateurs RSI</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={rsiChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="rsi_7" stroke="#10b981" name="RSI (7)" />
                  <Line type="monotone" dataKey="rsi_14" stroke="#059669" name="RSI (14)" />
                  <Line type="monotone" dataKey="rsi_21" stroke="#047857" name="RSI (21)" />
                  <Line
                    type="monotone"
                    dataKey="overbought"
                    stroke="#ef4444"
                    name="Surachat"
                    strokeDasharray="3 3"
                  />
                  <Line
                    type="monotone"
                    dataKey="oversold"
                    stroke="#22c55e"
                    name="Survente"
                    strokeDasharray="3 3"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}