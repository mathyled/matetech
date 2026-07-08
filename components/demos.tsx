import Image from "next/image"
import Link from "next/link"
import { Calendar, ShoppingBag, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const demos = [
  {
    title: "Sistema de Reservas",
    description:
      "Turnos automáticos para gimnasios, spas y profesionales. Tus clientes reservan solos, vos ahorrás tiempo.",
    image: "/images/demos/booking.png",
    icon: Calendar,
    tags: ["Calendario", "Automatización", "Pagos"],
    href: "/demos/booking",
  },
  {
    title: "Catálogo WhatsApp",
    description:
      "Menú o catálogo interactivo con pedido directo a WhatsApp. Ideal para gastronomía y retail.",
    image: "/images/demos/catalog.png",
    icon: ShoppingBag,
    tags: ["WhatsApp", "E-commerce", "Fácil"],
    href: "/demos/catalog",
  },
  {
    title: "Invitación de Boda",
    description:
      "Invitaciones digitales con RSVP, ubicación GPS y lista de regalos. Elegante y autogestionable.",
    image: "/images/demos/wedding.png",
    icon: Heart,
    tags: ["Eventos", "Premium", "RSVP"],
    href: "/demos/wedding",
  },
]

export function Demos() {
  return (
    <section id="demos" className="section-padding relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[400px] w-full max-w-5xl -translate-x-1/2 opacity-25 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary-light) / 0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeader
          eyebrow="Portfolio en vivo"
          title={
            <>
              Probalo vos mismo:{" "}
              <span className="text-primary">demos interactivos</span>
            </>
          }
          description="No te pedimos que confíes a ciegas. Explorá soluciones reales que podemos adaptar a tu negocio."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {demos.map((demo, index) => (
            <ScrollReveal key={demo.title} delay={index * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand">
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                  <Image
                    src={demo.image}
                    alt={`Captura de pantalla: ${demo.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent" />

                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-background/80 px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <demo.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {demo.title}
                    </h3>
                  </div>

                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {demo.description}
                  </p>

                  <Link href={demo.href} className="w-full">
                    <Button
                      variant="outline"
                      className="group/btn w-full justify-between rounded-lg border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Ver demo en vivo
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      />
                    </Button>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
