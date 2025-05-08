import type React from "react"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { CompanyProvider } from "@/components/company-context"
import { SidebarProvider } from "@/components/sidebar-context"

export const metadata = {
  title: "Green Finance - Analyse financière",
  description: "Plateforme d'analyse financière pour les investisseurs",
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = "light";
  return (
    <html lang="fr" className={theme} style={{ colorScheme: "light" }}>
      <body className="bg-gray-50">
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
          <CompanyProvider>
            <SidebarProvider>
              <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </SidebarProvider>
          </CompanyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
