"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCompany } from "@/components/company-context"
import { type StockData, getSimulatedDataForCompany, calculateMACD } from "@/lib/data-utils"
import { RefreshCw } from "lucide-react"
import { CompanyFilter } from "@/components/company-filter"

export default function IndicateursTendancePage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
  const [macdFast, setMacdFast] = useState("12")
  const [macdSlow, setMacdSlow] = useState("26")
  const [macdSignal, setMacdSignal] = useState("9")

  const { selectedCompany } = useCompany() // Moved here to prevent conditional hook call

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

  // Calculer le MACD
  const macdData =
    stockData.length > 0
      ? calculateMACD(stockData, Number.parseInt(macdFast), Number.parseInt(macdSlow), Number.parseInt(macdSignal))
      : []

  // Préparer les données pour le graphique
  const priceChartData = stockData.map((day, index) => {
    return {
      date: day.date.toISOString().split("T")[0],
      price: day.close,
    }
  })

  const macdChartData = macdData.map((day, index) => {
    return {
      date: day.date.toISOString().split("T")[0],
      macd: day.macd,
      signal: day.signal,
      histogram: day.histogram,
    }
  })

  // Identifier les signaux MACD
  const macdSignals = []
  for (let i = 1; i < macdChartData.length; i++) {
    const prev = macdChartData[i - 1]
    const curr = macdChartData[i]

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
        date: new Date(curr.date).toLocaleDateString(),
        type: "Croisement haussier",
        description: `MACD a croisé au-dessus de la ligne de signal`,
        signal: "Achat",
      })
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
        date: new Date(curr.date).toLocaleDateString(),
        type: "Croisement baissier",
        description: `MACD a croisé en-dessous de la ligne de signal`,
        signal: "Vente",
      })
    }

    // Divergence haussière: prix fait un nouveau plus bas mais MACD fait un plus bas plus haut
    if (
      i > 10 &&
      curr.macd !== null &&
      macdChartData[i - 10].macd !== null &&
      stockData[i].close < stockData[i - 10].close &&
      curr.macd > macdChartData[i - 10].macd
    ) {
      macdSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Divergence haussière",
        description: `Le prix fait un nouveau plus bas mais le MACD fait un plus bas plus haut`,
        signal: "Achat potentiel",
      })
    }

    // Divergence baissière: prix fait un nouveau plus haut mais MACD fait un plus haut plus bas
    if (
      i > 10 &&
      curr.macd !== null &&
      macdChartData[i - 10].macd !== null &&
      stockData[i].close > stockData[i - 10].close &&
      curr.macd < macdChartData[i - 10].macd
    ) {
      macdSignals.push({
        date: new Date(curr.date).toLocaleDateString(),
        type: "Divergence baissière",
        description: `Le prix fait un nouveau plus haut mais le MACD fait un plus haut plus bas`,
        signal: "Vente potentielle",
      })
    }
  }

  // Limiter aux 5 signaux les plus récents
  const recentMacdSignals = macdSignals.slice(-5).reverse()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Indicateurs de Tendance</h1>
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
          <h2 className="text-lg font-semibold mb-4 text-green-800">Indicateurs de Tendance</h2>
          <p className="text-gray-600">Cette page présente les indicateurs de tendance pour l'action sélectionnée.</p>
        </div>
      </div>
    </div>
  )
}
