import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "_inline-flex _items-center _justify-center _whitespace-nowrap _rounded-md _text-sm _font-medium _ring-offset-white _transition-colors focus-visible:_outline-none focus-visible:_ring-2 focus-visible:_ring-slate-950 focus-visible:_ring-offset-2 disabled:_pointer-events-none disabled:_opacity-50 dark:_ring-offset-slate-950 dark:focus-visible:_ring-slate-300",
  {
    variants: {
      variant: {
        default: "_bg-slate-900 _text-slate-50 hover:_bg-slate-900/90 dark:_bg-slate-50 dark:_text-slate-900 dark:hover:_bg-slate-50/90",
        destructive:
          "_bg-red-500 _text-slate-50 hover:_bg-red-500/90 dark:_bg-red-900 dark:_text-slate-50 dark:hover:_bg-red-900/90",
        outline:
          "_border _border-slate-200 _bg-white hover:_bg-slate-100 hover:_text-slate-900 dark:_border-slate-800 dark:_bg-slate-950 dark:hover:_bg-slate-800 dark:hover:_text-slate-50",
        secondary:
          "_bg-slate-100 _text-slate-900 hover:_bg-slate-100/80 dark:_bg-slate-800 dark:_text-slate-50 dark:hover:_bg-slate-800/80",
        ghost: "hover:_bg-slate-100 hover:_text-slate-900 dark:hover:_bg-slate-800 dark:hover:_text-slate-50",
        link: "_text-slate-900 _underline-offset-4 hover:_underline dark:_text-slate-50",
      },
      size: {
        default: "_h-10 _px-4 _py-2",
        sm: "_h-9 _rounded-md _px-3",
        lg: "_h-11 _rounded-md _px-8",
        icon: "_h-10 _w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
