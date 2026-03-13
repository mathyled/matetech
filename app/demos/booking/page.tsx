"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
const times = ["09:00", "10:30", "14:00", "15:30", "17:00", "18:30"]

export default function BookingDemo() {
  const [selectedDay, setSelectedDay] = useState(2)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [booked, setBooked] = useState(false)

  if (booked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        <h1 className="mb-2 text-3xl font-bold italic text-primary">¡Turno Reservado!</h1>
        <p className="mb-8 text-muted-foreground">Te enviamos los detalles de la reserva a tu correo.</p>
        <Button onClick={() => setBooked(false)} className="rounded-xl px-12">Reservar otro</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-foreground">
      {/* Navbar mock */}
      <div className="sticky top-0 z-50 border-b border-border/10 bg-background/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <Link href="/" className="rounded-full p-2 hover:bg-muted transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="font-bold">Reserva de Turno</span>
          <div className="h-9 w-9" /> {/* spacer */}
        </div>
      </div>

      <div className="mx-auto max-w-md p-6">
        {/* Service Header */}
        <div className="mb-8 overflow-hidden rounded-3xl bg-primary/5 p-6 border border-primary/10">
          <h2 className="text-xl font-bold">Personal Training Session</h2>
          <p className="text-sm text-muted-foreground">60 min • Focus on strength and endurance</p>
        </div>

        {/* Calendar Mock */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Marzo 2026
            </h3>
            <div className="flex gap-2">
              <button className="rounded-lg bg-background p-1.5 border border-border/50"><ChevronLeft className="h-4 w-4" /></button>
              <button className="rounded-lg bg-background p-1.5 border border-border/50"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {days.map(d => (
              <span key={d} className="text-center text-[10px] font-bold uppercase text-muted-foreground">{d}</span>
            ))}
            {[...Array(7)].map((_, i) => {
              const dayNum = i + 10
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDay(i)}
                  className={`flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-all ${
                    selectedDay === i 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "bg-background border border-border/50 hover:border-primary/50"
                  }`}
                >
                  {dayNum}
                </button>
              )
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-10">
          <h3 className="mb-4 font-semibold text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Horarios disponible
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`rounded-xl py-3 text-sm font-medium transition-all ${
                  selectedTime === t 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background border border-border/50 hover:border-primary/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Action */}
        <Button 
          disabled={!selectedTime}
          onClick={() => setBooked(true)}
          className="h-14 w-full rounded-2xl text-lg font-bold shadow-xl shadow-primary/20"
        >
          Confirmar Reserva
        </Button>
      </div>
    </div>
  )
}
