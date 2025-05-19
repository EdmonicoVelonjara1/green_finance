"use client"

import { useEffect, useState } from "react"
import { RefreshCw } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatisticsCard } from "@/components/statistics-card"
import { ReturnsChart } from "@/components/returns-chart"
import { useCompany } from "@/components/company-context"
import { 
  type StockData, 
  // getSimulatedDataForCompany,
  // calculateDailyReturns 
} from "@/lib/data-utils"
import { Button } from "@/components/ui/button"
import { CompanyFilter } from "@/components/company-filter"

export default function StatistiquesPage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
  const { selectedCompany } = useCompany() 
  const [dailyReturns, setDailyReturns] = useState<{ date: Date; return: number }[]>([]);
  const [year, setYear] = useState(2024);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  
  useEffect(() => {
    if(!selectedCompany) return

    // async function loadData() {
    //   setLoading(true)
    //   try {
    //     const data = getSimulatedDataForCompany(selectedCompany)
        
    //     setStockData(data)
    //   } catch (error) {
    //     console.error("Erreur lors du chargement des données:", error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }

    async function getData() {
      // setLoading(true)
      try {
        const response = await fetch("/api/donnees-historiques", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: selectedCompany,
          }),
        })

        const result = await response.json()

        const transformedData = result.data.map((item: any) => ({
          ...item,
          date: new Date(item.date),
        }))

        setStockData(transformedData)
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error)
      } finally {
        setLoading(false)
      }
    }

    // async function getReturn() {
    //   try {
    //     const response = await fetch("/api/statistic/get_yield", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         company: selectedCompany,
    //         year: year
    //       }),
    //     });
    
    //     const result = await response.json();
    //     console.log("YIELD", JSON.stringify(result))
    //     if (result.error || !result.data) {
    //       console.warn("No data or error from API:", result);
    //       setDailyReturns([]);
    //       return;
    //     }
    //     setAvailableYears(result.years);
    //     setDailyReturns(result.data);
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération des données:", error);
    //     setDailyReturns([]);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    async function getReturn() {
      try {
        const response = await fetch("/api/statistic/get_yield", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: selectedCompany,
            year: year
          }),
        });
    
        const result = await response.json();
        console.log("YIELD API Response:", result);
    
        if (result.error || !Array.isArray(result.years)) {
          console.warn("No valid years data from API:", result);
          setAvailableYears([]);
          return;
        }
    
        setAvailableYears(result.years);
        setDailyReturns(result.data || []);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setAvailableYears([]);
        setDailyReturns([]);
      }
    }
    getData()
    getReturn()
    // loadData()
  }, [selectedCompany,year])

  // const dailyReturns = calculateDailyReturns(stockData)


  const histogramData = Array(20)
    .fill(0)
    .map((_, i) => ({
      bin: -10 + i,
      count: 0,
    }));

  dailyReturns.forEach((day) => {
    const binIndex = Math.min(Math.max(Math.floor(day.return + 10), 0), 19);
    histogramData[binIndex].count++;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Statistiques</h1>
        <div className="flex items-center gap-3">
          <CompanyFilter />
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-green-700 border-green-200"
          >
            <RefreshCw size={14} />
            <span>Actualiser</span>
          </Button>
        </div>
      </div>
      <main className="flex-1 p-4 md:p-6">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-2xl font-bold">Chargement des données...</div>
              <div className="text-muted-foreground">
                Veuillez patienter pendant que nous récupérons les données boursières.
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analyse Statistique - {selectedCompany}</h1>
              {/* <p className="text-muted-foreground">
                Explorez les statistiques et la distribution des rendements pour Berkshire Hathaway
              </p> */}
            </div>
            {/* <div className="absolute top-0 right-0">
              <div className="mb-4 top-0 right-0 absolute">
                <label className="text-sm text-green-800 font-medium mr-2">Année :</label>
                <select
                    value={year}
                    onChange={(e) => setYear(parseInt(e.target.value))}
                    className="border border-green-300 rounded-md px-2 py-1"
                  >
                    {availableYears?.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                </select>
              </div>
            </div> */}
            <div className="absolute top-0 right-0">
              <div className="mb-4 top-0 right-0 absolute">
                <label className="text-sm text-green-800 font-medium mr-2">Année :</label>
                <select
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className="border border-green-300 rounded-md px-2 py-1"
                >
                  {Array.isArray(availableYears) && availableYears.length > 0 ? (
                    availableYears.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))
                  ) : (
                    <option disabled>Aucune année disponible</option>
                  )}
                </select>
              </div>
            </div>
            <StatisticsCard
              year={year}
              company= {selectedCompany}
              title="Statistiques descriptives"
              description="Mesures statistiques clés du prix de l'action"
            />

            <Tabs defaultValue="returns">
              <TabsList className="mb-4">
                {/* <TabsTrigger value="returns">Rendements</TabsTrigger> */}
                {/* <TabsTrigger value="distribution">Distribution</TabsTrigger> */}
                {/* <TabsTrigger value="risk">Risque</TabsTrigger> */}
              </TabsList>
              <TabsContent value="returns">
                <ReturnsChart data={stockData} height={500} />
              </TabsContent>
              <TabsContent value="distribution">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribution des Rendements</CardTitle>
                    <CardDescription>Histogramme des rendements journaliers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div style={{ height: "500px" }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={histogramData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis
                            dataKey="bin"
                            label={{ value: "Rendement (%)", position: "insideBottom", offset: -5 }}
                          />
                          <YAxis label={{ value: "Fréquence", angle: -90, position: "insideLeft" }} />
                          <Tooltip
                            formatter={(value: number) => [value, "Fréquence"]}
                            labelFormatter={(label) => `${label}% à ${Number.parseInt(label) + 1}%`}
                          />
                          <Bar dataKey="count" fill="hsl(var(--primary))" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="risk">
                <Card>
                  <CardHeader>
                    <CardTitle>Mesures de Risque</CardTitle>
                    <CardDescription>Analyse du risque et de la volatilité</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">Volatilité annualisée</h3>
                          <p className="text-2xl font-bold">
                            {(
                              Math.sqrt(252) *
                              Math.sqrt(
                                dailyReturns.reduce((acc, day) => acc + Math.pow(day.return, 2), 0) /
                                  dailyReturns.length,
                              )
                            ).toFixed(2)}
                            %
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Mesure de la dispersion des rendements sur une base annuelle
                          </p>
                        </div>
                        {/* <div>
                          <h3 className="text-lg font-semibold">Drawdown maximum</h3>
                          <p className="text-2xl font-bold">
                            {(() => {
                              let peak = stockData[0].close
                              let maxDrawdown = 0

                              stockData.forEach((day) => {
                                if (day.close > peak) {
                                  peak = day.close
                                }

                                const drawdown = ((peak - day.close) / peak) * 100
                                maxDrawdown = Math.max(maxDrawdown, drawdown)
                              })

                              return maxDrawdown.toFixed(2)
                            })()}%
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Baisse maximale par rapport au sommet précédent
                          </p>
                        </div> */}
                        <div>
                          <h3 className="text-lg font-semibold">Drawdown maximum</h3>
                          <p className="text-2xl font-bold">
                            {(() => {
                              if (!stockData || stockData.length === 0) {
                                return "N/A";
                              }

                              let peak = stockData[0]?.close || 0;
                              let maxDrawdown = 0;

                              stockData.forEach((day) => {
                                if (day?.close > peak) {
                                  peak = day.close;
                                }

                                const drawdown = ((peak - day?.close) / peak) * 100;
                                maxDrawdown = Math.max(maxDrawdown, drawdown);
                              });

                              return maxDrawdown.toFixed(2);
                            })()}%
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Baisse maximale par rapport au sommet précédent
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold">Ratio de Sharpe</h3>
                          <p className="text-2xl font-bold">
                            {(() => {
                              const avgReturn =
                                dailyReturns.reduce((acc, day) => acc + day.return, 0) / dailyReturns.length
                              const stdDev = Math.sqrt(
                                dailyReturns.reduce((acc, day) => acc + Math.pow(day.return - avgReturn, 2), 0) /
                                  dailyReturns.length,
                              )

                              // Supposons un taux sans risque de 2%
                              const riskFreeRate = 2 / 252 // Taux journalier

                              return (((avgReturn - riskFreeRate) / stdDev) * Math.sqrt(252)).toFixed(2)
                            })()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Rendement ajusté au risque (rendement excédentaire par unité de risque)
                          </p>
                        </div>
                          <div>
                            <h3 className="text-lg font-semibold">Volatilité annualisée</h3>
                            <p className="text-2xl font-bold">
                              {(() => {
                                if (!dailyReturns || dailyReturns.length === 0) {
                                  return "N/A";
                                }

                                const validReturns = dailyReturns.filter((day) => day?.return !== undefined);
                                if (validReturns.length === 0) {
                                  return "N/A";
                                }

                                const variance =
                                  validReturns.reduce((acc, day) => acc + Math.pow(day.return, 2), 0) /
                                  validReturns.length;

                                return (Math.sqrt(252) * Math.sqrt(variance)).toFixed(2);
                              })()}%
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Mesure de la dispersion des rendements sur une base annuelle
                            </p>
                          </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="risk">
                <Card>
                  <CardHeader>
                    <CardTitle>Interprétation des Statistiques</CardTitle>
                    <CardDescription>Guide d'interprétation des mesures statistiques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Volatilité</h3>
                        <p className="text-sm text-muted-foreground">
                          La volatilité mesure la dispersion des rendements d'un actif. Une volatilité plus élevée
                          indique un risque plus important, mais aussi un potentiel de rendement plus élevé. La
                          volatilité annualisée est calculée en multipliant l'écart-type des rendements journaliers par
                          la racine carrée de 252 (nombre approximatif de jours de trading dans une année).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Drawdown</h3>
                        <p className="text-sm text-muted-foreground">
                          Le drawdown mesure la baisse d'un investissement depuis son sommet jusqu'à son point le plus
                          bas avant un nouveau sommet. Le drawdown maximum représente la perte maximale qu'un
                          investisseur aurait pu subir en achetant au sommet et en vendant au point le plus bas.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Ratio de Sharpe</h3>
                        <p className="text-sm text-muted-foreground">
                          Le ratio de Sharpe mesure le rendement excédentaire par unité de risque. Un ratio plus élevé
                          indique un meilleur rendement ajusté au risque. Un ratio supérieur à 1 est généralement
                          considéré comme bon, supérieur à 2 comme très bon, et supérieur à 3 comme excellent.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Value at Risk (VaR)</h3>
                        <p className="text-sm text-muted-foreground">
                          La VaR représente la perte maximale attendue avec un certain niveau de confiance sur une
                          période donnée. Par exemple, une VaR à 95% de 2% signifie qu'il y a 95% de chances que la
                          perte ne dépasse pas 2% sur la période considérée.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  )
}
