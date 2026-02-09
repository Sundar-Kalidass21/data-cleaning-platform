export function Header() {
  return (
    <header className="h-14 border-b bg-white px-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="font-semibold text-gray-900">
          Data Platform
        </span>

        <input
          type="text"
          placeholder="Search files, jobs..."
          className="hidden md:block w-64 rounded-md border px-3 py-1.5 text-sm
                     focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="rounded-md bg-black px-3 py-1.5 text-sm text-white">
          New Upload
        </button>

        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
          U
        </div>
      </div>
    </header>
  )
}
