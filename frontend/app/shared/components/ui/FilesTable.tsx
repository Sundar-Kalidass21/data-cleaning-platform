"use client"

import { useState } from "react"

/* ------------------ MOCK DATA ------------------ */

const files = [
  {
    id: 1,
    name: "sales_data.csv",
    type: "CSV",
    status: "Completed",
    aiStatus: "NotStarted",
  },
  {
    id: 2,
    name: "customers_raw.csv",
    type: "CSV",
    status: "Completed",
    aiStatus: "InReview",
  },
  {
    id: 3,
    name: "inventory.csv",
    type: "CSV",
    status: "Completed",
    aiStatus: "NeedsChanges",
  },
]

/* ------------------ MAIN COMPONENT ------------------ */

export function FilesTable() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(files)

  const startAIProcess = (id: number) => {
    setData((prev) =>
      prev.map((file) =>
        file.id === id
          ? { ...file, aiStatus: "InReview" }
          : file
      )
    )
  }

  return (
    <div className="bg-white rounded-xl border">
      {/* Top Bar */}
      <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
        <input
          placeholder="Search files..."
          className="w-full md:w-64 rounded-md border px-3 py-2 text-sm
                     focus:outline-none focus:ring-1 focus:ring-black"
        />

        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-black px-4 py-2 text-sm text-white
                     hover:bg-zinc-900 transition"
        >
          + Add File
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full text-sm">
          <thead className="border-t border-b bg-zinc-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">File Name</th>
              <th className="py-3 text-left">Type</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">AI Process</th>
              <th className="px-6 py-3 text-right">Download</th>
            </tr>
          </thead>

          <tbody>
            {data.map((file) => (
              <tr
                key={file.id}
                className="border-b last:border-0 hover:bg-zinc-50"
              >
                <td className="px-6 py-4 font-medium">{file.name}</td>
                <td className="py-4 text-gray-600">{file.type}</td>

                <td className="py-4">
                  <StatusBadge status={file.status} />
                </td>

                <td className="py-4">
                  <AIProcessCell
                    status={file.aiStatus}
                    onStart={() => startAIProcess(file.id)}
                  />
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="text-sm text-black hover:underline">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y">
        {data.map((file) => (
          <div key={file.id} className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">{file.name}</p>
              <StatusBadge status={file.status} />
            </div>

            <p className="text-xs text-gray-500">Type: {file.type}</p>

            <AIProcessCell
              status={file.aiStatus}
              onStart={() => startAIProcess(file.id)}
            />

            <button className="text-sm text-black underline">
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Add File Modal */}
      {open && <AddFileModal onClose={() => setOpen(false)} />}
    </div>
  )
}

/* ------------------ AI PROCESS CELL ------------------ */

function AIProcessCell({
  status,
  onStart,
}: {
  status: string
  onStart: () => void
}) {
  if (status === "NotStarted") {
    return (
      <button
        onClick={onStart}
        className="rounded-md border px-3 py-1 text-xs hover:bg-zinc-100"
      >
        Start AI Process
      </button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <AIBadge status={status} />
      <button className="text-xs text-indigo-600 hover:underline">
        View Feedback
      </button>
    </div>
  )
}

/* ------------------ BADGES ------------------ */

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Failed: "bg-red-100 text-red-700",
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}

function AIBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    InReview: "bg-blue-100 text-blue-700",
    Approved: "bg-green-100 text-green-700",
    NeedsChanges: "bg-orange-100 text-orange-700",
  }

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status === "InReview" && "In Review"}
      {status === "Approved" && "Approved"}
      {status === "NeedsChanges" && "Needs Changes"}
    </span>
  )
}

/* ------------------ ADD FILE MODAL (unchanged) ------------------ */

function AddFileModal({ onClose }: { onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return

    if (!selected.name.endsWith(".csv")) {
      setError("Only CSV files are allowed")
      setFile(null)
      return
    }

    setError("")
    setFile(selected)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Upload CSV File</h2>

        <div className="border-2 border-dashed rounded-lg p-4 text-center">
          <input
            type="file"
            accept=".csv"
            onChange={handleChange}
            className="block w-full text-sm"
          />

          {file && <p className="mt-2 text-xs text-green-600">{file.name}</p>}
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-2 text-sm">
            Cancel
          </button>
          <button
            disabled={!file}
            className={`px-4 py-2 text-sm text-white rounded-md
              ${file ? "bg-black" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}
