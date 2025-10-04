"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Download,
  Save,
  Sparkles,
  GripVertical,
  Plus,
  Trash2,
  Clock,
  Users,
  Edit3,
  Eye,
  Lightbulb,
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface Pose {
  id: string
  name: string
  duration: number
  instructions: string
  modifications: string[]
  benefits: string[]
  imageEmoji: string
}

const samplePoses: Pose[] = [
  {
    id: "1",
    name: "Mountain Pose (Tadasana)",
    duration: 2,
    instructions: "Stand tall with feet hip-width apart, arms at sides, weight evenly distributed.",
    modifications: ["Use wall for balance", "Feet wider for stability"],
    benefits: ["Improves posture", "Builds foundation"],
    imageEmoji: "🧘",
  },
  {
    id: "2",
    name: "Forward Fold (Uttanasana)",
    duration: 3,
    instructions: "Hinge at hips, fold forward, let head hang heavy, hands toward floor or shins.",
    modifications: ["Bend knees generously", "Use blocks under hands"],
    benefits: ["Stretches hamstrings", "Calms nervous system"],
    imageEmoji: "🙆",
  },
  {
    id: "3",
    name: "Downward Dog (Adho Mukha Svanasana)",
    duration: 5,
    instructions: "From hands and knees, lift hips up and back, forming inverted V-shape.",
    modifications: ["Bend knees", "Hands on blocks"],
    benefits: ["Full body stretch", "Builds strength"],
    imageEmoji: "🐕",
  },
  {
    id: "4",
    name: "Warrior I (Virabhadrasana I)",
    duration: 4,
    instructions: "Step right foot forward, bend knee over ankle, arms reach up, back leg straight.",
    modifications: ["Shorten stance", "Hands on hips"],
    benefits: ["Strengthens legs", "Opens chest"],
    imageEmoji: "🤺",
  },
  {
    id: "5",
    name: "Warrior II (Virabhadrasana II)",
    duration: 4,
    instructions: "From Warrior I, open hips and arms to sides, gaze over front hand.",
    modifications: ["Straighten front leg slightly", "Use wall for support"],
    benefits: ["Builds stamina", "Improves focus"],
    imageEmoji: "⚔️",
  },
  {
    id: "6",
    name: "Triangle Pose (Trikonasana)",
    duration: 3,
    instructions: "Straighten front leg, reach forward and down, hand to shin or block, top arm up.",
    modifications: ["Hand higher on leg", "Use block"],
    benefits: ["Stretches sides", "Strengthens legs"],
    imageEmoji: "📐",
  },
  {
    id: "7",
    name: "Tree Pose (Vrksasana)",
    duration: 3,
    instructions: "Balance on left foot, right foot to inner thigh or calf, hands at heart or overhead.",
    modifications: ["Foot to ankle", "Use wall"],
    benefits: ["Improves balance", "Strengthens ankles"],
    imageEmoji: "🌳",
  },
  {
    id: "8",
    name: "Seated Forward Fold (Paschimottanasana)",
    duration: 5,
    instructions: "Sit with legs extended, hinge at hips, fold forward over legs.",
    modifications: ["Bend knees", "Use strap around feet"],
    benefits: ["Stretches back", "Calms mind"],
    imageEmoji: "🪑",
  },
  {
    id: "9",
    name: "Bridge Pose (Setu Bandhasana)",
    duration: 4,
    instructions: "Lie on back, feet flat, lift hips up, clasp hands under back.",
    modifications: ["Block under sacrum", "Feet wider"],
    benefits: ["Strengthens back", "Opens chest"],
    imageEmoji: "🌉",
  },
  {
    id: "10",
    name: "Child's Pose (Balasana)",
    duration: 5,
    instructions: "Knees wide, sit back on heels, fold forward, arms extended or at sides.",
    modifications: ["Pillow under forehead", "Knees together"],
    benefits: ["Resting pose", "Gentle stretch"],
    imageEmoji: "🧎",
  },
  {
    id: "11",
    name: "Corpse Pose (Savasana)",
    duration: 10,
    instructions: "Lie flat on back, arms at sides, palms up, legs relaxed, close eyes.",
    modifications: ["Pillow under knees", "Blanket for warmth"],
    benefits: ["Deep relaxation", "Integration"],
    imageEmoji: "😌",
  },
]

export default function BuilderPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [sequenceName, setSequenceName] = useState("Morning Flow Sequence")
  const [sequenceDescription, setSequenceDescription] = useState(
    "A balanced sequence designed for intermediate practitioners focusing on stress relief and flexibility.",
  )
  const [poses, setPoses] = useState<Pose[]>(samplePoses)
  const [selectedPose, setSelectedPose] = useState<Pose | null>(null)
  const [showAISuggestions, setShowAISuggestions] = useState(true)

  const totalDuration = poses.reduce((sum, pose) => sum + pose.duration, 0)

  const handleSave = () => {
    // In a real app, this would save to a database
    alert("Sequence saved successfully!")
  }

  const handleExport = () => {
    const params = new URLSearchParams(searchParams)
    params.set("name", sequenceName)
    router.push(`/sequencing/export?${params.toString()}`)
  }

  const deletePose = (id: string) => {
    setPoses(poses.filter((p) => p.id !== id))
    if (selectedPose?.id === id) {
      setSelectedPose(null)
    }
  }

  const updatePoseDuration = (id: string, duration: number) => {
    setPoses(poses.map((p) => (p.id === id ? { ...p, duration } : p)))
    if (selectedPose?.id === id) {
      setSelectedPose({ ...selectedPose, duration })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.push("/sequencing")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Start
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sequence Builder</h1>
              <p className="text-gray-600">Customize your AI-generated yoga sequence</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button
                onClick={handleExport}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Sequence Details & Poses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sequence Info */}
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-900">
                    Sequence Name
                  </Label>
                  <Input
                    id="name"
                    value={sequenceName}
                    onChange={(e) => setSequenceName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-sm font-semibold text-gray-900">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={sequenceDescription}
                    onChange={(e) => setSequenceDescription(e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-violet-600" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{totalDuration}</span> minutes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{poses.length}</span> poses
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pose List */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Sequence Flow</h2>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Pose
                </Button>
              </div>

              <div className="space-y-2">
                {poses.map((pose, index) => (
                  <div
                    key={pose.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedPose?.id === pose.id
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                    onClick={() => setSelectedPose(pose)}
                  >
                    <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {pose.imageEmoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-500">#{index + 1}</span>
                        <h3 className="text-sm font-semibold text-gray-900 truncate">{pose.name}</h3>
                      </div>
                      <p className="text-xs text-gray-600">{pose.duration} min</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        deletePose(pose.id)
                      }}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Details & AI Suggestions */}
          <div className="space-y-6">
            {/* Pose Details */}
            {selectedPose ? (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Pose Details</h2>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedPose(null)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-4xl mx-auto">
                    {selectedPose.imageEmoji}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{selectedPose.name}</h3>
                    <p className="text-sm text-gray-600">{selectedPose.instructions}</p>
                  </div>

                  <div>
                    <Label htmlFor="duration" className="text-sm font-semibold text-gray-900">
                      Duration (minutes)
                    </Label>
                    <Input
                      id="duration"
                      type="number"
                      value={selectedPose.duration}
                      onChange={(e) => updatePoseDuration(selectedPose.id, Number.parseInt(e.target.value) || 0)}
                      className="mt-1"
                      min={1}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Modifications</h4>
                    <div className="space-y-1">
                      {selectedPose.modifications.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPose.benefits.map((benefit, i) => (
                        <Badge key={i} variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Edit3 className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Select a pose to view and edit details</p>
              </Card>
            )}

            {/* AI Suggestions */}
            {showAISuggestions && (
              <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">AI Suggestions</h3>
                    <p className="text-xs text-gray-600">Optimize your sequence</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAISuggestions(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-violet-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Consider adding a Sun Salutation between poses 3 and 4 for better flow
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      Add Sun Salutation
                    </Button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <div className="flex items-start gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Include a hip opener before the final relaxation for better release
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      Add Hip Opener
                    </Button>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-pink-200">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Your sequence is well-balanced for stress relief. Great work!
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
