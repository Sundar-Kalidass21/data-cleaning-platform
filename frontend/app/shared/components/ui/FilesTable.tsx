import { StatusBadge } from "./StatusBadge"

const files = [
  {
    name: "sales_data.csv",
    type: "CSV",
    status: "Completed",
  },
  {
    name: "customers_raw.csv",
    type: "CSV",
    status: "Processing",
  },
  {
    name: "inventory.csv",
    type: "CSV",
    status: "Pending",
  },
]

export function FilesTable() {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">File Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => (
            <tr key={file.name} className="border-t hover:bg-zinc-50">
              <td className="px-4 py-2 font-medium">
                {file.name}
              </td>
              <td className="px-4 py-2">{file.type}</td>
              <td className="px-4 py-2">
                <StatusBadge status={file.status} />
              </td>
              <td className="px-4 py-2">
                <button className="text-black underline">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
