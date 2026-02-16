import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "matetech | Desarrollo de Software & Automatizaciones",
  description:
    "Agencia de desarrollo de software en Argentina. Webs, Apps, Sistemas de Gestion y Automatizaciones. Precios claros, procesos transparentes.",
  keywords: [
    "desarrollo software",
    "argentina",
    "landing page",
    "ecommerce",
    "automatizaciones",
    "SaaS",
    "matetech",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
