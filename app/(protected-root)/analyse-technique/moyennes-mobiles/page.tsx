"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCompany } from "@/components/company-context"
import { type StockData, calculateSMA, calculateEMA, getSimulatedDataForCompany } from "@/lib/data-utils"
import { RefreshCw } from "lucide-react"
import { CompanyFilter } from "@/components/company-filter"

export default function MoyennesMobilesPage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
  const [smaPeriod1, setSmaPeriod1] = useState("20")
  const [smaPeriod2, setSmaPeriod2] = useState("50")
  const [smaPeriod3, setSmaPeriod3] = useState("200")
  const [emaPeriod1, setEmaPeriod1] = useState("12")
  const [emaPeriod2, setEmaPeriod2] = useState("26")

  const { selectedCompany } = useCompany() // Moved to avoid conditional hook call

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        // Utiliser la fonction getSimulatedDataForCompany pour obtenir des données spécifiques à l'entreprise
        const data = getSimulatedDataForCompany(selectedCompany)
        setStockData(data)
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [selectedCompany])

  // Calculer les moyennes mobiles simples
  const sma1Data = stockData.length > 0 ? calculateSMA(stockData, Number.parseInt(smaPeriod1)) : []
  const sma2Data = stockData.length > 0 ? calculateSMA(stockData, Number.parseInt(smaPeriod2)) : []
  const sma3Data = stockData.length > 0 ? calculateSMA(stockData, Number.parseInt(smaPeriod3)) : []

  // Calculer les moyennes mobiles exponentielles
  const ema1Data = stockData.length > 0 ? calculateEMA(stockData, Number.parseInt(emaPeriod1)) : []
  const ema2Data = stockData.length > 0 ? calculateEMA(stockData, Number.parseInt(emaPeriod2)) : []

  // Préparer les données pour le graphique
  const chartData = stockData.map((day, index) => {
    return {
      date: day.date.toISOString().split("T")[0],
      price: day.close,
      sma1: sma1Data[index]?.sma || null,
      sma2: sma2Data[index]?.sma || null,
      sma3: sma3Data[index]?.sma || null,
      ema1: ema1Data[index]?.ema || null,
      ema2: ema2Data[index]?.ema || null,
    }
  })

  // Analyser les croisements de moyennes mobiles
  const crossovers = []
  if (chartData.length > 0) {
    for (let i = 1; i < chartData.length; i++) {
      const prev = chartData[i - 1]
      const curr = chartData[i]

      // Croisement SMA courte/moyenne (signal haussier)
      if (
        prev.sma1 !== null &&
        prev.sma2 !== null &&
        curr.sma1 !== null &&
        curr.sma2 !== null &&
        prev.sma1 < prev.sma2 &&
        curr.sma1 > curr.sma2
      ) {
        crossovers.push({
          date: new Date(curr.date).toLocaleDateString(),
          type: "Croisement haussier",
          description: `SMA${smaPeriod1} a croisé au-dessus de SMA${smaPeriod2}`,
          signal: "Achat",
        })
      }

      // Croisement SMA courte/moyenne (signal baissier)
      if (
        prev.sma1 !== null &&
        prev.sma2 !== null &&
        curr.sma1 !== null &&
        curr.sma2 !== null &&
        prev.sma1 > prev.sma2 &&
        curr.sma1 < curr.sma2
      ) {
        crossovers.push({
          date: new Date(curr.date).toLocaleDateString(),
          type: "Croisement baissier",
          description: `SMA${smaPeriod1} a croisé en-dessous de SMA${smaPeriod2}`,
          signal: "Vente",
        })
      }

      // Croisement EMA (signal haussier)
      if (
        prev.ema1 !== null &&
        prev.ema2 !== null &&
        curr.ema1 !== null &&
        curr.ema2 !== null &&
        prev.ema1 < prev.ema2 &&
        curr.ema1 > curr.ema2
      ) {
        crossovers.push({
          date: new Date(curr.date).toLocaleDateString(),
          type: "Croisement EMA haussier",
          description: `EMA${emaPeriod1} a croisé au-dessus de EMA${emaPeriod2}`,
          signal: "Achat",
        })
      }

      // Croisement EMA (signal baissier)
      if (
        prev.ema1 !== null &&
        prev.ema2 !== null &&
        curr.ema1 !== null &&
        curr.ema2 !== null &&
        prev.ema1 > prev.ema2 &&
        curr.ema1 < curr.ema2
      ) {
        crossovers.push({
          date: new Date(curr.date).toLocaleDateString(),
          type: "Croisement EMA baissier",
          description: `EMA${emaPeriod1} a croisé en-dessous de EMA${emaPeriod2}`,
          signal: "Vente",
        })
      }
    }
  }

  // Limiter aux 5 croisements les plus récents
  const recentCrossovers = crossovers.slice(-5).reverse()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Moyennes Mobiles</h1>
        <div className="flex items-center gap-3">
          <CompanyFilter />
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-green-700 border-green-200">
            <RefreshCw size={14} />
            <span>Actualiser</span>
          </Button>
        </div>
      </div>

      {/* Contenu de la page */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-green-800">Moyennes Mobiles</h2>
          <p className="text-gray-600">
            Cette page présente l'analyse des moyennes mobiles pour l'action sélectionnée.
          </p>
        </div>
      </div>
    </div>
  )
}
