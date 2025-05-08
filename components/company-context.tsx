"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type CompanyContextType = {
  selectedCompany: string
  setSelectedCompany: (company: string) => void
  companyName: string
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined)

// Mettre à jour la liste des entreprises dans le contexte
const companyMap: Record<string, string> = {
  MCD: "McDonald's",
  YUM: "Yum! Brands",
  WEN: "Wendy's",
  PZZA: "Papa John's",
  QSR: "Restaurant Brands International",
  DNKN: "Dunkin' Brands",
  SBUX: "Starbucks",
}

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState("MCD")

  const value = {
    selectedCompany,
    setSelectedCompany,
    companyName: companyMap[selectedCompany] || "McDonald's",
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
