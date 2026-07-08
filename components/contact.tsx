"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Send, CalendarCheck, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"
import { submitContact } from "@/actions/contact-action"

const MARKETING_PREFILL =
  "Hola, me interesa una estrategia de marketing digital y contenido para mi negocio."

function ContactForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (searchParams.get("interes") === "marketing") {
      setMessage(MARKETING_PREFILL)
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError(null)

    const result = await submitContact(new FormData(e.currentTarget))
    setPending(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      setError(
        result.message ||
          "Hubo un error al enviar. Intentá de nuevo o escribinos por Instagram."
      )
    }
  }

  return (
    <section id="contacto" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary-light/15">
            <div className="pointer-events-none absolute inset-0 bg-grid-brand opacity-30" />

            <div className="relative z-10 grid gap-8 p-6 sm:gap-10 sm:p-10 md:grid-cols-2 md:gap-12 md:p-14">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary-light/30 px-4 py-1.5 text-xs font-medium text-primary-hover sm:text-sm">
                  <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Primera consulta 100% bonificada
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                  <span className="text-balance">
                    Contanos tu idea y te armamos un{" "}
                    <span className="text-primary">plan de acción</span>
                  </span>
                </h2>

                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:max-w-md">
                  Respondemos en menos de 24 horas con diagnóstico, presupuesto
                  cerrado y plazos claros.
                </p>

                <ul className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
                  {[
                    "Diagnóstico a medida de tu proyecto",
                    "Presupuesto cerrado, sin sorpresas",
                    "Respuesta en menos de 24 horas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {submitted ? (
                  <div
                    className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-xl border border-primary/20 bg-card p-8 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2
                        className="h-7 w-7 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      ¡Mensaje recibido!
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Te contactamos en menos de 24 horas con tu propuesta.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-5 sm:p-6 md:p-8"
                    noValidate
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          required
                          autoComplete="name"
                          className="border-border/50 bg-background"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          autoComplete="email"
                          className="border-border/50 bg-background"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">
                        Empresa{" "}
                        <span className="text-muted-foreground">(opcional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        autoComplete="organization"
                        className="border-border/50 bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">¿Qué necesitás?</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Contanos brevemente tu proyecto o problema..."
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="resize-none border-border/50 bg-background"
                      />
                    </div>

                    {error && (
                      <p
                        className="text-sm text-destructive"
                        role="alert"
                        aria-live="assertive"
                      >
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={pending}
                      className="mt-1 gap-2 text-base font-semibold"
                    >
                      {pending ? (
                        <>
                          <Loader2
                            className="h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          Quiero mi propuesta gratis
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <Suspense fallback={null}>
      <ContactForm />
    </Suspense>
  )
}
