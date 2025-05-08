"use client"

import { useEffect, useState } from "react"
import { useCompany } from "@/components/company-context"
import { type StockData, getSimulatedDataForCompany } from "@/lib/data-utils"
import {
  generateLinearPrediction,
  generateMovingAveragePrediction,
  generateExponentialSmoothingPrediction,
  evaluatePrediction,
} from "@/lib/prediction-utils"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { CompanyFilter } from "@/components/company-filter"

export default function PrevisionsPage() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)

  // Paramètres de prédiction
  const [predictionDays, setPredictionDays] = useState(30)
  const [trainingPeriod, setTrainingPeriod] = useState("180")
  const [maWindow, setMaWindow] = useState("20")
  const [alpha, setAlpha] = useState(0.2)
  const [beta, setBeta] = useState(0.1)

  // Données de prédiction
  const [linearPrediction, setLinearPrediction] = useState<any[]>([])
  const [maPrediction, setMaPrediction] = useState<any[]>([])
  const [expPrediction, setExpPrediction] = useState<any[]>([])
  const [metrics, setMetrics] = useState<any>({})
  const [companyDataLoaded, setCompanyDataLoaded] = useState(false) // Track if company data is loaded

  const { selectedCompany } = useCompany() // Always call the hook

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        // Utiliser la fonction getSimulatedDataForCompany pour obtenir des données spécifiques à l'entreprise
        const data = getSimulatedDataForCompany(selectedCompany)
        setStockData(data)
        setCompanyDataLoaded(true) // Set to true when data is loaded
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [selectedCompany])

  useEffect(() => {
    if (!companyDataLoaded || stockData.length === 0) return

    // Diviser les données en ensemble d'entraînement et de test
    const trainingSize = Number.parseInt(trainingPeriod)
    const testingSize = Math.min(60, stockData.length - trainingSize)

    if (trainingSize >= stockData.length) return

    const trainingData = stockData.slice(0, trainingSize)
    const testingData = stockData.slice(trainingSize, trainingSize + testingSize)

    // Générer les prédictions
    const linearResult = generateLinearPrediction(trainingData, testingData.length + predictionDays)
    const maResult = generateMovingAveragePrediction(
      trainingData,
      Number.parseInt(maWindow),
      testingData.length + predictionDays,
    )
    const expResult = generateExponentialSmoothingPrediction(
      trainingData,
      alpha,
      beta,
      testingData.length + predictionDays,
    )

    // Évaluer les prédictions sur les données de test
    const linearMetrics = evaluatePrediction(linearResult.slice(0, testingData.length), testingData)
    const maMetrics = evaluatePrediction(maResult.slice(0, testingData.length), testingData)
    const expMetrics = evaluatePrediction(expResult.slice(0, testingData.length), testingData)

    // Préparer les données pour l'affichage
    const historicalData = [...trainingData, ...testingData].map((day) => ({
      date: day.date.toISOString().split("T")[0],
      actual: day.close,
    }))

    // Combiner les données historiques et les prédictions
    const combinedLinear = [...historicalData]
    const combinedMA = [...historicalData]
    const combinedExp = [...historicalData]

    // Ajouter les prédictions pour les données de test (pour évaluation)
    for (let i = 0; i < testingData.length; i++) {
      const date = testingData[i].date.toISOString().split("T")[0]
      const index = combinedLinear.findIndex((d) => d.date === date)

      if (index !== -1) {
        combinedLinear[index].linearPrediction = linearResult[i].prediction
        combinedMA[index].maPrediction = maResult[i].prediction
        combinedExp[index].expPrediction = expResult[i].prediction
      }
    }

    // Ajouter les prédictions futures
    const lastDate = new Date(testingData[testingData.length - 1].date)
    for (let i = 0; i < predictionDays; i++) {
      const futureDate = new Date(lastDate)
      futureDate.setDate(futureDate.getDate() + i + 1)
      const dateStr = futureDate.toISOString().split("T")[0]

      combinedLinear.push({
        date: dateStr,
        linearPrediction: linearResult[testingData.length + i].prediction,
      })

      combinedMA.push({
        date: dateStr,
        maPrediction: maResult[testingData.length + i].prediction,
      })

      combinedExp.push({
        date: dateStr,
        expPrediction: expResult[testingData.length + i].prediction,
      })
    }

    setLinearPrediction(combinedLinear)
    setMaPrediction(combinedMA)
    setExpPrediction(combinedExp)
    setMetrics({
      linear: linearMetrics,
      ma: maMetrics,
      exp: expMetrics,
    })
  }, [stockData, trainingPeriod, maWindow, alpha, beta, predictionDays, companyDataLoaded])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Prévisions</h1>
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
          <h2 className="text-lg font-semibold mb-4 text-green-800">Prévisions</h2>
          <p className="text-gray-600">
            Cette page présente les prévisions et les projections pour l'action sélectionnée.
          </p>
        </div>
      </div>
    </div>
  )
}
