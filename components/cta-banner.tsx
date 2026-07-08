import { ArrowRight, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-card to-primary-light/20 px-6 py-12 text-center md:px-16 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-brand opacity-30" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
                <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Primera consulta 100% bonificada
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                <span className="text-balance">
                  ¿Listo para dar el{" "}
                  <span className="text-accent">siguiente paso</span>?
                </span>
              </h2>

              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Contanos tu idea y te respondemos en menos de 24 horas con un
                plan de acción y presupuesto cerrado.
              </p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  asChild
                  variant="marketing"
                  size="lg"
                  className="h-12 gap-2 rounded-lg px-8 text-base font-semibold"
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
                  className="h-12 rounded-lg border-primary/30 px-8 text-base hover:bg-primary-light/30"
                >
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
