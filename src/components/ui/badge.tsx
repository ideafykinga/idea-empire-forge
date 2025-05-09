
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        purple: 
          "border-transparent bg-ideify-purple/20 text-ideify-purple hover:bg-ideify-purple/30",
        blue: 
          "border-transparent bg-blue-500/20 text-blue-600 hover:bg-blue-500/30",
        amber: 
          "border-transparent bg-amber-500/20 text-amber-600 hover:bg-amber-500/30",
        emerald: 
          "border-transparent bg-emerald-500/20 text-emerald-600 hover:bg-emerald-500/30",
        glass: 
          "border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
