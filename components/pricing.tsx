import {
  LayoutTemplate,
  ShoppingCart,
  Bot,
  Database,
  Smartphone,
  HeartHandshake,
  Check,
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Page Express",
    price: "Desde $ 220.000",
    features: [
      "One Page",
      "Diseno de Alta Conversion",
      "Boton de whatsapp",
    ],
    highlighted: false,
  },
  {
    icon: ShoppingCart,
    title: "Web Corporativa / E-commerce",
    price: "Desde $ 550.000",
    features: [
      "Multiseccion",
      "Catalogo Autoadministrable",
      "Pasarela de Pagos (MP)",
      "SEO Basico para que te encuentren",
    ],
    highlighted: false,
  },
  {
    icon: Bot,
    title: "Automatizaciones & Bots",
    price: "Desde $ 120.000",
    features: [
      "Chatbots que laburan solos",
      "Conexion entre Apps (Zapier/Make)",
      "Emails automaticos",
      "Ahorro de tiempo administrativo",
    ],
    highlighted: false,
  },
  {
    icon: Database,
    title: "Sistemas de Gestion (SaaS/Web App)",
    price: "Desde $ 1.500.000",
    badge: "Especialidad matetech",
    features: [
      "Paneles Administrativos",
      "Gestion de Usuarios",
      "Logica de Negocio personalizada",
      "Masterclass de uso incluida",
    ],
    highlighted: true,
  },
  {
    icon: Smartphone,
    title: "Apps Moviles (iOS & Android)",
    price: "Desde $ 2.200.000",
    features: [
      "Desarrollo React Native",
      "Notificaciones Push",
      "Publicacion en Stores",
    ],
    highlighted: false,
  },
  {
    icon: HeartHandshake,
    title: "Mantenimiento & Partner",
    price: "Desde $ 60.000 / mes",
    features: [
      "Tu depto de sistemas tercerizado",
      "Servidores & Backups Diarios",
      "Actualizaciones de Seguridad",
      "Soporte Prioritario",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Servicios & Precios
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">
              Inversion{" "}
              <span className="text-primary">Inteligente</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Precios de referencia en Pesos Argentinos (ARS). Escala segun tus necesidades.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`relative flex flex-col border transition-all ${service.highlighted
                  ? "border-primary bg-primary/[0.03] shadow-[0_0_30px_-12px_hsl(74_64%_50%/0.3)]"
                  : "border-border/50 bg-card hover:border-primary/30"
                }`}
            >
              {service.badge && (
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {service.badge}
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 font-display text-2xl font-bold text-primary">
                  {service.price}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={service.highlighted ? "default" : "outline"}
                  className={`mt-6 w-full ${!service.highlighted
                      ? "border-border text-foreground hover:border-primary/50 hover:text-primary"
                      : ""
                    }`}
                >
                  <a href="#contacto">
                    Hablemos
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
