type CardProps = {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-2xl
        bg-white
        p-6
        sm:p-8
        shadow-xl
      "
    >
      {children}
    </div>
  )
}
