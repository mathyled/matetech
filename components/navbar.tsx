"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import logo from "../public/images/logo.png"

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <nav
        className="section-container flex items-center justify-between py-3 md:py-4"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src={logo}
            alt="Logo de matetech"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-bold text-foreground md:text-xl">
            matetech
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-3 border-l border-border/50 pl-6">
            <a
              href="https://www.instagram.com/matetechok/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Button asChild size="sm" className="font-semibold">
              <a href="#contacto">Pedir propuesta</a>
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-3 w-full font-semibold">
              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                Pedir propuesta
              </a>
            </Button>
            <a
              href="https://www.instagram.com/matetechok/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
