import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"

interface SectionHeaderProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
  className?: string
  delay?: number
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "text-center",
          align === "left" && "text-left",
          className
        )}
      >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {description && (
          <p
            className={cn(
              "section-description",
              align === "left" && "mx-0"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
