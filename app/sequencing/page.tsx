"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Activity, Heart, Stethoscope, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

type Profession = "yoga" | "pilates" | "physiotherapy" | "mixed"

export default function SequencingPage() {
  const router = useRouter()
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null)

  const professions = [
    {
      id: "yoga" as Profession,
      name: "Yoga",
      icon: Activity,
      description: "Traditional and modern yoga practices",
      color: "from-green-400/20 to-emerald-400/20",
      borderColor: "border-green-400/30",
    },
    {
      id: "pilates" as Profession,
      name: "Pilates",
      icon: Heart,
      description: "Core strength and flexibility training",
      color: "from-purple-400/20 to-pink-400/20",
      borderColor: "border-purple-400/30",
    },
    {
      id: "physiotherapy" as Profession,
      name: "Physiotherapy",
      icon: Stethoscope,
      description: "Rehabilitation and therapeutic movement",
      color: "from-blue-400/20 to-cyan-400/20",
      borderColor: "border-blue-400/30",
    },
    {
      id: "mixed" as Profession,
      name: "Mixed / Hybrid",
      icon: Sparkles,
      description: "Combine multiple disciplines",
      color: "from-amber-400/20 to-orange-400/20",
      borderColor: "border-amber-400/30",
    },
  ]

  const handleContinue = () => {
    if (selectedProfession) {
      // Store selection in sessionStorage for the flow
      sessionStorage.setItem("sequencing-profession", selectedProfession)
      router.push("/sequencing/trends")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Create Market-Driven Content</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Build demand-aligned sequences in under 5 minutes with AI-powered insights
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="text-sm font-medium">Profession</span>
          </div>
          <div className="w-12 h-0.5 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="text-sm text-muted-foreground">Trends</span>
          </div>
          <div className="w-12 h-0.5 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="text-sm text-muted-foreground">Audience</span>
          </div>
          <div className="w-12 h-0.5 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
              4
            </div>
            <span className="text-sm text-muted-foreground">Generate</span>
          </div>
        </div>

        {/* Profession Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Select Your Profession</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professions.map((profession) => {
              const Icon = profession.icon
              const isSelected = selectedProfession === profession.id
              return (
                <Card
                  key={profession.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    isSelected
                      ? `bg-gradient-to-br ${profession.color} border-2 ${profession.borderColor}`
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedProfession(profession.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isSelected ? "bg-background/50" : "bg-muted"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{profession.name}</h3>
                      <p className="text-sm text-muted-foreground">{profession.description}</p>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <Button size="lg" onClick={handleContinue} disabled={!selectedProfession} className="gap-2">
            Continue to Trends
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
