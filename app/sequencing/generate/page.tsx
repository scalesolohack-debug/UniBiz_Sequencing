"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const generationSteps = [
  { id: 1, label: "Analyzing audience profile", duration: 2000 },
  { id: 2, label: "Researching pose sequences", duration: 2500 },
  { id: 3, label: "Optimizing transitions", duration: 2000 },
  { id: 4, label: "Adding safety modifications", duration: 1500 },
  { id: 5, label: "Finalizing sequence", duration: 1000 },
]

export default function GeneratePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Extract all parameters
  const profession = searchParams.get("profession")
  const trend = searchParams.get("trend")
  const experience = searchParams.get("experience")
  const age = searchParams.get("age")
  const conditions = searchParams.get("conditions")?.split(",").filter(Boolean) || []
  const goals = searchParams.get("goals")?.split(",").filter(Boolean) || []
  const size = searchParams.get("size")
  const duration = searchParams.get("duration")

  useEffect(() => {
    const stepIndex = 0
    const progressValue = 0

    const runGeneration = async () => {
      for (let i = 0; i < generationSteps.length; i++) {
        setCurrentStep(i)

        // Animate progress for this step
        const stepProgress = (i / generationSteps.length) * 100
        const nextStepProgress = ((i + 1) / generationSteps.length) * 100

        const startTime = Date.now()
        const stepDuration = generationSteps[i].duration

        const animateProgress = () => {
          const elapsed = Date.now() - startTime
          const stepProgressPercent = Math.min(elapsed / stepDuration, 1)
          const currentProgress = stepProgress + (nextStepProgress - stepProgress) * stepProgressPercent

          setProgress(currentProgress)

          if (elapsed < stepDuration) {
            requestAnimationFrame(animateProgress)
          }
        }

        animateProgress()
        await new Promise((resolve) => setTimeout(resolve, stepDuration))
      }

      setProgress(100)
      setIsComplete(true)

      // Navigate to sequence builder after a brief delay
      setTimeout(() => {
        const params = new URLSearchParams()
        if (profession) params.set("profession", profession)
        if (trend) params.set("trend", trend)
        if (experience) params.set("experience", experience)
        if (age) params.set("age", age)
        if (conditions.length > 0) params.set("conditions", conditions.join(","))
        if (goals.length > 0) params.set("goals", goals.join(","))
        if (size) params.set("size", size)
        if (duration) params.set("duration", duration)

        router.push(`/sequencing/builder?${params.toString()}`)
      }, 1500)
    }

    runGeneration()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <Card className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              {isComplete ? (
                <CheckCircle2 className="w-8 h-8 text-white" />
              ) : (
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isComplete ? "Sequence Ready!" : "Generating Your Sequence"}
            </h1>
            <p className="text-gray-600">
              {isComplete
                ? "Your personalized yoga sequence has been created"
                : "AI is crafting a personalized sequence for your class"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-gray-600 text-center mt-2">{Math.round(progress)}% complete</p>
          </div>

          {/* Generation Steps */}
          <div className="space-y-3 mb-8">
            {generationSteps.map((step, index) => {
              const isActive = index === currentStep && !isComplete
              const isDone = index < currentStep || isComplete

              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-violet-50 border-2 border-violet-300"
                      : isDone
                        ? "bg-green-50 border-2 border-green-300"
                        : "bg-gray-50 border-2 border-gray-200"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-violet-500" : isDone ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : isActive ? (
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    ) : (
                      <span className="text-white text-sm font-semibold">{step.id}</span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-violet-900" : isDone ? "text-green-900" : "text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Context Summary */}
          <Card className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Sequence Parameters:</h3>
            <div className="flex flex-wrap gap-2">
              {profession && (
                <Badge variant="secondary" className="bg-white text-violet-700 border-violet-200">
                  {profession}
                </Badge>
              )}
              {trend && (
                <Badge variant="secondary" className="bg-white text-purple-700 border-purple-200">
                  {trend}
                </Badge>
              )}
              {experience && (
                <Badge variant="secondary" className="bg-white text-pink-700 border-pink-200">
                  {experience}
                </Badge>
              )}
              {age && (
                <Badge variant="secondary" className="bg-white text-indigo-700 border-indigo-200">
                  {age}
                </Badge>
              )}
              {duration && (
                <Badge variant="secondary" className="bg-white text-blue-700 border-blue-200">
                  {duration} min
                </Badge>
              )}
              {size && (
                <Badge variant="secondary" className="bg-white text-green-700 border-green-200">
                  {size} students
                </Badge>
              )}
              {goals.map((goal) => (
                <Badge key={goal} variant="secondary" className="bg-white text-orange-700 border-orange-200">
                  {goal}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Loading Message */}
          {!isComplete && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">This usually takes 10-15 seconds...</p>
            </div>
          )}

          {/* Success Message */}
          {isComplete && (
            <div className="mt-6 text-center">
              <p className="text-sm text-green-600 font-medium">Redirecting to sequence builder...</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
