"use client"

import { Home, LayoutGrid, HelpCircle, Instagram } from "lucide-react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navItems = [
  {
    label: "Inicio",
    href: "#",
    icon: Home,
  },
  {
    label: "Demos",
    href: "#demos",
    icon: LayoutGrid,
  },
  {
    label: "FAQ",
    href: "#faq",
    icon: HelpCircle,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/matetechok/",
    icon: Instagram,
    isExternal: true,
  }
]

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => !item.isExternal)
        .map((item) => item.href.replace("#", ""))
        .filter((id) => id !== "")

      let current = ""
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 300 && rect.bottom >= 100) {
            current = id
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("")
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
    <div className="fixed bottom-8 left-1/2 z-[100] flex w-full -translate-x-1/2 justify-center px-6 md:hidden">
      <nav className="relative flex items-center gap-1 rounded-2xl border border-white/10 bg-black/60 p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] backdrop-blur-2xl">
        {navItems.map((item) => {
          const isActive =
            !item.isExternal && (
              (item.href === "#" && activeSection === "") ||
              (item.href !== "#" && activeSection === item.href.replace("#", ""))
            )

          return (
            <a
              key={item.href}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-xl px-4 py-2.5 transition-all duration-300",
                isActive ? "text-primary" : "text-white/40 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute inset-0 -z-10 rounded-xl bg-white/5 blur-sm" />
              )}

              <item.icon className={cn(
                "h-5 w-5 transition-all duration-300",
                isActive ? "scale-110" : "scale-100 group-hover:scale-110"
              )} />

              <span className={cn(
                "mt-1 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300",
                isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              )}>
                {item.label}
              </span>

              {isActive && (
                <div className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary" />
              )}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
