import type { Metadata } from "next"
import { RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CompanyFilter } from "@/components/company-filter"

export const metadata: Metadata = {
  title: "Comparaison - Analyse Boursière Fast Food",
  description: "Comparaison des données boursières pour les entreprises de fast-food",
}

export default function ComparaisonPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Comparaison</h1>
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
          <h2 className="text-lg font-semibold mb-4 text-green-800">Comparaison</h2>
          <p className="text-gray-600">Cette page permet de comparer les performances de différentes actions.</p>
        </div>
      </div>
    </div>
  )
}
