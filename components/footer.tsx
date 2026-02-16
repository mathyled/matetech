import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
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
      </div>
    </footer>
  )
}
