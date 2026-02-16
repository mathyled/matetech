import { Zap, Eye, KeyRound } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    icon: Zap,
    title: "Velocidad",
    description:
      "Entregamos en semanas, no en meses. Usamos tecnologia de punta para que tu proyecto vuele.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description:
      "Sabes cuanto vas a pagar desde el inicio. Avances regulares para que veas como va quedando.",
  },
  {
    icon: KeyRound,
    title: "Autonomia",
    description:
      "Te damos las herramientas para que te manejes solo.",
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Por que matetech
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              <span className="text-balance">
                Valores que nos{" "}
                <span className="text-primary">definen</span>
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 250}>
              <Card className="group h-full border-border/50 bg-card transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
