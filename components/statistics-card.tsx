// "use client"

import { IStat } from "@/app/api/statistic/route"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface StatisticsCardProps {
  // data: StockData[]
  year: number
  company: string
  title?: string
  description?: string
  value?: string
  change?: string
  isPositive?: boolean
}

export function StatisticsCard({
  // data,
  year,
  company,
  title = "Statistiques",
  description,
  value,
  change,
  isPositive,
}: StatisticsCardProps) {
  const [stats, setStats] = useState<IStat>();
  // const [year, setYear] = useState(2024);
  // const [availableYears, setAvailableYears] = useState<number[]>([]);

  useEffect(()=> {
    async function getData() {
      try {
        const response = await fetch("/api/statistic", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: company,
            year: year
          })
        })
        const result = await response.json()
        setStats(result.data);
        // setAvailableYears(result.years)
      } catch(error) {
        console.error("Erreur lors de la recupération des données")
      }
    }

    getData()
  },[company,year]);

  console.log("DATAX : ", JSON.stringify(stats, null, 2))
  
  // Si value et change sont fournis, utiliser ces valeurs directement
  if (value && change) {
    return (
      <>
        <Card className="border-green-200 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-800">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">{value}</p>
              <p className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>{change}</p>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <Card className="border-green-200 shadow-md">
        <CardHeader className="pb-2 flex relative justify-between items-start">
          <CardTitle className="text-green-800">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
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
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Prix moyen</p>
              <p className="text-2xl font-bold">${stats?.mean.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Prix médian</p>
              <p className="text-2xl font-bold">
                ${stats?.median.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Écart-type</p>
              <p className="text-2xl font-bold">
                ${stats?.stdDev.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Prix minimum</p>
              <p className="text-2xl font-bold">${stats?.min.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Prix maximum</p>
              <p className="text-2xl font-bold">${stats?.max.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-green-700">Asymétrie</p>
              <p className="text-2xl font-bold">{stats?.skewness.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
