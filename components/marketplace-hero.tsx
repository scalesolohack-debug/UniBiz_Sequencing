"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Users } from "lucide-react"
import { useState, useEffect } from "react"

export function MarketplaceHero() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-muted/30 to-primary/10" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => setIsExpanded((prev) => !prev)} className="relative cursor-pointer group">
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-700 hover:scale-105">
                {isExpanded ? "OurBiz" : "OB"}
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-secondary animate-pulse group-hover:rotate-12 transition-transform" />
              </div>
            </button>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in">
            Your All-in-One Platform to Grow, Connect & Thrive
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Bringing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Personalized Self-Care
            </span>{" "}
            to the World
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl mx-auto font-light">
            One platform. All your tools. Grow your beauty or wellness business with confidence.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Users className="w-5 h-5" />
          <p className="text-sm md:text-base font-light">
            Join 5,000+ professionals already transforming their practice with OurBiz
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  )
}
