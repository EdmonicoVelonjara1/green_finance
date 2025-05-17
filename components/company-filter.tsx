"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCompany } from "@/components/company-context"
import { useEffect, useState } from "react"
import { Company } from "@/app/api/get-ticker/route"

export function CompanyFilter() {
  const { selectedCompany, setSelectedCompany } = useCompany()
    const [isLoading, setIsLoading] = useState(true)
    const [companies, setCompanies] = useState<Company[]>([])
    
      useEffect(() => {
        async function fetchCompanies() {
          try {
            setIsLoading(true)
            const response = await fetch("/api/get-ticker")
            if (!response.ok) {
              throw new Error("Failed to fetch companies")
            }
            const data = await response.json()
            const companyList: Company[] = Object.entries(data.cmp).map(([ticker, name]) => ({
              value: ticker,
              label: `${name} (${ticker})`,
            }))
            console.log("List", companyList)
            setCompanies(companyList)
          } catch (err) {
            console.error("Error fetching companies:", err)
            setCompanies([])
          } finally {
            setIsLoading(false)
          }
        }
    
        fetchCompanies()
      }, [])

  return (
    <Select value={selectedCompany} onValueChange={setSelectedCompany}>
      <SelectTrigger className="w-40 text-xs h-8 border-green-200 bg-white">
        <SelectValue placeholder="Sélectionner une entreprise" />
      </SelectTrigger>
      <SelectContent>
        {companies.map((company) => (
          <SelectItem key={company.value} value={company.value} className="text-xs">
            {company.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
