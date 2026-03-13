"use client"

import { useState } from "react"
import { ShoppingCart, Search, Menu, ArrowLeft, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  { id: 1, name: "Flat White", price: 4500, category: "Cafetería", image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 2, name: "Avocado Toast", price: 8900, category: "Brunch", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 3, name: "Cheesecake de Frutos Rojos", price: 6200, category: "Pastelería", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=300&h=300&auto=format&fit=crop" },
  { id: 4, name: "Iced Latte", price: 4800, category: "Cafetería", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=300&h=300&auto=format&fit=crop" },
]

export default function CatalogDemo() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 px-6 py-4 backdrop-blur-md flex items-center justify-between border-b border-slate-200">
         <div className="flex items-center gap-3">
             <Link href="/" className="p-1 rounded-full border border-slate-200"><ArrowLeft className="h-5 w-5" /></Link>
             <h1 className="font-bold text-xl italic">Mate <span className="text-orange-600">Cafe</span></h1>
         </div>
         <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                </span>
            )}
         </div>
      </header>

      {/* Hero Category */}
      <div className="px-6 py-8">
          <div className="relative h-40 w-full overflow-hidden rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" alt="Cafe Banner" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
                  <h2 className="text-white text-3xl font-bold tracking-tight">Nueva temporada</h2>
                  <p className="text-white/80">Explora nuestros sabores premium</p>
              </div>
          </div>
      </div>

      {/* Categories */}
      <div className="flex gap-4 px-6 mb-8 overflow-x-auto no-scrollbar">
          {["All", "Cafetería", "Pastelería", "Brunch"].map((cat, i) => (
              <button key={cat} className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200"}`}>
                  {cat}
              </button>
          ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 px-6">
          {products.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <div className="relative aspect-square">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                      <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                      <h3 className="font-bold text-sm mb-2 line-clamp-1">{product.name}</h3>
                      <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">${product.price}</span>
                          <button 
                            onClick={() => setCartCount(c => c + 1)}
                            className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
                          >
                              <ShoppingCart className="h-4 w-4" />
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      {/* Floating Call to Action */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-md">
          <button className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-green-500/20 active:scale-95 transition-transform">
              <MessageCircle className="h-6 w-6" />
              Pedir por WhatsApp ({cartCount})
          </button>
      </div>
    </div>
  )
}
