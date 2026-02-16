"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHRASES = ["tecnologia real.", "automatizacion.", "software a medida."]

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
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentPhrase((prev) => (prev + 1) % PHRASES.length)
      return
    }

    const speed = isDeleting ? 40 : 80

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
    <span className="relative inline-block text-primary">
      <span
        className="animate-glow-pulse"
        style={{
          textShadow:
            "0 0 10px hsl(74 64% 50% / 0.4), 0 0 30px hsl(74 64% 50% / 0.15), 0 0 60px hsl(74 64% 50% / 0.05)",
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

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background grid effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(74 64% 50% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(74 64% 50% / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <h1
          className={`font-display text-4xl font-bold leading-tight tracking-tight text-foreground transition-all duration-700 delay-200 sm:text-5xl md:text-6xl lg:text-7xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span className="text-balance">
            Transformamos tu negocio con{" "}
            <br className="hidden sm:inline" />
            <AnimatedText />
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-400 md:text-xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Desarrollo de Software y Automatizaciones. Sin vueltas, precios claros y procesos transparentes.
        </p>

        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all duration-700 delay-500 sm:flex-row sm:justify-center ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <Button asChild size="lg" className="gap-2 text-base">
            <a href="#servicios">
              Ver Planes y Precios
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 text-base text-primary hover:border-primary hover:bg-primary/5"
          >
            <a href="#contacto">
              <CalendarCheck className="h-4 w-4" />
              Primera consulta 100% bonificada
            </a>
          </Button>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground transition-all duration-700 delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Automatiza
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Personaliza
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            100% Codigo Tuyo
          </span>
        </div>
      </div>
    </section>
  )
}
