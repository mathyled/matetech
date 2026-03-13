"use client"

import { useState } from "react"
import { ShoppingCart, ArrowLeft, MessageCircle, Plus, Minus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Flat White", price: 4500, category: "Cafetería", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 2, name: "Avocado Toast", price: 8900, category: "Brunch", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 3, name: "Cheesecake de Frutos Rojos", price: 6200, category: "Pastelería", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 4, name: "Iced Latte", price: 4800, category: "Cafetería", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=300&h=300&auto=format&fit=crop" },
]

export default function CatalogDemo() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [cart, setCart] = useState<{ [key: number]: number }>({})
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = Object.values(cart).reduce((sum, q) => sum + q, 0)
  const cartTotal = Object.entries(cart).reduce((total, [id, q]) => {
    const product = products.find(p => p.id === parseInt(id))
    return total + (product ? product.price * q : 0)
  }, 0)

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[id] > 1) {
        newCart[id] -= 1
      } else {
        delete newCart[id]
      }
      return newCart
    })
  }

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const whatsappMessage = () => {
    let message = "Hola! Me interesa hacer un pedido:\n\n"
    Object.entries(cart).forEach(([id, q]) => {
      const product = products.find(p => p.id === parseInt(id))
      if (product) {
        message += `- ${q}x ${product.name} ($${product.price * q})\n`
      }
    })
    message += `\n*Total: $${cartTotal}*`
    return encodeURIComponent(message)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 px-6 py-4 backdrop-blur-md flex items-center justify-between border-b border-slate-200">
         <div className="flex items-center gap-3">
             <Link href="/" className="p-1 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><ArrowLeft className="h-5 w-5" /></Link>
             <h1 className="font-bold text-xl italic tracking-tight">Mate <span className="text-orange-600">Café</span></h1>
         </div>
         <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-slate-50 rounded-full transition-colors"
         >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                    {cartCount}
                </span>
            )}
         </button>
      </header>

      {/* Hero */}
      <div className="px-6 py-8">
          <div className="relative h-48 w-full overflow-hidden rounded-[2rem] shadow-xl">
              <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" alt="Cafe Banner" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-3xl font-bold tracking-tight">Experiencia Mate</h2>
                  <p className="text-white/80">Los mejores granos, directo a tu mesa.</p>
              </div>
          </div>
      </div>

      {/* Categorías */}
      <div className="flex gap-3 px-6 mb-8 overflow-x-auto no-scrollbar py-2">
          {["Todos", "Cafetería", "Pastelería", "Brunch"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full border text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? "bg-slate-900 text-white border-slate-900 shadow-lg" : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"}`}
              >
                  {cat}
              </button>
          ))}
      </div>

      {/* Grilla de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
          {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-3 flex gap-4">
                  <div className="relative h-24 w-24 flex-shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover rounded-2xl" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest mb-0.5">{product.category}</p>
                        <h3 className="font-bold text-base mb-1">{product.name}</h3>
                        <p className="font-bold text-slate-900 text-sm">${product.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-end">
                        {cart[product.id] ? (
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full p-1 border border-slate-200">
                             <button onClick={() => removeFromCart(product.id)} className="p-1 rounded-full bg-white shadow-sm"><Minus className="h-3 w-3" /></button>
                             <span className="text-sm font-bold w-4 text-center">{cart[product.id]}</span>
                             <button onClick={() => addToCart(product.id)} className="p-1 rounded-full bg-slate-900 text-white shadow-sm"><Plus className="h-3 w-3" /></button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product.id)}
                            className="bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors text-xs font-bold"
                          >
                              Agregar
                          </button>
                        )}
                      </div>
                  </div>
              </div>
          ))}
      </div>

      {/* Flotante WhatsApp */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-md animate-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-[#25D366] text-white py-4 rounded-3xl font-bold flex items-center justify-between px-8 shadow-2xl shadow-green-500/30 active:scale-[0.98] transition-all"
            >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <span>Ver Carrito ({cartCount})</span>
                </div>
                <span className="text-lg font-black">${cartTotal}</span>
            </button>
        </div>
      )}

      {/* Modal Carrito */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="w-full max-w-md bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-bold italic">Tu <span className="text-orange-600">Pedido</span></h3>
                 <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="h-6 w-6" /></button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                {Object.entries(cart).length === 0 ? (
                  <p className="text-center text-slate-400 py-12 italic">Tu carrito está vacío...</p>
                ) : (
                  <div className="space-y-6">
                    {Object.entries(cart).map(([id, q]) => {
                      const product = products.find(p => p.id === parseInt(id))
                      if (!product) return null
                      return (
                        <div key={id} className="flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <div className="relative h-14 w-14 flex-shrink-0">
                                <Image src={product.image} alt={product.name} fill className="object-cover rounded-xl" />
                              </div>
                              <div>
                                <h4 className="font-bold text-sm">{product.name}</h4>
                                <p className="text-xs text-slate-500 tracking-wider font-medium">${product.price} c/u</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-3 bg-slate-50 rounded-full p-1.5 border border-slate-100">
                              <button onClick={() => removeFromCart(product.id)} className="p-1 rounded-full bg-white shadow-sm border border-slate-100"><Minus className="h-3 w-3" /></button>
                              <span className="text-sm font-bold w-4 text-center">{q}</span>
                              <button onClick={() => addToCart(product.id)} className="p-1 rounded-full bg-slate-900 text-white"><Plus className="h-3 w-3" /></button>
                           </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 pt-6">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-slate-500 font-medium">Total Estimado</span>
                   <span className="text-3xl font-black text-slate-900">${cartTotal}</span>
                </div>
                <a 
                  href={`https://wa.me/5491100000000?text=${whatsappMessage()}`}
                  target="_blank"
                  className={`w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 active:scale-95 transition-transform ${Object.keys(cart).length === 0 ? 'opacity-50 pointer-events-none' : ''}`}
                >
                    <MessageCircle className="h-6 w-6" />
                    Enviar Pedido por WhatsApp
                </a>
              </div>
           </div>
        </div>
      )}
    </div>
  )
}
