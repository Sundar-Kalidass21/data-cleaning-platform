"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/dashboard")

  if (!isDashboard) {
    // Auth pages
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-4">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-[#f5f6fb]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        {/* Content wrapper (important for same look) */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-[1400px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
