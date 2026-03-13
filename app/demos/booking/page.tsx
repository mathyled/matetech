"use client"

import { useState, useMemo } from "react"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft, 
  LayoutDashboard, 
  User, 
  Settings, 
  Plus,
  MoreVertical,
  CalendarCheck2,
  Phone,
  Mail,
  Search,
  Stethoscope,
  Scissors,
  Dumbbell,
  Brain
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { addDays, format, startOfWeek, addWeeks, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isBefore, startOfToday } from "date-fns"
import { es } from "date-fns/locale"

// --- Mock Data ---
const services = [
  { id: 1, name: "Psicología", description: "Sesión individual de terapia online o presencial.", duration: "50 min", price: "$12.000", color: "bg-indigo-500", icon: Brain },
  { id: 2, name: "Nutrición", description: "Plan alimentación personalizado y seguimiento.", duration: "40 min", price: "$8.500", color: "bg-emerald-500", icon: Stethoscope },
  { id: 3, name: "Barbería Pro", description: "Corte premium, lavado y perfilado de barba.", duration: "60 min", price: "$6.000", color: "bg-amber-600", icon: Scissors },
  { id: 4, name: "Personal Trainer", description: "Entrenamiento funcional adaptado a tus objetivos.", duration: "60 min", price: "$7.500", color: "bg-rose-500", icon: Dumbbell },
]

const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]

// --- Components ---

export default function BookingDemo() {
  const [view, setView] = useState<"user" | "admin">("user")
  const [step, setStep] = useState<"service" | "datetime" | "success">("service")
  const [selectedService, setSelectedService] = useState(services[0])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Mock reservations for admin
  const [reservations, setReservations] = useState([
    { id: 1, client: "Julian Rossi", service: "Psicología", date: new Date(), time: "10:00", status: "Confirmado", email: "jrossi@gmail.com" },
    { id: 2, client: "Lucía Fernández", service: "Barbería Pro", date: addDays(new Date(), 1), time: "15:00", status: "Pendiente", email: "lucia.f@outlook.com" },
  ])

  // Calendar logic
  const daysInMonth = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 })
    const end = addWeeks(start, 5) // Show a few weeks
    return eachDayOfInterval({ start, end })
  }, [currentMonth])

  const handleBooking = () => {
    const newRes = {
        id: reservations.length + 1,
        client: "Usuario Demo",
        service: selectedService.name,
        date: selectedDate,
        time: selectedTime!,
        status: "Confirmado",
        email: "demo@matetech.com"
    }
    setReservations([newRes, ...reservations])
    setStep("success")
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* View Toggle Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Volver
            </Link>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full border border-slate-200 dark:border-slate-700">
                <button 
                    onClick={() => setView("user")}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "user" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"}`}
                >
                    <User className="h-3.5 w-3.5" />
                    Vista Usuario
                </button>
                <button 
                    onClick={() => setView("admin")}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "admin" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"}`}
                >
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    Vista Admin
                </button>
            </div>
            <div className="w-20 hidden md:block" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl p-6">
        {view === "user" ? (
          <div className="mx-auto max-w-2xl">
            {step === "service" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-black mb-3 tracking-tight">Elegí el servicio</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium italic">¿Qué vamos a hacer hoy?</p>
                    </div>
                    <div className="grid gap-6">
                        {services.map(s => (
                            <button 
                                key={s.id}
                                onClick={() => { setSelectedService(s); setStep("datetime"); }}
                                className="group relative flex items-center p-1 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/10 text-left active:scale-[0.98]"
                            >
                                <div className="flex w-full items-center gap-6 p-5">
                                    <div className={`h-20 w-20 shrink-0 rounded-3xl ${s.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-primary transition-transform group-hover:scale-110`}>
                                        <s.icon className="h-10 w-10 shrink-0" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-black text-xl tracking-tight">{s.name}</h3>
                                            <span className="text-lg font-black text-primary">{s.price}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium line-clamp-1">{s.description}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                <Clock className="h-3 w-3" />
                                                {s.duration}
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary">
                                                Disponible hoy
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === "datetime" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <button onClick={() => setStep("service")} className="mb-6 flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition-all">
                        <ChevronLeft className="h-4 w-4" />
                        Cambiar servicio
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Calendar */}
                        <div>
                             <div className="mb-6 flex items-center justify-between">
                                <h3 className="font-black text-xl flex items-center gap-2 lowercase italic">
                                    <span className="text-primary tracking-tighter uppercase not-italic">1.</span> Fecha
                                </h3>
                                <div className="flex gap-2">
                                    <button onClick={() => setCurrentMonth(addWeeks(currentMonth, -1))} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><ChevronLeft className="h-4 w-4" /></button>
                                    <button onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><ChevronRight className="h-4 w-4" /></button>
                                </div>
                             </div>

                             <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 shadow-sm">
                                <p className="text-center font-bold text-sm mb-6 capitalize">{format(currentMonth, "MMMM yyyy", { locale: es })}</p>
                                <div className="grid grid-cols-7 gap-2 mb-2">
                                    {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                                        <span key={i} className="text-center text-[10px] font-black text-slate-300 dark:text-slate-600">{d}</span>
                                    ))}
                                </div>
                                <div className="grid grid-cols-7 gap-1">
                                    {daysInMonth.map((day, i) => {
                                        const disabled = isBefore(day, startOfToday())
                                        const selected = isSameDay(day, selectedDate)
                                        return (
                                            <button
                                                key={i}
                                                disabled={disabled}
                                                onClick={() => setSelectedDate(day)}
                                                className={`aspect-square flex flex-col items-center justify-center rounded-xl text-xs font-bold transition-all ${
                                                    selected 
                                                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" 
                                                        : disabled 
                                                            ? "opacity-10 cursor-not-allowed" 
                                                            : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                                                }`}
                                            >
                                                {format(day, "d")}
                                                {isToday(day) && !selected && <div className="w-1 h-1 bg-primary rounded-full mt-0.5" />}
                                            </button>
                                        )
                                    })}
                                </div>
                             </div>
                        </div>

                        {/* Times */}
                        <div>
                            <h3 className="mb-6 font-black text-xl flex items-center gap-2 lowercase italic">
                                <span className="text-primary tracking-tighter uppercase not-italic">2.</span> Horario
                            </h3>
                            <div className="grid grid-cols-2 gap-3 mb-10">
                                {availableTimes.map(t => (
                                    <button 
                                        key={t}
                                        onClick={() => setSelectedTime(t)}
                                        className={`py-4 rounded-2xl text-sm font-bold border transition-all ${selectedTime === t ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary/50"}`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            <Button 
                                disabled={!selectedTime}
                                onClick={handleBooking}
                                className="w-full h-16 rounded-22xl text-lg font-black tracking-tight shadow-xl shadow-primary/20 group"
                            >
                                Confirmar Turno
                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {step === "success" && (
                <div className="text-center py-20 animate-in zoom-in-95 duration-500">
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                        <div className="relative bg-primary text-white p-6 rounded-full inline-block shadow-2xl shadow-primary/40">
                            <CheckCircle2 className="h-16 w-16" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-black mb-4 tracking-tighter">¡Turno agendado!</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-md mx-auto italic font-medium">Hemos enviado la confirmación a tu email. ¡Nos vemos pronto!</p>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-left max-w-sm mx-auto mb-12 shadow-sm">
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Resumen de reserva</p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary"><CalendarCheck2 className="h-4 w-4" /></div>
                                <p className="text-sm font-bold capitalize">{format(selectedDate, "EEEE d 'de' MMMM", { locale: es })}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary"><Clock className="h-4 w-4" /></div>
                                <p className="text-sm font-bold">{selectedTime} hs</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary"><Settings className="h-4 w-4" /></div>
                                <p className="text-sm font-bold">{selectedService.name}</p>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => setStep("service")} variant="outline" className="rounded-full px-10">Volver al inicio</Button>
                </div>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                <div>
                   <h1 className="text-3xl font-black tracking-tight">Panel de Control</h1>
                   <p className="text-slate-500 dark:text-slate-400 font-medium">Gestioná tus turnos y clientes desde un solo lugar.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="text" placeholder="Buscar cliente..." className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary transition-all" />
                    </div>
                    <Button className="rounded-xl px-6 flex gap-2">
                        <Plus className="h-4 w-4" />
                        Nuevo
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                    { label: "Turnos Hoy", val: "12", color: "text-blue-500" },
                    { label: "Pendientes", val: "3", color: "text-orange-500" },
                    { label: "Ingresos (Mes)", val: "$240k", color: "text-emerald-500" },
                    { label: "Nuevos Clientes", val: "+8", color: "text-purple-500" },
                ].map(stat => (
                    <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
                    </div>
                ))}
            </div>

            {/* List */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800">
                    <h3 className="font-black text-xl">Próximas Reservas</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] bg-slate-50 dark:bg-slate-950">
                                <th className="px-8 py-4">Cliente</th>
                                <th className="px-8 py-4">Servicio</th>
                                <th className="px-8 py-4">Fecha y Hora</th>
                                <th className="px-8 py-4">Estado</th>
                                <th className="px-8 py-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {reservations.map(res => (
                                <tr key={res.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                                {res.client.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm tracking-tight">{res.client}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">{res.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                                            {res.service}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold capitalize">{format(res.date, "EEEE d MMM", { locale: es })}</span>
                                            <span className="text-[10px] text-slate-400 font-black">{res.time} hs</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${res.status === "Confirmado" ? "bg-emerald-500 animate-pulse" : "bg-orange-500"}`} />
                                            <span className="text-xs font-bold">{res.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><Phone className="h-4 w-4" /></button>
                                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><Mail className="h-4 w-4" /></button>
                                            <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all"><MoreVertical className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 text-center">
                    <button className="text-xs font-bold text-primary hover:underline italic uppercase tracking-widest">Ver historial completo</button>
                </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <div className="text-center py-12 opacity-30 select-none pointer-events-none">
         <p className="text-[10px] font-black tracking-[0.5em] uppercase">Powered by MateTech</p>
      </div>
    </div>
  )
}
