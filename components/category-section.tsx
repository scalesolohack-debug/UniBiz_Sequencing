"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Scissors, Palette, Hand, Activity, Dumbbell, Apple, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function CategorySection() {
  const [customProfession, setCustomProfession] = useState("")

  const beautyProfessionals = [
    { name: "Makeup Artists", icon: Palette, color: "bg-[#D4A59A]", href: "/makeup-artists" },
    { name: "Nail Artists", icon: Hand, color: "bg-[#C9B8A8]", href: "/nail-artists" },
    { name: "Hair Stylists", icon: Scissors, color: "bg-[#B8A896]", href: "/hair-stylists" },
    { name: "Estheticians", icon: Sparkles, color: "bg-[#A4846F]", href: "/estheticians" },
  ]

  const wellnessProfessionals = [
    { name: "Yoga Teachers", icon: Activity, color: "bg-[#6B9080]", href: "/yoga-teachers" },
    { name: "Pilates Instructors", icon: Dumbbell, color: "bg-[#7FA99B]", href: "/pilates-instructors" },
    { name: "Physiotherapists", icon: Heart, color: "bg-[#8FAA96]", href: "/physiotherapists" },
    { name: "Nutritionists", icon: Apple, color: "bg-[#9BB59A]", href: "/nutritionists" },
  ]

  const handleSubmitProfession = (e: React.FormEvent) => {
    e.preventDefault()
    if (customProfession.trim()) {
      console.log("[v0] Custom profession submitted:", customProfession)
      // TODO: Handle custom profession submission
      setCustomProfession("")
    }
  }

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Built for Every Professional</h2>
          <p className="text-base text-muted-foreground text-balance max-w-2xl mx-auto font-light">
            Whether you're in beauty or wellness, OurBiz has everything you need to thrive.
          </p>
        </div>

        <div className="space-y-8">
          {/* Beauty Category - Horizontal Strip */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-secondary">Beauty</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {beautyProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer border hover:border-secondary/30 bg-card">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl ${professional.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                              {professional.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Wellness Category - Horizontal Strip */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary">Wellness</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {wellnessProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer border hover:border-primary/30 bg-card">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl ${professional.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                              {professional.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="pt-4">
            <Card className="border-dashed border-2 border-muted-foreground/30 bg-muted/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmitProfession} className="flex flex-col sm:flex-row gap-3 items-center">
                  <div className="flex items-center gap-3 flex-1 w-full">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <Plus className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter your profession..."
                      value={customProfession}
                      onChange={(e) => setCustomProfession(e.target.value)}
                      className="flex-1 bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
                  Don't see your profession? Let us know and we'll add it!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
