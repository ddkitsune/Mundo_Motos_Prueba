"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Shield, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const featuredMotorcycles = [
  {
    id: 1,
    name: "Yamaha YZF-R1",
    category: "Deportiva",
    price: "$18,999",
    originalPrice: "$21,999",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&crop=center",
    features: ["1000cc", "200 HP", "ABS", "Control de Tracción"],
    rating: 4.9,
    isNew: true,
    discount: "13% OFF",
  },
  {
    id: 2,
    name: "Harley Davidson Street 750",
    category: "Cruiser",
    price: "$7,599",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=400&fit=crop&crop=center",
    features: ["750cc", "Refrigeración Líquida", "ABS", "Estilo Clásico"],
    rating: 4.7,
    isNew: false,
    discount: null,
  },
  {
    id: 3,
    name: "BMW R1250GS",
    category: "Adventure",
    price: "$17,995",
    originalPrice: "$19,995",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&crop=center",
    features: ["1250cc", "136 HP", "Suspensión Electrónica", "Modos de Conducción"],
    rating: 4.8,
    isNew: true,
    discount: "10% OFF",
  },
]

export function FeaturedMotorcyclesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Motos Destacadas</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Las mejores motos seleccionadas especialmente para ti, con los mejores precios y garantía total.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredMotorcycles.map((motorcycle, index) => (
            <div
              key={motorcycle.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              {/* Image Section */}
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                {motorcycle.discount && (
                  <Badge className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600 text-white animate-pulse">
                    {motorcycle.discount}
                  </Badge>
                )}
                {motorcycle.isNew && (
                  <Badge className="absolute top-4 right-4 z-10 bg-green-500 hover:bg-green-600 text-white animate-bounce">
                    NUEVO
                  </Badge>
                )}
                <Image
                  src={motorcycle.image || "/placeholder.svg"}
                  alt={motorcycle.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600 group-hover:bg-orange-50 transition-colors"
                  >
                    {motorcycle.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" />
                    <span className="text-sm font-medium">{motorcycle.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {motorcycle.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-orange-600">{motorcycle.price}</span>
                  {motorcycle.originalPrice && (
                    <span className="text-lg text-slate-400 line-through">{motorcycle.originalPrice}</span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {motorcycle.features.map((feature, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform hover:scale-105 transition-all">
                    Ver Detalles
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent transform hover:scale-105 transition-all"
                  >
                    Contactar
                  </Button>
                </div>

                {/* Quick Features */}
                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Zap className="w-3 h-3 text-orange-500" />
                    <span>Entrega Rápida</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Shield className="w-3 h-3 text-green-500" />
                    <span>Garantía</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent transform hover:scale-105 transition-all"
          >
            Ver Todas las Motos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
