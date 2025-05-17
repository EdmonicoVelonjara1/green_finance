"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type CompanyContextType = {
  selectedCompany: string
  setSelectedCompany: (company: string) => void
  companyName: string
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined)

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState("MCD")
  const [companyMap, setCompanyMap] = useState<Record<string, string>>()

    useEffect(() => {
      async function fetchCompanies() {
        try {
          const response = await fetch("/api/get-ticker")
          if (!response.ok) {
            throw new Error("Failed to fetch companies")
          }
          const data = await response.json()
          const map: Record<string, string> = Object.fromEntries(
            Object.entries(data.cmp)
          )
          setCompanyMap(map)

        } catch (err) {
          console.error("Error fetching companies:", err)
        } 
        
      }
  
      fetchCompanies()
    }, [])
  console.log("SelecteD", selectedCompany);
  
  const value = {
    selectedCompany,
    setSelectedCompany,
    companyName: companyMap?.[selectedCompany] ?? "McDonald's",
  }

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
}

export function useCompany() {
  const context = useContext(CompanyContext)
  if (context === undefined) {
    throw new Error("useCompany must be used within a CompanyProvider")
  }
  return context
}