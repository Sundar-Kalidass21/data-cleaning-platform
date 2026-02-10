export function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      
      {/* Left: Brand */}
      <div className="flex items-center gap-2 font-semibold text-indigo-600">
        <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
          D
        </div>
        DataClean
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-xl rounded-md bg-zinc-100 px-4 py-2 text-sm
                     focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-sm text-gray-600">
          Sundar
        </span>

        <div className="h-8 w-8 rounded-full bg-orange-400 text-white
                        flex items-center justify-center text-xs cursor-pointer">
          S
        </div>
      </div>
    </header>
  )
}
