import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border text-black bg-white relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 z-0 before:-z-10 hover:text-white dark:before:bg-accent/50",
        destructive:
          "bg-destructive text-white border relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 z-0 before:-z-10 hover:text-destructive",
        outline:
          "bg-black text-white border relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 z-0 before:-z-10 hover:text-black",
        secondary:
          "bg-secondary text-secondary-foreground relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 z-0 before:-z-10 hover:text-secondary",
        ghost:
          "relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-accent before:transition-all before:duration-300 before:ease-in-out before:-translate-y-full hover:before:translate-y-0 z-0 before:-z-10 hover:text-accent-foreground dark:before:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        // ... existing code ...
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 p-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
