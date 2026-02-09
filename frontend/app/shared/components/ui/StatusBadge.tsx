export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  }

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  )
}
