"use client"

import * as React from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  type?: "success" | "error" | "info" | "warning"
  duration?: number
  onClose?: () => void
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ id, title, description, type = "info", onClose, ...props }, ref) => {
    const icons = {
      success: CheckCircle,
      error: AlertCircle,
      info: Info,
      warning: AlertCircle,
    }

    const Icon = icons[type]

    const variants = {
      success:
        "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-200",
      error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
      info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
      warning:
        "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full items-center space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
          variants[type],
        )}
        {...props}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <div className="flex-1 space-y-1">
          {title && <div className="text-sm font-medium">{title}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  },
)
Toast.displayName = "Toast"
