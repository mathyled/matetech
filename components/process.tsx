import { Search, FileText, Code2, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos tu negocio y definimos la solución que realmente te va a hacer crecer. Sin humo.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Desarrollo visible",
    description:
      "Avances semanales en video. Ves cómo toma forma tu proyecto.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Capacitación",
    description:
      "Masterclass incluida para que vos y tu equipo dominen el sistema desde el día uno.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Evolución continua",
    description:
      "El lanzamiento es el arranque. Seguimos a tu lado con mantenimiento y nuevas funciones.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-primary-light/15">
      <div className="section-container">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title={
            <>
              Tu socio tecnológico,{" "}
              <span className="text-primary">de punta a punta</span>
            </>
          }
          description="Un proceso claro en 4 pasos. Sabés exactamente qué esperar en cada etapa."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 120}>
              <Card className="card-elevated group relative h-full overflow-hidden bg-card">
                <span
                  className="pointer-events-none absolute -top-3 -right-1 font-display text-7xl font-bold text-primary/[0.05] transition-colors group-hover:text-primary/[0.09]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light/40 text-primary-hover transition-colors group-hover:bg-primary-light/60">
                      <step.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="font-display text-[10px] font-bold uppercase tracking-widest text-primary">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-foreground md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
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
