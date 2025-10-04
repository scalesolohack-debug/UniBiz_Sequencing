"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, TrendingUp, Users, Heart, Zap, Baby, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

type Trend = {
  id: string
  name: string
  description: string
  icon: any
  demandLevel: "high" | "medium" | "growing"
  tags: string[]
}

export default function TrendsPage() {
  const router = useRouter()
  const [profession, setProfession] = useState<string>("")
  const [selectedTrends, setSelectedTrends] = useState<string[]>([])

  useEffect(() => {
    const storedProfession = sessionStorage.getItem("sequencing-profession")
    if (!storedProfession) {
      router.push("/sequencing")
      return
    }
    setProfession(storedProfession)
  }, [router])

  const trends: Trend[] = [
    {
      id: "rehab-recovery",
      name: "Rehab & Recovery",
      description: "Post-injury rehabilitation and pain management content",
      icon: Heart,
      demandLevel: "high",
      tags: ["therapeutic", "gentle", "corrective"],
    },
    {
      id: "mobility-performance",
      name: "Mobility & Performance",
      description: "Athletic performance enhancement and functional movement",
      icon: Zap,
      demandLevel: "high",
      tags: ["dynamic", "strength", "flexibility"],
    },
    {
      id: "prenatal-postnatal",
      name: "Prenatal & Postnatal",
      description: "Specialized content for pregnancy and postpartum recovery",
      icon: Baby,
      demandLevel: "growing",
      tags: ["safe", "adaptive", "supportive"],
    },
    {
      id: "digital-wellness",
      name: "Digital Wellness & Virtual Classes",
      description: "Online-optimized content for remote teaching",
      icon: Globe,
      demandLevel: "high",
      tags: ["virtual", "accessible", "scalable"],
    },
    {
      id: "stress-regulation",
      name: "Stress Regulation & Mental Health",
      description: "Mindfulness, breathwork, and nervous system regulation",
      icon: TrendingUp,
      demandLevel: "growing",
      tags: ["mindful", "restorative", "calming"],
    },
    {
      id: "senior-wellness",
      name: "Senior Wellness & Longevity",
      description: "Age-appropriate movement for older adults",
      icon: Users,
      demandLevel: "medium",
      tags: ["gentle", "balance", "mobility"],
    },
  ]

  const toggleTrend = (trendId: string) => {
    setSelectedTrends((prev) => (prev.includes(trendId) ? prev.filter((id) => id !== trendId) : [...prev, trendId]))
  }

  const handleContinue = () => {
    if (selectedTrends.length > 0) {
      sessionStorage.setItem("sequencing-trends", JSON.stringify(selectedTrends))
      router.push("/sequencing/audience")
    }
  }

  const handleBack = () => {
    router.push("/sequencing")
  }

  const getDemandColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-green-500/10 text-green-700 border-green-500/20"
      case "growing":
        return "bg-amber-500/10 text-amber-700 border-amber-500/20"
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-500/20"
    }
  }

  if (!profession) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Select Market Trends</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose 1-3 demand areas to align your content with market needs
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              ✓
            </div>
            <span className="text-sm font-medium">Profession</span>
          </div>
          <div className="w-12 h-0.5 bg-primary" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="text-sm font-medium">Trends</span>
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

        {/* Trends Grid */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trends.map((trend) => {
              const Icon = trend.icon
              const isSelected = selectedTrends.includes(trend.id)
              return (
                <Card
                  key={trend.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    isSelected ? "bg-primary/5 border-2 border-primary" : "hover:border-primary/50"
                  }`}
                  onClick={() => toggleTrend(trend.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${isSelected ? "bg-primary/10" : "bg-muted"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{trend.name}</h3>
                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
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
                      <p className="text-sm text-muted-foreground mb-3">{trend.description}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className={getDemandColor(trend.demandLevel)}>
                          {trend.demandLevel === "high" && "🔥 High Demand"}
                          {trend.demandLevel === "growing" && "📈 Growing"}
                          {trend.demandLevel === "medium" && "💡 Steady"}
                        </Badge>
                        {trend.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" size="lg" onClick={handleBack} className="gap-2 bg-transparent">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button size="lg" onClick={handleContinue} disabled={selectedTrends.length === 0} className="gap-2">
            Continue to Audience
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
