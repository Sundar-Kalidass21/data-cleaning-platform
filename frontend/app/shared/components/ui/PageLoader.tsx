import { Loader } from "./Loader"

export function PageLoader({ message }: { message?: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <Loader size="lg" />
      {message && (
        <p className="text-sm text-gray-600">
          {message}
        </p>
      )}
    </div>
  )
}
