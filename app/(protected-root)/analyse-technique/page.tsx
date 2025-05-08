"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useCompany } from "@/components/company-context"
import { type StockData, getSimulatedDataForCompany } from "@/lib/data-utils"
import { RefreshCw } from "lucide-react"
import { CompanyFilter } from "@/components/company-filter"

export default function AnalyseTechniquePage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Analyse technique</h1>
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
          <h2 className="text-lg font-semibold mb-4 text-green-800">Analyse technique</h2>
          <p className="text-gray-600">
            Cette page présente les outils d'analyse technique pour évaluer les tendances et les mouvements de prix des
            actions.
          </p>
        </div>
      </div>
    </div>
  )
}
