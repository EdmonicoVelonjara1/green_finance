"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCompany } from "@/components/company-context"
import { type StockData, getSimulatedDataForCompany, calculateRSI } from "@/lib/data-utils"
import { RefreshCw } from "lucide-react"
import { CompanyFilter } from "@/components/company-filter"

export default function OscillateursPage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
  const [rsiPeriod, setRsiPeriod] = useState("14")
  const [rsiOverbought, setRsiOverbought] = useState("70")
  const [rsiOversold, setRsiOversold] = useState("30")

  const { selectedCompany } = useCompany() // Moved hook outside useEffect

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

  // Calculer le RSI
  const rsiData = stockData.length > 0 ? calculateRSI(stockData, Number.parseInt(rsiPeriod)) : []

  // Préparer les données pour le graphique
  const priceChartData = stockData.map((day, index) => {
    return {
      date: day.date.toISOString().split("T")[0],
      price: day.close,
    }
  })

  const rsiChartData = rsiData.map((day) => {
    return {
      date: day.date.toISOString().split("T")[0],
      rsi: day.rsi,
      overbought: Number.parseInt(rsiOverbought),
      oversold: Number.parseInt(rsiOversold),
    }
  })

  // Identifier les signaux RSI
  const rsiSignals = []
  for (let i = 1; i < rsiChartData.length; i++) {
    const prev = rsiChartData[i - 1]
    const curr = rsiChartData[i]

    // Signal de survente: RSI passe sous le niveau de survente
    if (
      prev.rsi !== null &&
      curr.rsi !== null &&
      prev.rsi > Number.parseInt(rsiOversold) &&
      curr.rsi <= Number.parseInt(rsiOversold)
    ) {
      rsiSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Survente",
        description: `RSI est passé sous le niveau de survente (${rsiOversold})`,
        signal: "Achat potentiel",
      })
    }

    // Signal de surachat: RSI passe au-dessus du niveau de surachat
    if (
      prev.rsi !== null &&
      curr.rsi !== null &&
      prev.rsi < Number.parseInt(rsiOverbought) &&
      curr.rsi >= Number.parseInt(rsiOverbought)
    ) {
      rsiSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Surachat",
        description: `RSI est passé au-dessus du niveau de surachat (${rsiOverbought})`,
        signal: "Vente potentielle",
      })
    }

    // Signal de sortie de survente: RSI remonte au-dessus du niveau de survente
    if (
      prev.rsi !== null &&
      curr.rsi !== null &&
      prev.rsi <= Number.parseInt(rsiOversold) &&
      curr.rsi > Number.parseInt(rsiOversold)
    ) {
      rsiSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Sortie de survente",
        description: `RSI est remonté au-dessus du niveau de survente (${rsiOversold})`,
        signal: "Confirmation d'achat",
      })
    }

    // Signal de sortie de surachat: RSI redescend sous le niveau de surachat
    if (
      prev.rsi !== null &&
      curr.rsi !== null &&
      prev.rsi >= Number.parseInt(rsiOverbought) &&
      curr.rsi < Number.parseInt(rsiOverbought)
    ) {
      rsiSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Sortie de surachat",
        description: `RSI est redescendu sous le niveau de surachat (${rsiOverbought})`,
        signal: "Confirmation de vente",
      })
    }

    // Divergence haussière: prix fait un nouveau plus bas mais RSI fait un plus bas plus haut
    if (
      i > 10 &&
      curr.rsi !== null &&
      rsiChartData[i - 10].rsi !== null &&
      stockData[i].close < stockData[i - 10].close &&
      curr.rsi > rsiChartData[i - 10].rsi
    ) {
      rsiSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Divergence haussière",
        description: `Le prix fait un nouveau plus bas mais le RSI fait un plus bas plus haut`,
        signal: "Achat potentiel",
      })
    }
  }

  // Limiter aux 5 signaux les plus récents
  const recentRsiSignals = rsiSignals.slice(-5).reverse()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Oscillateurs</h1>
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
          <h2 className="text-lg font-semibold mb-4 text-green-800">Oscillateurs</h2>
          <p className="text-gray-600">Cette page présente les oscillateurs techniques pour l'action sélectionnée.</p>
        </div>
      </div>
    </div>
  )
}
