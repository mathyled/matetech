import {
  LayoutTemplate,
  ShoppingCart,
  Bot,
  Database,
  Smartphone,
  HeartHandshake,
  Check,
  Utensils,
  Camera,
  Heart,
  Compass,
  Share2,
  PenLine,
  BarChart3,
  Megaphone,
  Clapperboard,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

type DevelopmentService = {
  line: "development"
  icon: LucideIcon
  title: string
  features: string[]
  highlighted?: boolean
  badge?: string
  image?: string
  demoHref?: string
}

type MarketingService = {
  line: "marketing"
  icon: LucideIcon
  title: string
  description: string
}

type Service = DevelopmentService | MarketingService

const developmentServices: DevelopmentService[] = [
  {
    line: "development",
    icon: Heart,
    title: "Invitaciones Digitales",
    features: [
      "Casamientos y 15 años",
      "Confirmación de asistencia (RSVP)",
      "Ubicación GPS y cuenta regresiva",
      "Sección de regalos (CBU/Alias)",
    ],
    highlighted: false,
  

  },
  {
    line: "development",
    icon: Camera,
    title: "Portfolio",
    features: [
      "Galería de alta calidad optimizada",
      "Carga ultra rápida",
      "Formulario de reserva integrado",
      "Conexión con Instagram",
    ],
    highlighted: false,

  },
  {
    line: "development",
    icon: Utensils,
    title: "Menú Digital & QR",
    features: [
      "Carta actualizable al instante",
      "Sin comisiones por venta",
      "Pedidos directo a WhatsApp",
      "Código QR incluido",
    ],
    highlighted: false,
  
  },
  {
    line: "development",
    icon: LayoutTemplate,
    title: "Sitio Web",
    features: [
      "Diseño orientado a conversión",
      "One page optimizada",
      "Botón de WhatsApp integrado",
      "Lista en 1–2 semanas",
    ],
    highlighted: false,
  },
  // {
  //   line: "development",
  //   icon: ShoppingCart,
  //   title: "Web Corporativa / E-commerce",
  //   features: [
  //     "Multi-sección profesional",
  //     "Catálogo autoadministrable",
  //     "Pasarela de pagos (Mercado Pago)",
  //     "SEO básico incluido",
  //   ],
  //   highlighted: false,
  // },
  {
    line: "development",
    icon: Bot,
    title: "Automatizaciones & Bots",
    features: [
      "Chatbots que trabajan solos",
      "Conexión entre apps (N8N/Make)",
      "Emails automáticos",
      "Ahorro de horas administrativas",
    ],
    highlighted: false,
  },
  {
    line: "development",
    icon: Database,
    title: "Sistemas de Gestión",
    badge: "Especialidad matetech",
    features: [
      "Paneles administrativos a medida",
      "Gestión de usuarios y permisos",
      "Lógica de negocio personalizada",
      "Masterclass de uso incluida",
    ],
    highlighted: true,
  },
  // {
  //   line: "development",
  //   icon: Smartphone,
  //   title: "Apps Móviles (iOS & Android)",
  //   features: [
  //     "Desarrollo con React Native",
  //     "Notificaciones push",
  //     "Publicación en stores incluida",
  //   ],
  //   highlighted: false,
  // },
  {
    line: "development",
    icon: HeartHandshake,
    title: "Mantenimiento & Partner",
    features: [
      "Tu departamento de sistemas externo",
      "Servidores y backups diarios",
      "Actualizaciones de seguridad",
      "Soporte prioritario",
    ],
    highlighted: false,
  },
]

const marketingServices: MarketingService[] = [
  {
    line: "marketing",
    icon: Compass,
    title: "Estrategia de redes",
    description:
      "Un plan con objetivos claros para que cada publicación tenga un porqué, no solo un calendario.",
  },
  {
    line: "marketing",
    icon: Share2,
    title: "Gestión de redes",
    description:
      "Publicamos, respondemos y cuidamos tu comunidad para que vos te enfoques en tu negocio.",
  },
  {
    line: "marketing",
    icon: PenLine,
    title: "Creación de contenido",
    description:
      "Posts, copies y piezas pensadas para conectar con tu audiencia, no para llenar el feed.",
  },
  {
    line: "marketing",
    icon: BarChart3,
    title: "Análisis y métricas",
    description:
      "Medimos lo que importa para ajustar la estrategia a tiempo, no al final del mes.",
  },
  {
    line: "marketing",
    icon: Megaphone,
    title: "Campañas publicitarias",
    description:
      "Inversión en ads optimizada para llegar a quien te compra, no a quien solo mira.",
  },
  {
    line: "marketing",
    icon: Clapperboard,
    title: "Edición de reels",
    description:
      "Contenido audiovisual pensado para retener y convertir, no solo para verse bien.",
  },
]

const categoryPills = [
  { label: "Desarrollo de software", href: "#servicios-desarrollo" },
  { label: "Marketing y contenido", href: "#servicios-marketing" },
]

function ServiceCard({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const isMarketing = service.line === "marketing"
  const isDev = service.line === "development"
  const highlighted = isDev && service.highlighted

  const content = (
    <Card
      className={cn(
        "relative flex h-full flex-col border transition-all duration-300",
        highlighted
          ? "border-primary bg-primary-light/20 shadow-brand"
          : isMarketing
            ? "border-border bg-card hover:border-accent/40 hover:shadow-accent"
            : "border-border bg-card hover:border-primary/30 hover:shadow-brand-sm"
      )}
    >
      {isDev && service.badge && (
        <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {service.badge}
        </div>
      )}

      <CardHeader className="pb-3">
        {isDev && service.image && (
          <div className="mb-2 overflow-hidden rounded-xl bg-muted">
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <h4 className="font-display text-base font-semibold text-white sm:text-lg">
                  {service.title}
                </h4>
              </div>
            </div>
          </div>
        )}

        <div className={cn("flex items-start gap-3", isDev && service.image && "sm:flex")}>
          <div
            className={cn(
              "mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg",
              isMarketing
                ? "bg-accent/15 text-accent"
                : "bg-primary-light/40 text-primary-hover"
            )}
          >
            <service.icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className={cn("min-w-0", isDev && service.image && "sm:block")}>
            <h4
              className={cn(
                "font-display text-base font-semibold text-foreground sm:text-lg",
                isDev && service.image && "sm:block",
                isDev && service.image && "hidden sm:block"
              )}
            >
              {service.title}
            </h4>
            {isMarketing && (
              <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {service.description}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      {isDev && (
        <CardContent className="hidden flex-1 flex-col pt-0 sm:flex">
          <ul className="flex-1 space-y-2">
            {service.features.slice(0, 2).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )

  return (
    <ScrollReveal delay={index * 60}>
      {isDev && service.demoHref ? (
        <Link
          href={service.demoHref}
          className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`Ver demo: ${service.title}`}
        >
          {content}
        </Link>
      ) : (
        <div className="group h-full">{content}</div>
      )}
    </ScrollReveal>
  )
}

export function Pricing() {
  return (
    <section id="servicios" className="section-padding bg-surface/50">
      <div className="section-container">
        <SectionHeader
          eyebrow="Servicios"
          title={
            <>
              Tecnología y marketing,{" "}
              <span className="text-primary">en un solo equipo</span>
            </>
          }
          description="Desarrollo de software y marketing digital para hacer crecer tu negocio. Todo con un mismo estándar de calidad y una sola coordinación."
        />

        <nav
          className="mb-7 flex flex-wrap justify-center gap-1.5 sm:mb-12 sm:gap-2"
          aria-label="Categorías de servicios"
        >
          {categoryPills.map((pill) => (
            <a
              key={pill.href}
              href={pill.href}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
            >
              {pill.label}
            </a>
          ))}
        </nav>

        <div id="servicios-desarrollo" className="scroll-mt-28">
          <div className="mb-4 flex items-center gap-2 sm:mb-8 sm:gap-3">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <h3 className="font-display text-lg font-semibold text-foreground sm:text-2xl">
              Desarrollo de software
            </h3>
          </div>
          <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developmentServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <div className="mt-5 flex justify-center sm:mt-8">
            <Button asChild size="sm" className="rounded-lg px-5 font-semibold sm:h-11 sm:px-8">
              <a href="#contacto">Quiero cotizar desarrollo</a>
            </Button>
          </div>
        </div>

        <div id="servicios-marketing" className="mt-9 scroll-mt-28 sm:mt-14 md:mt-20">
          <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <h3 className="font-display text-lg font-semibold text-foreground sm:text-2xl">
              Marketing digital y contenido
            </h3>
          </div>
          <p className="mb-4 max-w-2xl text-xs text-muted-foreground sm:mb-8 sm:text-base">
            Branding, redes y contenido con hosting incluido cuando lo
            necesites. Planes mensuales o por proyecto.
          </p>
          <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
