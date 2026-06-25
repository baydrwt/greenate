import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 mt-7 mx-auto capitalize py-5 md:py-7 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm md:text-xl font-medium font-inter whitespace-nowrap transition-all duration-500 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#F0EADF] md:w-[230px] text-black font-light after:content-['⟶'] ps-[40px] hover:ps-[0px] after:translate-x-[20px] hover:after:translate-x-[10px] after:opacity-0 hover:after:opacity-100 after:ease-in-out after:duration-500",
        cart:
          "rounded-lg bg-white px-3 w-[200px] font-normal",
        buy_now:
          "rounded-lg bg-[#133630] text-white px-3 w-[200px] font-normal",
        secondary:
          "bg-[#133630] text-white w-[230px] shadow-[1px_3px_7px_0px_rgba(19,54,48,0.2),4px_12px_13px_0px_rgba(19,54,48,0.17),8px_28px_17px_0px_rgba(19,54,48,0.1),14px_49px_20px_0px_rgba(19,54,48,0.03),22px_77px_22px_0px_rgba(19,54,48,0)] font-light after:content-['⟶'] ps-[40px] hover:ps-[0px] after:translate-x-[20px] hover:after:translate-x-[10px] after:opacity-0 hover:after:opacity-100 after:ease-in-out after:duration-500",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        active:" bg-[#67874e] text-white"
      },
      size: {
        default:
          "h-12 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
