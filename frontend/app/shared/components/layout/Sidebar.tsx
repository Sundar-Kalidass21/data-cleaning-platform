import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-60 border-r bg-white hidden md:flex flex-col">
      <div className="px-5 py-4 text-sm font-semibold text-gray-900">
        Workspace
      </div>

      <nav className="px-3 space-y-1 text-sm">
        {[
          ["Dashboard", "/dashboard"],
          ["Uploads", "/dashboard/uploads"],
          ["Jobs", "/dashboard/jobs"],
          ["Settings", "/dashboard/settings"],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="block rounded-md px-3 py-2 hover:bg-zinc-100"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-4 text-xs text-gray-500">
        © Data Platform
      </div>
    </aside>
  )
}
