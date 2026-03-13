import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row sm:px-2">
        <div className="flex items-center gap-3">
             <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {"© 2026 "}
            <span className="font-medium text-primary">
              matetech
            </span>
            {". Todos los derechos reservados."}
             </p>
        </div>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          
        {"Desarrollado con "}
          <span className="text-base" role="img" aria-label="mate">
            {"🧉"}
          </span>
          {" y código"}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/matetechok/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
