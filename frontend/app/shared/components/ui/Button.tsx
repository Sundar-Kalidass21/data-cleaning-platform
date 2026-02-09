type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`
        w-full rounded-lg bg-black py-2.5 font-medium text-white
        hover:bg-gray-900 transition
        disabled:opacity-60
        ${className}
      `}
      {...props}
    />
  )
}
