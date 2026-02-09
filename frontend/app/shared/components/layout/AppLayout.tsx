"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"


export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/dashboard")

  if (!isDashboard) {
    // Auth pages → centered content
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        {children}
      </div>
    )
  }

  // Dashboard pages → sidebar + header
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
