"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users, TrendingUp, Clock, Target } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const experienceLevels = [
  { value: "beginner", label: "Beginner", description: "New to yoga or limited experience" },
  { value: "intermediate", label: "Intermediate", description: "Regular practice, familiar with basic poses" },
  { value: "advanced", label: "Advanced", description: "Experienced practitioners, comfortable with complex poses" },
  { value: "mixed", label: "Mixed Levels", description: "Variety of experience levels" },
]

const ageGroups = [
  { value: "young-adults", label: "Young Adults (18-35)", icon: "🧑" },
  { value: "adults", label: "Adults (36-55)", icon: "👨" },
  { value: "seniors", label: "Seniors (55+)", icon: "👴" },
  { value: "all-ages", label: "All Ages", icon: "👥" },
]

const physicalConditions = [
  { value: "back-pain", label: "Back Pain", color: "bg-red-100 text-red-700 border-red-200" },
  { value: "joint-issues", label: "Joint Issues", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { value: "pregnancy", label: "Pregnancy", color: "bg-pink-100 text-pink-700 border-pink-200" },
  { value: "stress-anxiety", label: "Stress/Anxiety", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { value: "flexibility", label: "Limited Flexibility", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { value: "strength", label: "Building Strength", color: "bg-green-100 text-green-700 border-green-200" },
]

const goals = [
  { value: "stress-relief", label: "Stress Relief", icon: "🧘" },
  { value: "flexibility", label: "Increase Flexibility", icon: "🤸" },
  { value: "strength", label: "Build Strength", icon: "💪" },
  { value: "balance", label: "Improve Balance", icon: "⚖️" },
  { value: "mindfulness", label: "Mindfulness", icon: "🧠" },
  { value: "weight-loss", label: "Weight Management", icon: "🏃" },
]

export default function AudiencePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const profession = searchParams.get("profession")
  const trend = searchParams.get("trend")

  const [experienceLevel, setExperienceLevel] = useState("intermediate")
  const [ageGroup, setAgeGroup] = useState("adults")
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedGoals, setSelectedGoals] = useState<string[]>(["stress-relief"])
  const [classSize, setClassSize] = useState([15])
  const [duration, setDuration] = useState([60])

  const toggleCondition = (value: string) => {
    setSelectedConditions((prev) => (prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]))
  }

  const toggleGoal = (value: string) => {
    setSelectedGoals((prev) => (prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]))
  }

  const handleContinue = () => {
    const params = new URLSearchParams()
    if (profession) params.set("profession", profession)
    if (trend) params.set("trend", trend)
    params.set("experience", experienceLevel)
    params.set("age", ageGroup)
    params.set("conditions", selectedConditions.join(","))
    params.set("goals", selectedGoals.join(","))
    params.set("size", classSize[0].toString())
    params.set("duration", duration[0].toString())

    router.push(`/sequencing/generate?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Define Your Audience</h1>
              <p className="text-gray-600">Help us understand who you're teaching</p>
            </div>
          </div>

          {/* Context Pills */}
          {(profession || trend) && (
            <div className="flex gap-2 mt-4">
              {profession && (
                <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                  {profession}
                </Badge>
              )}
              {trend && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                  {trend}
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Experience Level */}
          <Card className="p-6">
            <div className="mb-4">
              <Label className="text-lg font-semibold text-gray-900">Experience Level</Label>
              <p className="text-sm text-gray-600 mt-1">What's the typical experience level of your students?</p>
            </div>
            <RadioGroup value={experienceLevel} onValueChange={setExperienceLevel} className="space-y-3">
              {experienceLevels.map((level) => (
                <div
                  key={level.value}
                  className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    experienceLevel === level.value
                      ? "border-violet-500 bg-violet-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setExperienceLevel(level.value)}
                >
                  <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={level.value} className="font-semibold text-gray-900 cursor-pointer">
                      {level.label}
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">{level.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </Card>

          {/* Age Group */}
          <Card className="p-6">
            <div className="mb-4">
              <Label className="text-lg font-semibold text-gray-900">Age Group</Label>
              <p className="text-sm text-gray-600 mt-1">Who are you primarily teaching?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ageGroups.map((group) => (
                <div
                  key={group.value}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer text-center ${
                    ageGroup === group.value
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setAgeGroup(group.value)}
                >
                  <div className="text-3xl mb-2">{group.icon}</div>
                  <p className="text-sm font-medium text-gray-900">{group.label}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Physical Conditions */}
          <Card className="p-6">
            <div className="mb-4">
              <Label className="text-lg font-semibold text-gray-900">Physical Considerations</Label>
              <p className="text-sm text-gray-600 mt-1">Select any conditions or limitations to consider (optional)</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {physicalConditions.map((condition) => (
                <Badge
                  key={condition.value}
                  variant="outline"
                  className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                    selectedConditions.includes(condition.value)
                      ? condition.color
                      : "bg-white hover:bg-gray-50 border-gray-300"
                  }`}
                  onClick={() => toggleCondition(condition.value)}
                >
                  {condition.label}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Goals */}
          <Card className="p-6">
            <div className="mb-4">
              <Label className="text-lg font-semibold text-gray-900">Primary Goals</Label>
              <p className="text-sm text-gray-600 mt-1">What do your students want to achieve?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {goals.map((goal) => (
                <div
                  key={goal.value}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    selectedGoals.includes(goal.value)
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleGoal(goal.value)}
                >
                  <div className="text-2xl mb-2">{goal.icon}</div>
                  <p className="text-sm font-medium text-gray-900">{goal.label}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Class Details */}
          <Card className="p-6">
            <div className="space-y-6">
              {/* Class Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Label className="text-lg font-semibold text-gray-900">Expected Class Size</Label>
                    <p className="text-sm text-gray-600 mt-1">How many students typically attend?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-violet-600" />
                    <span className="text-2xl font-bold text-violet-600">{classSize[0]}</span>
                    <span className="text-gray-600">students</span>
                  </div>
                </div>
                <Slider value={classSize} onValueChange={setClassSize} min={1} max={50} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <Label className="text-lg font-semibold text-gray-900">Class Duration</Label>
                    <p className="text-sm text-gray-600 mt-1">How long is your typical class?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-2xl font-bold text-purple-600">{duration[0]}</span>
                    <span className="text-gray-600">minutes</span>
                  </div>
                </div>
                <Slider value={duration} onValueChange={setDuration} min={15} max={120} step={15} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>15 min</span>
                  <span>60 min</span>
                  <span>120 min</span>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Insights */}
          <Card className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Insights</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Based on your selections, we'll create sequences that are safe and effective for{" "}
                  <span className="font-semibold">{experienceLevel}</span> students aged{" "}
                  <span className="font-semibold">{ageGroup}</span>. The {duration[0]}-minute class will be optimized
                  for {selectedGoals.length > 0 ? selectedGoals.join(", ") : "general wellness"}.
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => router.back()} className="flex-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={handleContinue}
              className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
              disabled={selectedGoals.length === 0}
            >
              Generate Sequence
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
