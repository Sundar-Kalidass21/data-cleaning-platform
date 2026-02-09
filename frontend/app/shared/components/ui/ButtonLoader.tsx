import { Loader } from "./Loader"

export function ButtonLoader({ label }: { label?: string }) {
  return (
    <span className="flex items-center justify-center gap-2">
      <Loader size="sm" />
      {label && <span>{label}</span>}
    </span>
  )
}
