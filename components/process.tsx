import { Search, FileText, Code2, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostico & Estrategia",
    description:
      "No somos toma-pedidos. Analizamos tu negocio a fondo y armamos la solucion que realmente te va a hacer crecer.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Desarrollo Transparente",
    description:
      "Nada de cajas negras. Te enviamos avances en video para que veas como va tomando forma tu proyecto.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Masterclass & Despegue",
    description:
      "No te dejamos solo. Incluimos una capacitacion a medida para que vos y tu equipo le agarren la mano al toque.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Evolucion Continua",
    description:
      "El lanzamiento es solo el arranque. Seguimos a tu lado para mantenimiento y nuevas funcionalidades.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Nuestro Proceso
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              <span className="text-balance">
                Mas que codigo, somos tu{" "}
                <span className="text-primary">Socio Tecnologico</span>
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Te acompanamos desde la idea hasta que le agarres la mano a tu nuevo sistema.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 200}>
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                {/* Step number watermark */}
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl font-bold text-primary/[0.04] transition-colors group-hover:text-primary/[0.08]">
                  {step.number}
                </span>

                <CardContent className="relative p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
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
