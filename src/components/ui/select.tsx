import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectContextType {
  value: string
  onChange: (val: string) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  placeholder?: string
}

const SelectContext = React.createContext<SelectContextType | null>(null)

export function Select({
  children,
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  required,
}: {
  children: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  required?: boolean
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [isOpen, setIsOpen] = React.useState(false)

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const onChange = (val: string) => {
    if (!isControlled) {
      setInternalValue(val)
    }
    if (onValueChange) {
      onValueChange(val)
    }
    setIsOpen(false)
  }

  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <SelectContext.Provider value={{ value, onChange, isOpen, setIsOpen }}>
      <div ref={containerRef} className="relative w-full">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null

  return (
    <button
      type="button"
      onClick={() => ctx.setIsOpen(!ctx.isOpen)}
      className={cn(
        "flex h-11 w-full items-center justify-between rounded-sm border border-white/15 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-100 focus:outline-none focus:border-white transition-colors",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 text-zinc-400" />
    </button>
  )
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null
  return <span>{ctx.value || placeholder || "Select..."}</span>
}

export function SelectContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(SelectContext)
  if (!ctx || !ctx.isOpen) return null

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-sm border border-white/15 bg-zinc-900 py-1 shadow-xl animate-fadeIn",
        className
      )}
    >
      {children}
    </div>
  )
}

export function SelectItem({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(SelectContext)
  if (!ctx) return null

  const isSelected = ctx.value === value

  return (
    <div
      onClick={() => ctx.onChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center justify-between px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 hover:text-white transition-colors",
        isSelected && "bg-white/10 text-white font-semibold",
        className
      )}
    >
      <span>{children}</span>
      {isSelected && <Check className="h-4 w-4 text-white" />}
    </div>
  )
}

export const SelectGroup = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const SelectLabel = ({ children }: { children: React.ReactNode }) => <div className="px-4 py-1 text-xs font-mono text-zinc-400">{children}</div>
export const SelectSeparator = () => <div className="my-1 h-px bg-white/10" />
