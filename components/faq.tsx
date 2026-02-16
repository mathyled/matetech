import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
    question: "¿Qué tipos de servicios ofrecen?",
    answer:
      "Desarrollamos todo tipo de software a medida. Nos adaptamos a tus necesidades y presupuesto.",
  },
  {
    question: "¿Hay que pagar mantenimiento?",
    answer:
      "Si tu proyecto es una landing o web corporativa, no es necesario. Para sistemas de gestion o automatizaciones, recomendamos un plan de mantenimiento para asegurar que todo siga funcionando al 100% y hacer ajustes cuando los necesites.",
  },
  {
    question: "¿El codigo es mio?",
    answer:
      "100%. Cuando terminas de pagar, te entregamos todo el codigo fuente y la documentacion. Es tuyo de por vida.",
  },
  {
    question: "¿Como se paga?",
    answer:
      "50% de anticipo para arrancar y 50% contra entrega. Aceptamos deposito o transferencia bancaria, como te quede más comodo.",
  },
  {
    question: "¿Cuanto se tarda un proyecto?",
    answer:
      "Depende de la complejidad. Una landing puede estar en 1-2 semanas. Un sistema de gestion completo, de 4 a 8 semanas. Siempre te damos un estimado claro antes de arrancar y te mantenemos al tanto del avance.",
  },
  {
    question: "¿Que tecnologias manejan?",
    answer:
      "Principalmente Next.js, React, TypeScript y Node.js. Para apps moviles, React Native. Siempre elegimos las herramientas que mejor le queden a tu proyecto.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">
              Preguntas{" "}
              <span className="text-primary">Frecuentes</span>
            </span>
          </h2>
        </div>

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
