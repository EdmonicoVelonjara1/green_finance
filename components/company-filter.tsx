"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCompany } from "@/components/company-context"

export function CompanyFilter() {
  const { selectedCompany, setSelectedCompany } = useCompany()

  // Liste des entreprises de fast-food
  const companies = [
    { value: "MCD", label: "McDonald's (MCD)" },
    { value: "YUM", label: "Yum! Brands (YUM)" },
    { value: "WEN", label: "Wendy's (WEN)" },
    { value: "PZZA", label: "Papa John's (PZZA)" },
    { value: "QSR", label: "Restaurant Brands Int. (QSR)" },
    { value: "DNKN", label: "Dunkin' Brands (DNKN)" },
    { value: "SBUX", label: "Starbucks (SBUX)" },
  ]

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
