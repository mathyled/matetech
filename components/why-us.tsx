import { Zap, Eye, KeyRound } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

const values = [
  {
    icon: Zap,
    title: "Entregamos rápido",
    description:
      "Tu proyecto en semanas, no en meses. Usamos stacks modernos para iterar sin perder calidad.",
  },
  {
    icon: Eye,
    title: "Cero sorpresas",
    description:
      "Presupuesto cerrado desde el día uno. Te mostramos avances reales cada semana.",
  },
  {
    icon: KeyRound,
    title: "Vos tenés el control",
    description:
      "El software es tuyo. Te capacitamos para que manejes tu sistema sin depender de nadie.",
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" className="section-padding">
      <div className="section-container">
        <SectionHeader
          eyebrow="Por qué matetech"
          title={
            <>
              Resultados reales,{" "}
              <span className="text-primary">sin vueltas</span>
            </>
          }
          description="Cada proyecto se diseña para resolver un problema concreto de tu negocio."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 150}>
              <Card className="card-elevated group h-full bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light/40 text-primary-hover transition-colors group-hover:bg-primary-light/60">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground md:text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
