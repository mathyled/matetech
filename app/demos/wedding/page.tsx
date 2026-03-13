"use client"

import { useState } from "react"
import { Heart, MapPin, Calendar, Clock, Music, Gift, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WeddingDemo() {
  const [rsvp, setRsvp] = useState(false)

  if (rsvp) {
    return (
      <div className="min-h-screen bg-[#fdfaf6] flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-6 text-[#d4af37]">
          <Heart className="h-16 w-16 fill-current" />
        </div>
        <h1 className="text-3xl font-serif mb-4 text-slate-800">¡Gracias por confirmar!</h1>
        <p className="text-slate-600 mb-8 italic">Estamos ansiosos por compartir este día especial con vos.</p>
        <Link href="/">
            <button className="border border-slate-300 px-8 py-2 rounded-full hover:bg-slate-50 transition-colors">Volver</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-slate-800 font-serif selection:bg-[#d4af37]/20">
      {/* Back Button */}
      <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm backdrop-blur-md border border-slate-200 hover:bg-white transition-all font-sans">
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Link>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" 
          alt="Wedding Hero" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <span className="text-lg tracking-[0.3em] uppercase mb-4 drop-shadow-md">Nuestra Boda</span>
          <h1 className="text-5xl md:text-7xl mb-4 drop-shadow-xl font-serif">Sofia & Mateo</h1>
          <div className="h-px w-24 bg-white/60 mb-6" />
          <p className="text-xl italic drop-shadow-md">24 de Octubre, 2026</p>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <Heart className="h-8 w-8 mx-auto mb-8 text-[#d4af37] fill-current opacity-50" />
        <p className="text-lg italic text-slate-600 mb-12 leading-relaxed">
          "Hay amores que nacen para ser eternos. Queremos invitarte a ser parte del comienzo de nuestra historia más importante."
        </p>

        <div className="grid gap-12 mb-16">
          <div className="flex flex-col items-center">
            <Calendar className="h-6 w-6 mb-4 text-[#d4af37]" />
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Cuándo</h3>
            <p>Sábado 24 de Octubre</p>
            <p>18:30 Horas</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="h-6 w-6 mb-4 text-[#d4af37]" />
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Dónde</h3>
            <p className="font-bold">Quinta Las Lilas</p>
            <p>Camino de Cintura 1245, BA</p>
            <button className="mt-4 text-xs font-sans text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-slate-900 transition-colors uppercase tracking-widest">
              Ver Mapa
            </button>
          </div>

          <div className="flex flex-col items-center">
            <Music className="h-6 w-6 mb-4 text-[#d4af37]" />
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-2">Dress Code</h3>
            <p>Elegante Sport</p>
          </div>
        </div>

        {/* Gift Registry */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 mb-16 shadow-sm">
           <Gift className="h-8 w-8 mx-auto mb-4 text-[#d4af37]" />
           <h3 className="text-xl mb-4">Mesa de Regalos</h3>
           <p className="text-slate-600 italic mb-6">Tu presencia es nuestro mejor regalo, pero si deseas hacernos un presente...</p>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-sans text-sm hover:bg-slate-800 transition-all font-bold tracking-widest">VER DATOS BANCARIOS</button>
        </div>

        {/* TRIVIA QUIZ */}
        <div className="bg-white border border-slate-200 rounded-3xl p-10 mb-16 shadow-sm">
           <Music className="h-8 w-8 mx-auto mb-4 text-[#d4af37]" />
           <h3 className="text-xl mb-6">¿Cuánto conocés a los novios?</h3>
           <div className="space-y-6 text-left font-sans">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-sm font-bold mb-3">1. ¿Dónde se conocieron?</p>
                <div className="grid gap-2">
                   {["En la facultad", "En un viaje", "En un café"].map((opt) => (
                     <button key={opt} className="w-full text-left px-4 py-2 rounded-xl border border-slate-200 text-sm hover:border-[#d4af37] transition-colors bg-white">
                        {opt}
                     </button>
                   ))}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-sm font-bold mb-3">2. ¿Quién dio el primer paso?</p>
                <div className="grid gap-2">
                   {["Sofia", "Mateo", "Fue mutuo"].map((opt) => (
                     <button key={opt} className="w-full text-left px-4 py-2 rounded-xl border border-slate-200 text-sm hover:border-[#d4af37] transition-colors bg-white">
                        {opt}
                     </button>
                   ))}
                </div>
              </div>
           </div>
        </div>

        {/* RSVP FORM */}
        <div className="mb-20">
            <h2 className="text-3xl mb-8">Confirmar Asistencia</h2>
            <div className="space-y-4 max-w-xs mx-auto text-left font-sans">
                <div>
                   <label className="text-[10px] uppercase font-bold text-slate-400">Nombre y Apellido</label>
                   <input type="text" className="w-full bg-white border-b border-slate-200 py-2 outline-none focus:border-[#d4af37] transition-colors" placeholder="Ej: Juan Perez" />
                </div>
                <div>
                   <label className="text-[10px] uppercase font-bold text-slate-400">Dieta Especial</label>
                   <select className="w-full bg-white border-b border-slate-200 py-2 outline-none focus:border-[#d4af37] transition-colors">
                       <option>Ninguna</option>
                       <option>Vegetariano</option>
                       <option>Vegano</option>
                       <option>Celíaco</option>
                   </select>
                </div>
                <button 
                  onClick={() => setRsvp(true)}
                  className="w-full bg-[#d4af37] text-white py-4 rounded-full mt-8 font-bold tracking-widest shadow-xl shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  CONFIRMAR
                </button>
            </div>
        </div>

        <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-sans">
            Sofia & Mateo — 2026
        </p>
      </div>
    </div>
  )
}
