"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Scissors, Palette, Hand, Activity, Dumbbell, Apple, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CategorySection() {
  const beautyProfessionals = [
    { name: "Makeup Artists", icon: Palette, color: "from-pink-500 to-rose-500", href: "/makeup-artists" },
    { name: "Nail Artists", icon: Hand, color: "from-purple-500 to-pink-500", href: "/nail-artists" },
    { name: "Hair Stylists", icon: Scissors, color: "from-orange-500 to-pink-500", href: "/hair-stylists" },
    { name: "Estheticians", icon: Sparkles, color: "from-violet-500 to-purple-500", href: "/estheticians" },
  ]

  const wellnessProfessionals = [
    { name: "Yoga Teachers", icon: Activity, color: "from-green-500 to-teal-500", href: "/yoga-teachers" },
    { name: "Pilates Instructors", icon: Dumbbell, color: "from-blue-500 to-cyan-500", href: "/pilates-instructors" },
    { name: "Physiotherapists", icon: Heart, color: "from-red-500 to-pink-500", href: "/physiotherapists" },
    { name: "Nutritionists", icon: Apple, color: "from-emerald-500 to-green-500", href: "/nutritionists" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Built for Every Professional</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Whether you're in beauty or wellness, OurBiz has everything you need to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Beauty Category */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Beauty
              </h3>
            </div>

            <div className="grid gap-4">
              {beautyProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-pink-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${professional.color} flex items-center justify-center`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900">{professional.name}</h4>
                              <p className="text-sm text-muted-foreground">Manage clients, bookings & more</p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Wellness
              </h3>
            </div>

            <div className="grid gap-4">
              {wellnessProfessionals.map((professional) => {
                const Icon = professional.icon
                return (
                  <Link key={professional.name} href={professional.href}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${professional.color} flex items-center justify-center`}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900">{professional.name}</h4>
                              <p className="text-sm text-muted-foreground">Grow your practice effortlessly</p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
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
