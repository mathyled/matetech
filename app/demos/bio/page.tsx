"use client"

import Image from "next/image"
import { Instagram, Twitter, Linkedin, Globe, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

const links = [
  { title: "Mi Portfolio", url: "#", icon: Globe, color: "bg-blue-500" },
  { title: "Instagram", url: "https://www.instagram.com/matetechok/", icon: Instagram, color: "bg-pink-600" },
  { title: "LinkedIn", url: "#", icon: Linkedin, color: "bg-blue-700" },
  { title: "Twitter / X", url: "#", icon: Twitter, color: "bg-black" },
  { title: "Contacto Social", url: "mailto:info@matetech.com", icon: Mail, color: "bg-emerald-500" },
]

export default function BioLinkDemo() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      {/* Back Button */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Link>

      <div className="mx-auto max-w-[480px] px-6 pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/50 p-1">
            <div className="h-full w-full overflow-hidden rounded-full bg-gradient-to-tr from-primary to-purple-600">
               <div className="flex h-full w-full items-center justify-center text-2xl font-bold">
                MT
               </div>
            </div>
          </div>
          
          <h1 className="mb-2 text-2xl font-bold tracking-tight">MateTech Pro</h1>
          <p className="mb-8 text-neutral-400 text-sm">Innovación digital & Desarrollo para emprendedores 🧉</p>

          <div className="flex w-full flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]"
              >
                <div className={`absolute left-4 rounded-lg ${link.color} p-2 text-white`}>
                  <link.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold">{link.title}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex gap-6 grayscale opacity-50">
             <Instagram className="h-5 w-5" />
             <Twitter className="h-5 w-5" />
             <Linkedin className="h-5 w-5" />
          </div>
          
          <p className="mt-12 text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
            Built by <span className="text-primary">MateTech</span>
          </p>
        </div>
      </div>
    </div>
  )
}
