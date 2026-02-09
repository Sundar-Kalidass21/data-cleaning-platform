type ToastProps = {
  message: string
  type: "success" | "error"
}

export function Toast({ message, type }: ToastProps) {
  return (
    <div
      className={`
        fixed top-6 right-6 z-50
        px-4 py-3 rounded-lg shadow-lg text-white
        transition-all
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  )
}
