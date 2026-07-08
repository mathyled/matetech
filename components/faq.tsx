import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/section-header"

const faqs = [
  {
    question: "¿Qué tipos de proyectos desarrollan?",
    answer:
      "Desde landings y menús digitales hasta sistemas de gestión completos, apps móviles y automatizaciones. Nos adaptamos a tu necesidad y presupuesto.",
  },
  {
    question: "¿Hay que pagar mantenimiento?",
    answer:
      "Para landings o webs corporativas, no es obligatorio. En sistemas de gestión o automatizaciones, recomendamos un plan de mantenimiento para que todo siga funcionando al 100% y podamos hacer ajustes cuando los necesites.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "50% de anticipo para arrancar y 50% contra entrega. Aceptamos depósito o transferencia bancaria.",
  },
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Una landing puede estar lista en 1–2 semanas. Un sistema de gestión completo, entre 4 y 8 semanas. Siempre te damos un estimado claro antes de arrancar.",
  },
  {
    question: "¿Qué incluye el servicio de marketing digital?",
    answer:
      "Estrategia de redes sociales, manejo diario de cuentas, creación de contenido, edición de reels, monitorización de resultados y gestión de campañas publicitarias. Podés contratar todo el paquete o solo lo que necesites.",
  },
  {
    question: "¿Ustedes manejan mis redes o me capacitan para hacerlo yo?",
    answer:
      "Las dos opciones son posibles. Podemos hacernos cargo de la gestión completa, o armar la estrategia y el contenido para que tu equipo lo publique. Lo definimos según tu disponibilidad y objetivos.",
  },
  {
    question: "¿Con qué frecuencia entregan reportes de resultados?",
    answer:
      "Reporte mensual con métricas clave (alcance, interacciones, crecimiento y rendimiento de campañas), y ajustamos la estrategia según lo que muestran los datos.",
  },
  {
    question: "¿Hacen branding completo o solo piezas sueltas?",
    answer:
      "Ambas cosas. Podemos desarrollar identidad de marca completa (logo, paleta, tono de comunicación) o trabajar sobre una marca ya existente creando piezas y contenido alineados a ella.",
  },
  {
    question: "¿Cuánto tarda armar una estrategia de contenido?",
    answer:
      "El diagnóstico y la estrategia inicial suelen estar listos en 1 semana. A partir de ahí, arrancamos con producción de contenido de forma continua, mes a mes.",
  },
  {
    question: "¿Puedo contratar desarrollo y marketing juntos?",
    answer:
      "Sí, de hecho es lo que más recomendamos: una web bien construida rinde mucho más cuando además hay una estrategia de contenido y campañas que lleven tráfico hacia ella.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="section-container max-w-3xl">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Todo lo que necesitás{" "}
              <span className="text-primary">saber</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}