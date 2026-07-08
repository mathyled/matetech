import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { value: "1–2 sem", label: "Landings express" },
  { value: "4–8 sem", label: "Sistemas a medida" },
  { value: "100%", label: "Control total" },
  { value: "<24hs", label: "Tiempo de respuesta" },
]

const testimonials = [
  {
    quote:
      "Necesitábamos un sistema de reservas urgente. En dos semanas ya estaba funcionando y nos ahorra horas cada día.",
    author: "Dueño de gimnasio",
    role: "Cliente — Sistema de turnos",
  },
  {
    quote:
      "Lo que más valoré fue la transparencia: sabía exactamente cuánto iba a pagar y qué iba a recibir. Sin sorpresas.",
    author: "Emprendedora gastronómica",
    role: "Cliente — Menú digital + WhatsApp",
  },
]

export function SocialProof() {
  return (
    <section id="resultados" className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Resultados"
          title={
            <>
              Números que{" "}
              <span className="text-primary">hablan solos</span>
            </>
          }
        />

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <div className="rounded-xl border border-border/50 bg-card p-5 text-center md:p-6">
                <p className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.author} delay={index * 150}>
              <Card className="card-elevated h-full bg-card">
                <CardContent className="p-6 md:p-8">
                  <Quote
                    className="mb-4 h-5 w-5 text-primary/60"
                    aria-hidden="true"
                  />
                  <blockquote className="text-sm leading-relaxed text-foreground md:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-4 border-t border-border/40 pt-4">
                    <p className="text-sm font-medium text-foreground">
                      {item.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </footer>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
