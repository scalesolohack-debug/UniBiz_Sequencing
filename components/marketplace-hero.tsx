"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function MarketplaceHero() {
  const [showFull, setShowFull] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowFull(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Animated Brand Name */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent transition-all duration-1000">
                {showFull ? "OurBiz" : "OB"}
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in">
            The Operating System for Beauty & Wellness Professionals
          </p>
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Bringing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Personalized Self-Care
            </span>{" "}
            to the World
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            One platform. All your tools. Grow your beauty or wellness business with confidence.
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  )
}
