import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col bg-[#eef0f7] border-r px-4 py-6">
      
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 font-semibold text-indigo-600">
        <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
          D
        </div>
        DataClean
      </div>

      {/* Menu */}
      <nav className="space-y-1 text-sm">
        {[
          "Dashboard",
          "Uploads",
          "Jobs",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            className={`px-3 py-2 rounded-lg cursor-pointer
              ${item === "Dashboard"
                ? "bg-indigo-100 text-indigo-700 font-medium"
                : "text-gray-600 hover:bg-white"}`}
          >
            {item}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 text-xs text-gray-500">
        © 2026 DataClean
      </div>
    </aside>
  )
}
