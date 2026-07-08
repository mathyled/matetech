"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHRASES = [
  "una web a medida.",
  "automatizaciones.",
  "estrategias de contenido.",
  "campañas publicitarias.",
]

function AnimatedText() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const phrase = PHRASES[currentPhrase]

    if (!isDeleting && displayedText === phrase) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentPhrase((prev) => (prev + 1) % PHRASES.length)
      return
    }

    const speed = isDeleting ? 35 : 75

    timeoutRef.current = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(phrase.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(phrase.substring(0, displayedText.length + 1))
      }
    }, speed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayedText, isDeleting, currentPhrase])

  return (
    <span className="relative inline-block text-primary" aria-live="polite">
      <span
        className="animate-glow-pulse"
        style={{
          textShadow:
            "0 0 8px hsl(var(--primary-light) / 0.6)",
        }}
      >
        {displayedText}
      </span>
      <span
        className={`ml-0.5 inline-block w-[3px] translate-y-[2px] bg-primary transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}
        style={{ height: "0.85em" }}
        aria-hidden="true"
      />
    </span>
  )
}

const TRUST_ITEMS = [
  "Entrega en semanas, no meses",
  "Precio cerrado desde el día 1",
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-brand opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-glow-brand" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary transition-all duration-700 sm:text-sm ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Agencia de software y marketing · Argentina
        </div>

        <h1
          className={`font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground transition-all duration-700 delay-100 sm:text-5xl md:text-6xl lg:text-7xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span className="text-balance">
            Tu negocio merece{" "}
            <br className="hidden sm:inline" />
            <AnimatedText />
          </span>
        </h1>

   

        <div
          className={`mt-10 flex flex-col items-stretch gap-3 transition-all duration-700 delay-500 sm:flex-row sm:items-center sm:justify-center sm:gap-4 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 rounded-lg px-8 text-base font-semibold shadow-brand-sm hover:shadow-brand"
          >
            <a href="#contacto">
              Quiero mi propuesta gratis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 gap-2 rounded-lg border-primary/30 px-8 text-base font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
          >
            <a href="#servicios">Ver servicios y precios</a>
          </Button>
        </div>

        <ul
          className={`mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground transition-all duration-700 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          aria-label="Beneficios clave"
        >
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
