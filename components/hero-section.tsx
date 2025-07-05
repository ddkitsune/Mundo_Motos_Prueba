"use client"

import Image from "next/image"
import { ChevronRight, ChevronDown, Zap, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_70%)]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Motorcycle Image with Parallax */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
              <div
                className="relative w-full max-w-2xl transform transition-transform duration-1000 hover:scale-105"
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
                  alt="Motocicleta Deportiva"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain relative z-10 drop-shadow-2xl animate-fade-in"
                  priority
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Content with Stagger Animation */}
            <div className="text-center lg:text-left text-white space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-sm font-medium tracking-[0.2em] uppercase opacity-90 text-orange-400 animate-slide-down">
                  Tu Destino Motociclista
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none animate-slide-up">
                  MUNDO
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                    MOTOS
                  </span>
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-md mx-auto lg:mx-0 leading-relaxed animate-fade-in-delayed">
                  Motos nuevas, usadas, partes originales y accesorios. Todo lo que necesitas para tu pasión sobre dos
                  ruedas.
                </p>
              </div>

              {/* Animated Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: Zap, text: "Entrega Rápida" },
                  { icon: Shield, text: "Garantía Total" },
                  { icon: Wrench, text: "Servicio Técnico" },
                ].map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-sm animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <feature.icon className="w-4 h-4 text-orange-400" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delayed">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-300 px-8 py-4 text-base font-bold group transform hover:scale-105"
                >
                  Ver Motos
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 px-8 py-4 text-base font-bold transform hover:scale-105"
                >
                  Ver Partes
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-12 bg-white opacity-50 animate-pulse"></div>
            <ChevronDown className="w-4 h-4 text-white opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
