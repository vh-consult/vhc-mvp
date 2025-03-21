import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex h-[80px] w-full rounded-md border 
          border-slate-200 bg-inherit px-3 py-2 text-sm
           ring-offset-white placeholder:text-slate-950
            focus-visible:outline-none focus-visible:ring-0
             disabled:cursor-not-allowed disabled:opacity-50 
             dark:border-slate-800 dark:bg-slate-950 
             dark:ring-offset-slate-950 dark:placeholder:text-slate-400 
             dark:focus-visible:ring-slate-300`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }