import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "Node.js", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Tailwind CSS", category: "Estilos" },
  { name: "Vercel", category: "Deploy" },
]

export function TechStack() {
  return (
    <section id="tecnologias" className="section-padding border-y border-border bg-surface/40">
      <div className="section-container">
        <SectionHeader
          eyebrow="Stack tecnológico"
          title={
            <>
              Herramientas{" "}
              <span className="text-primary">de punta</span>
            </>
          }
          description="Elegimos tecnología probada y escalable para que tu proyecto dure años, no meses."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <ScrollReveal key={tech.name} delay={index * 60}>
              <div
                className="group flex flex-col items-center rounded-xl border border-border/50 bg-card px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-brand-sm"
                title={`${tech.name} — ${tech.category}`}
              >
                <span className="font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary md:text-base">
                  {tech.name}
                </span>
                <span className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {tech.category}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
