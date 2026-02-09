"use client"

import { useEffect } from "react"
import { Loader } from "./Loader"

type BackdropLoaderProps = {
  message?: string
}

export function BackdropLoader({ message }: BackdropLoaderProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex flex-col items-center justify-center
        bg-zinc-900/20
        backdrop-blur-md
      "
    >
      <Loader size="lg" />

      {message && (
        <p className="mt-4 text-sm text-zinc-700">
          {message}
        </p>
      )}
    </div>
  )
}
