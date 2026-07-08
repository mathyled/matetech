"use client"

import { Home, LayoutGrid, MessageCircle, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Demos", href: "#demos", icon: LayoutGrid },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contacto", href: "#contacto", icon: MessageCircle },
]

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter((id) => id !== "")

      let current = ""
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 280 && rect.bottom >= 80) {
            current = id
          }
        }
      }

      if (window.scrollY < 80) {
        setActiveSection("inicio")
      } else {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 px-4 md:hidden">
      <nav
        className="flex items-center justify-around rounded-2xl border border-border bg-surface/95 p-1.5 shadow-lg backdrop-blur-xl"
        aria-label="Navegación móvil"
      >
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "")
          const isActive = activeSection === sectionId

          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center rounded-xl px-3 py-2 transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-transform",
                  isActive && "scale-110"
                )}
                aria-hidden="true"
              />
              <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wide">
                {item.label}
              </span>
              {isActive && (
                <span
                  className="absolute -bottom-0.5 h-0.5 w-4 rounded-full bg-primary"
                  aria-hidden="true"
                />
              )}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
