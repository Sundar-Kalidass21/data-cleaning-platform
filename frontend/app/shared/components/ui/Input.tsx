import { forwardRef } from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full rounded-lg border px-4 py-2 text-black
          focus:outline-none focus:ring-2
          ${error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-black"}
          ${className}
        `}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"
