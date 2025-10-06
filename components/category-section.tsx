"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Scissors, Palette, Hand, Activity, Dumbbell, Apple, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CategorySection() {
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

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Built for Every Professional</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-light">
            Whether you're in beauty or wellness, OurBiz has everything you need to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Beauty Category */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-secondary">Beauty</h3>
            </div>

            <div className="grid gap-4">
              {beautyProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border hover:border-secondary/30 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-14 h-14 rounded-2xl ${professional.color} flex items-center justify-center`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-foreground">{professional.name}</h4>
                              <p className="text-sm text-muted-foreground font-light">
                                Manage clients, bookings & more
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Wellness Category */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Wellness</h3>
            </div>

            <div className="grid gap-4">
              {wellnessProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border hover:border-primary/30 bg-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-14 h-14 rounded-2xl ${professional.color} flex items-center justify-center`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-foreground">{professional.name}</h4>
                              <p className="text-sm text-muted-foreground font-light">
                                Grow your practice effortlessly
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
