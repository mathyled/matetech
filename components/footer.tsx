import { Instagram } from "lucide-react"

const footerLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Demos", href: "#demos" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="section-container py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              matetech
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Desarrollo de software y marketing digital para negocios que quieren
              crecer.
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hola@matetech.com.ar"
                  className="transition-colors hover:text-primary"
                >
                  hola@matetech.com.ar
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/matetechok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @matetechok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © 2026{" "}
            <span className="font-medium text-primary">matetech</span>. Todos los
            derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Desarrollado con{" "}
            <span className="text-base" role="img" aria-label="mate">
              🧉
            </span>{" "}
            y código
          </p>
        </div>
      </div>
    </footer>
  )
}
