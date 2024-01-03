import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "_flex _h-10 _w-full _rounded-md _border _border-slate-200 _bg-white _px-3 _py-2 _text-sm _ring-offset-white file:_border-0 file:_bg-transparent file:_text-sm file:_font-medium placeholder:_text-slate-500 focus-visible:_outline-none focus-visible:_ring-2 focus-visible:_ring-slate-950 focus-visible:_ring-offset-2 disabled:_cursor-not-allowed disabled:_opacity-50 dark:_border-slate-800 dark:_bg-slate-950 dark:_ring-offset-slate-950 dark:placeholder:_text-slate-400 dark:focus-visible:_ring-slate-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
