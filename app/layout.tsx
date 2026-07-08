import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "matetech | Desarrollo de Software y Marketing Digital",
  description:
    "Agencia en Argentina: desarrollo de software, webs y apps + marketing digital, branding y contenido. Precios claros, resultados medibles.",
  keywords: [
    "desarrollo software",
    "marketing digital",
    "creación de contenido",
    "branding",
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
      <body className="font-sans antialiased">{children}<Analytics /></body>
    </html>
  )
}
