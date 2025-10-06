"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowRight } from "lucide-react"

export function CollaborationSection() {
  const collaborations = [
    {
      professional1: "Yoga Teacher",
      professional2: "Nutritionist",
      benefit: "Holistic wellness programs",
      description: "Combine movement and nutrition for complete client transformation",
      icon1: "🧘",
      icon2: "🥗",
    },
    {
      professional1: "Makeup Artist",
      professional2: "Hair Stylist",
      benefit: "Complete beauty packages",
      description: "Offer full bridal and event styling services together",
      icon1: "💄",
      icon2: "✂️",
    },
    {
      professional1: "Physiotherapist",
      professional2: "Pilates Instructor",
      benefit: "Rehabilitation & strength",
      description: "Provide comprehensive recovery and conditioning programs",
      icon1: "🩺",
      icon2: "💪",
    },
    {
      professional1: "Nutritionist",
      professional2: "Fitness Coach",
      benefit: "Complete lifestyle transformation",
      description: "Deliver integrated diet and exercise solutions",
      icon1: "🥗",
      icon2: "🏋️",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Cross-Selling Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">Grow Together, Earn More</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-light">
            Connect with complementary professionals and offer comprehensive packages to your clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {collaborations.map((collab, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border bg-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Professional Icons */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">
                      {collab.icon1}
                    </div>
                    <div className="flex flex-col items-center">
                      <ArrowRight className="w-6 h-6 text-primary mb-1" />
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-3xl">
                      {collab.icon2}
                    </div>
                  </div>

                  {/* Collaboration Details */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                      <span>{collab.professional1}</span>
                      <span>+</span>
                      <span>{collab.professional2}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{collab.benefit}</h3>
                    <p className="text-sm text-muted-foreground font-light">{collab.description}</p>
                  </div>

                  {/* CTA Badge */}
                  <div className="pt-4 flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full group-hover:bg-primary/10 transition-colors">
                      <span className="text-xs font-medium text-primary">Enable collaboration</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-light">
            Build your professional network and unlock new revenue streams with OurBiz
          </p>
        </div>
      </div>
    </section>
  )
}
