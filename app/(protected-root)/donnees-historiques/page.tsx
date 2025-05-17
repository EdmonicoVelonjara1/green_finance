"use client"

import { useEffect, useState } from "react"
import { Search, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCompany } from "@/components/company-context"
import { type StockData } from "@/lib/data-utils"
import { CompanyFilter } from "@/components/company-filter"

export default function DonneesHistoriquesPage() {
  const { selectedCompany } = useCompany()
  const [stockData, setStockData] = useState<StockData[]>([])
  const [filteredData, setFilteredData] = useState<StockData[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (!selectedCompany) return

    async function getData() {
      // setLoading(true)
      try {
        const response = await fetch("/api/donnees-historiques", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: selectedCompany,
            page: currentPage,
            pageSize: rowsPerPage,
          }),
        })

        const result = await response.json()

        const transformedData = result.data.map((item: any) => ({
          ...item,
          date: new Date(item.date),
        }))

        setStockData(transformedData)
        setFilteredData(transformedData)
        setTotalCount(result.total || 0)
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [selectedCompany, currentPage])

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = stockData.filter(
        (day) =>
          day.date.toISOString().includes(searchTerm) ||
          day.close.toString().includes(searchTerm) ||
          day.volume.toString().includes(searchTerm),
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(stockData)
    }
  }, [searchTerm, stockData])

  const totalPages = Math.ceil(totalCount / rowsPerPage)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Données historiques</h1>
        <div className="flex items-center gap-3">
          <CompanyFilter />
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-green-700 border-green-200"
            onClick={() => {
              setSearchTerm("")
              setCurrentPage(1)
            }}
          >
            <RefreshCw size={14} />
            <span>Actualiser</span>
          </Button>
        </div>
      </div>

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
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Historique des prix - {selectedCompany}</CardTitle>
              <CardDescription>
                Données historiques de prix et volumes pour {selectedCompany}
              </CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par date, prix ou volume..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Ouverture</TableHead>
                      <TableHead className="text-right">Plus haut</TableHead>
                      <TableHead className="text-right">Plus bas</TableHead>
                      <TableHead className="text-right">Clôture</TableHead>
                      <TableHead className="text-right">Clôture ajustée</TableHead>
                      <TableHead className="text-right">Volume</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((day) => (
                      <TableRow key={day.date.toISOString()}>
                        <TableCell>{day.date.toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">${day.open.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${day.high.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${day.low.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${day.close.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${day.adjClose.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{day.volume.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

            </CardContent>
          </Card>
          <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-muted-foreground">
                    Page {currentPage} sur {totalPages}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Précédent
                    </Button>

                    {/* Pagination dynamique */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((page) => {
                        const currentGroup = Math.floor((currentPage - 1) / 10)
                        const start = currentGroup * 10 + 1
                        const end = start + 9
                        return page >= start && page <= end
                      })
                      .map((page) => (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ))}

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Suivant
                    </Button>
                  </div>
                </div>
        </div>
      )}
    </div>
  )
}
