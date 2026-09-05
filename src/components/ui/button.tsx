import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-white text-zinc-950 hover:bg-zinc-200 font-bold shadow-md",
      destructive: "bg-red-600 text-white hover:bg-red-700 font-bold",
      outline: "border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white",
      secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
      ghost: "hover:bg-white/10 hover:text-white text-zinc-300",
      link: "text-white underline-offset-4 hover:underline",
    }[variant]

    const sizeClasses = {
      default: "h-11 px-6 py-2.5 text-sm",
      sm: "h-9 rounded-sm px-3 text-xs",
      lg: "h-12 rounded-sm px-8 text-base",
      icon: "h-10 w-10",
    }[size]

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variantClasses,
          sizeClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
