"use client"

import { useState } from "react"

type AddFileModalProps = {
  onClose: () => void
}

export function AddFileModal({ onClose }: AddFileModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          Upload CSV File
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Choose a CSV file to upload and process.
        </p>

        <div className="border-2 border-dashed rounded-lg p-4 text-center">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:bg-black file:text-white
                       hover:file:bg-zinc-900"
          />

          {file && (
            <p className="mt-2 text-xs text-green-600">
              Selected: {file.name}
            </p>
          )}

          {error && (
            <p className="mt-2 text-xs text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md border px-4 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            disabled={!file}
            className={`rounded-md px-4 py-2 text-sm text-white
              ${file
                ? "bg-black hover:bg-zinc-900"
                : "bg-gray-300 cursor-not-allowed"}`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}
