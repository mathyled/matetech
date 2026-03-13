import Image from "next/image"
import Link from "next/link"
import { Calendar, ShoppingBag, Contact2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const demos = [
  {
    title: "Sistema de Reservas",
    description: "Gestión inteligente de turnos para gimnasios, spas y profesionales independientes. Mobile-first y automatizado.",
    image: "/images/demos/booking.png",
    icon: Calendar,
    color: "from-purple-500/20 to-blue-500/20",
    tags: ["Calendario", "Automatización", "Pagos"],
    href: "/demos/booking"
  },
  {
    title: "Catálogo WhatsApp",
    description: "Tu menú o lista de productos interactiva con pedido directo a WhatsApp. Ideal para gastronomía y retail.",
    image: "/images/demos/catalog.png",
    icon: ShoppingBag,
    color: "from-orange-500/20 to-red-500/20",
    tags: ["WhatsApp", "E-commerce", "Fácil"],
    href: "/demos/catalog"
  },
  {
    title: "Bio Link Pro",
    description: "Tu tarjeta de presentación digital. Agrupa todos tus links, servicios y contacto en un solo lugar premium.",
    image: "/images/demos/bio.png",
    icon: Contact2,
    color: "from-emerald-500/20 to-teal-500/20",
    tags: ["Networking", "Social", "Portfolio"],
    href: "/demos/bio"
  }
]

export function Demos() {
  return (
    <section id="demos" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl opacity-30 blur-[120px] bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20" />
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Demos <span className="text-primary italic">Interactivos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explora soluciones prediseñadas y personalizables para potenciar tu negocio desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${demo.color}`}>
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {demo.tags.map(tag => (
                    <span key={tag} className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium backdrop-blur-md border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                    <demo.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{demo.title}</h3>
                </div>
                
                <p className="mb-8 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {demo.description}
                </p>

                <Link href={demo.href} className="w-full">
                  <Button variant="outline" className="group/btn w-full justify-between rounded-xl border-border/50 hover:bg-primary hover:text-primary-foreground">
                    Ver demo en vivo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
