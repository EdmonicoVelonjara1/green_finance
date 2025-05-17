"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Home,
  PieChart,
  Settings,
  TrendingUp,
  Calendar,

} from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCompany } from "@/components/company-context"
import { useSidebarToggle } from "@/components/sidebar-context"
import { SidebarToggle } from "@/components/sidebar-toggle"
import { Company } from "@/app/api/get-ticker/route"

export function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState({
    "tableau-de-bord": true,
    "analyse-fondamentale": false,
    statistiques: false,
  })
  const { selectedCompany, setSelectedCompany } = useCompany()
  const { sidebarVisible } = useSidebarToggle()
  const [companies, setCompanies] = useState<Company[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch companies from API
  useEffect(() => {
    async function fetchCompanies() {
      try {
        setIsLoading(true)
        const response = await fetch("/api/get-ticker")
        if (!response.ok) {
          throw new Error("Failed to fetch companies")
        }
        const data = await response.json()
        // console.log("Fetched companies:", data.cmp)

        const companyList: Company[] = Object.entries(data.cmp).map(([ticker, name]) => ({
          value: ticker,
          label: `${name} (${ticker})`,
        }))
        setCompanies(companyList)
      } catch (err) {
        console.error("Error fetching companies:", err)
        setError("Failed to load companies")
        // Fallback to empty list or hardcoded data if needed
        setCompanies([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchCompanies()
  }, [])

  const toggleMenu = (menu: keyof typeof openMenus) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const menuItems = [
    {
      id: "tableau-de-bord",
      title: "Tableau de bord",
      href: "/dashboard",
      icon: <Home size={16} />,
      hasSubmenu: true,
      submenu: [
        { title: "Analyse technique", href: "/analyse-technique" },
        { title: "Moyennes mobiles", href: "/analyse-technique/moyennes-mobiles" },
        { title: "Indicateurs de tendance", href: "/analyse-technique/indicateurs-tendance" },
        { title: "Oscillateurs", href: "/analyse-technique/oscillateurs" },
      ],
    },
    {
      id: "statistiques",
      title: "Statistiques",
      href: "/statistiques",
      icon: <BarChart3 size={16} />,
      hasSubmenu: true,
      submenu: [],
    },
    {
      title: "Comparaison",
      href: "/comparaison",
      icon: <PieChart size={16} />,
      hasSubmenu: false,
    },
    {
      title: "Prévisions",
      href: "/previsions",
      icon: <TrendingUp size={16} />,
      hasSubmenu: false,
    },
    {
      title: "Données historiques",
      href: "/donnees-historiques",
      icon: <Calendar size={16} />,
      hasSubmenu: false,
    },
    {
      title: "Paramètres",
      href: "/parametres",
      icon: <Settings size={16} />,
      hasSubmenu: false,
    },
  ]

  if (!sidebarVisible) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <SidebarToggle />
      </div>
    )
  }

  return (
    <div className="w-64 h-full flex flex-col bg-white border-r">
      {/* Header */}
      <div className="p-3 border-b flex items-center justify-between bg-green-50">
        <div className="flex items-center gap-3">
          <div className="bg-green-700 text-white p-1.5 rounded">
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 4.5C5 4.22386 5.22386 4 5.5 4H9.5C9.77614 4 10 4.22386 10 4.5V10.5C10 10.7761 9.77614 11 9.5 11H5.5C5.22386 11 5 10.7761 5 10.5V4.5ZM6 5V10H9V5H6ZM2 6.5C2 6.22386 2.22386 6 2.5 6H3.5C3.77614 6 4 6.22386 4 6.5V10.5C4 10.7761 3.77614 11 3.5 11H2.5C2.22386 11 2 10.7761 2 10.5V6.5ZM3 7V10H3V7ZM11 8.5C11 8.22386 11.2239 8 11.5 8H12.5C12.7761 8 13 8.22386 13 8.5V10.5C13 10.7761 12.7761 11 12.5 11H11.5C11.2239 11 11 10.7761 11 10.5V8.5ZM12 9V10H12V9Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <div className="font-medium text-sm text-green-800">Green Finance</div>
          </div>
        </div>
        <SidebarToggle />
      </div>

      {/* Company Selector */}
      <div className="px-3 py-2 border-b bg-green-50">
        <Select value={selectedCompany} onValueChange={setSelectedCompany}>
          <SelectTrigger className="w-full text-ms h-8 border-green-200 bg-white text-green-800">
            <SelectValue placeholder="Sélectionner une entreprise" />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company) => (
              <SelectItem key={company.value} value={company.value} className="text-sm">
                {company.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Platform section */}
      <div className="px-3 py-2 text-ms text-green-700 font-medium bg-green-50">Platform</div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto bg-green-50">
        <nav className="px-1.5">
          {menuItems.map((item) => (
            <div key={item.title} className="mb-0.5">
              <div
                className={cn(
                  "flex items-center px-2 py-1.5 text-sm rounded-md",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-green-800 font-medium bg-green-100"
                    : "text-green-700 hover:bg-green-100",
                )}
              >
                <Link href={item.href} className="flex items-center flex-1">
                  <span className="mr-2 text-green-600">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
                {item.hasSubmenu && (
                  <button className="p-1" onClick={() => item.id && toggleMenu(item.id as keyof typeof openMenus)}>
                    {item.id && openMenus[item.id as keyof typeof openMenus] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                )}
              </div>

              {/* Submenu */}
              {item.hasSubmenu && item.id && openMenus[item.id as keyof typeof openMenus] && (
                <div className="ml-6 mt-0.5 space-y-0.5">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        "block px-2 py-1.5 text-ms rounded-md",
                        pathname === subItem.href
                          ? "text-green-800 font-medium bg-green-100"
                          : "text-green-700 hover:bg-green-100",
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t p-3 bg-green-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-100 text-green-700 w-7 h-7 rounded flex items-center justify-center mr-2 text-ms">
              CN
            </div>
            <div>
              <div className="text-ms font-medium text-green-800">shadcn</div>
              <div className="text-ms text-green-600">m@example.com</div>
            </div>
          </div>
          <button className="p-1 text-green-700">
            <ChevronUp size={14} />
          </button>
        </div>
        <div className="mt-2 text-ms text-green-600">Transfert des données depuis 192.168.1.128...</div>
      </div>
    </div>
  )
}
