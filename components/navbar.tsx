"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../public/images/logo.png"

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="matetech Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-display text-xl font-bold text-foreground">
            matetech
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contacto">
              Charlemos
            </a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href="#contacto">
                Charlemos
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
