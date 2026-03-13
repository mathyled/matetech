"use client"

import { useState } from "react"
import { Heart, MapPin, Calendar, Clock, Music, Gift, ArrowLeft, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const triviaQuestions = [
  {
    id: 1,
    question: "¿Dónde se conocieron?",
    options: ["En la facultad", "En un viaje", "En un café"],
    correct: "En la facultad"
  },
  {
    id: 2,
    question: "¿Quién dio el primer paso?",
    options: ["Sofia", "Mateo", "Fue mutuo"],
    correct: "Sofia"
  }
]

export default function WeddingDemo() {
  const [rsvp, setRsvp] = useState(false)
  const [triviaAnswers, setTriviaAnswers] = useState<{ [key: number]: string }>({})

  const handleTriviaSelect = (questionId: number, option: string) => {
    if (triviaAnswers[questionId]) return // Ya respondió
    setTriviaAnswers(prev => ({ ...prev, [questionId]: option }))
  }

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
          <span className="text-lg tracking-[0.3em] uppercase mb-4 drop-shadow-md tracking-widest font-sans">Nuestra Boda</span>
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
            <Clock className="h-6 w-6 mb-4 text-[#d4af37]" />
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
        <div className="bg-white border border-slate-200 rounded-3xl p-10 mb-16 shadow-sm overflow-hidden relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full -mr-16 -mt-16" />
           <Music className="h-8 w-8 mx-auto mb-4 text-[#d4af37]" />
           <h3 className="text-xl mb-2">¿Cuánto conocés a los novios?</h3>
           <p className="text-slate-400 text-xs font-sans mb-8">Poné a prueba tu conocimiento</p>
           
           <div className="space-y-8 text-left font-sans">
              {triviaQuestions.map((q) => (
                <div key={q.id} className="p-1">
                  <p className="text-sm font-bold mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[10px] text-slate-500">{q.id}</span>
                    {q.question}
                  </p>
                  <div className="grid gap-3">
                    {q.options.map((opt) => {
                      const isSelected = triviaAnswers[q.id] === opt
                      const isCorrect = opt === q.correct
                      const showResult = !!triviaAnswers[q.id]
                      
                      let appearance = "border-slate-100 bg-white"
                      if (showResult) {
                        if (isCorrect) appearance = "border-emerald-200 bg-emerald-50 text-emerald-700 shadow-sm"
                        else if (isSelected && !isCorrect) appearance = "border-rose-200 bg-rose-50 text-rose-700 opacity-80"
                        else appearance = "border-slate-100 bg-white opacity-40"
                      } else {
                        appearance = "border-slate-200 bg-white hover:border-[#d4af37] hover:shadow-md cursor-pointer"
                      }

                      return (
                        <button 
                          key={opt} 
                          disabled={showResult}
                          onClick={() => handleTriviaSelect(q.id, opt)}
                          className={`flex items-center justify-between w-full text-left px-5 py-3 rounded-2xl border transition-all duration-300 text-sm font-medium ${appearance}`}
                        >
                          {opt}
                          {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                          {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-rose-500" />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* RSVP FORM */}
        <div className="mb-20">
            <h2 className="text-3xl mb-8">Confirmar Asistencia</h2>
            <div className="space-y-6 max-w-xs mx-auto text-left font-sans">
                <div className="group">
                   <label className="text-[10px] uppercase font-bold text-slate-400 group-focus-within:text-[#d4af37] transition-colors tracking-widest">Nombre y Apellido</label>
                   <input type="text" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-[#d4af37] transition-all text-sm" placeholder="Ej: Juan Perez" />
                </div>
                <div className="group">
                   <label className="text-[10px] uppercase font-bold text-slate-400 group-focus-within:text-[#d4af37] transition-colors tracking-widest">Dieta Especial</label>
                   <select className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-[#d4af37] transition-all text-sm appearance-none cursor-pointer">
                       <option>Ninguna</option>
                       <option>Vegetariano</option>
                       <option>Vegano</option>
                       <option>Celíaco</option>
                   </select>
                </div>
                <button 
                  onClick={() => setRsvp(true)}
                  className="w-full bg-[#d4af37] text-white py-5 rounded-full mt-10 font-bold tracking-widest shadow-2xl shadow-[#d4af37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs"
                >
                  CONFIRMAR ASISTENCIA
                </button>
            </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100">
          <Heart className="h-5 w-5 mx-auto mb-4 text-[#d4af37]/30" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-sans font-medium">
              Sofia & Mateo — 2026
          </p>
        </div>
      </div>
    </div>
  )
}
