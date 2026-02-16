"use client"

import { useState } from "react"
import { Send, CalendarCheck, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.03]">
            {/* Background grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(74 64% 50% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(74 64% 50% / 0.5) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10 grid gap-10 p-8 md:grid-cols-2 md:gap-16 md:p-14">
              {/* Left column - messaging */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                  <CalendarCheck className="h-4 w-4" />
                  100% bonificada
                </div>

                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">
                    Hablemos de tu{" "}
                    <span className="text-primary">próximo proyecto</span>
                  </span>
                </h2>

                <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  Contanos tu idea y te respondemos en menos de 24hs con un
                  plan de accion.
                </p>

                <div className="mt-8 flex flex-col gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Diagnostico a medida de tu proyecto
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Presupuesto cerrado y plazos garantizados
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Te contestamos en menos de 24 horas
                  </span>
                </div>
              </div>

              {/* Right column - form */}
              <div>
                {submitted ? (
                  <div className="flex h-full flex-col items-center justify-center rounded-xl border border-primary/20 bg-card p-10 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Mensaje enviado, genio
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Te contactamos en menos de 24 horas. Quedate tranqui.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 rounded-xl border border-border/50 bg-card p-6 md:p-8"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-foreground">
                          Nombre
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          required
                          className="border-border/50 bg-background"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className="border-border/50 bg-background"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company" className="text-foreground">
                        Empresa{" "}
                        <span className="text-muted-foreground">(opcional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="border-border/50 bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message" className="text-foreground">
                        Contanos tu idea
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Describi brevemente que necesitas..."
                        rows={4}
                        required
                        className="resize-none border-border/50 bg-background"
                      />
                    </div>

                    <Button type="submit" size="lg" className="mt-1 gap-2 text-base">
                      <Send className="h-4 w-4" />
                      Agendar consulta bonificada
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Talent CTA */}
        {/* <ScrollReveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-border/50 bg-card p-6 text-center">
            <Users className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              {"Sos desarrollador? "}
              <a
                href="mailto:talentos@matetech.com.ar"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Unite a nuestra base de talentos
              </a>
            </p>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  )
}
