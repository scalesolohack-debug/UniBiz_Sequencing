"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Download, FileText, ImageIcon, Mail, Printer, CheckCircle2, Copy, Share2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

const exportFormats = [
  {
    id: "pdf",
    name: "PDF Document",
    description: "Print-ready format with full details",
    icon: FileText,
    color: "text-red-600",
  },
  {
    id: "image",
    name: "Image (PNG)",
    description: "Visual sequence chart",
    icon: ImageIcon,
    color: "text-blue-600",
  },
  {
    id: "email",
    name: "Email Template",
    description: "Send directly to students",
    icon: Mail,
    color: "text-green-600",
  },
  {
    id: "print",
    name: "Print Layout",
    description: "Optimized for printing",
    icon: Printer,
    color: "text-purple-600",
  },
]

export default function ExportPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedFormat, setSelectedFormat] = useState("pdf")
  const [includeModifications, setIncludeModifications] = useState(true)
  const [includeBenefits, setIncludeBenefits] = useState(true)
  const [includeTimings, setIncludeTimings] = useState(true)
  const [includeImages, setIncludeImages] = useState(false)
  const [saveAsTemplate, setSaveAsTemplate] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportComplete, setExportComplete] = useState(false)

  const sequenceName = searchParams.get("name") || "Yoga Sequence"

  const handleExport = () => {
    setIsExporting(true)
    // Simulate export process
    setTimeout(() => {
      setIsExporting(false)
      setExportComplete(true)
    }, 2000)
  }

  const handleSaveTemplate = () => {
    alert("Template saved successfully!")
  }

  if (exportComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Export Complete!</h1>
            <p className="text-gray-600 mb-6">Your sequence has been exported successfully</p>

            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download File
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share Link
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Copy className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button variant="ghost" onClick={() => router.push("/sequencing")} className="w-full">
                Create Another Sequence
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Builder
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Export Sequence</h1>
            <p className="text-gray-600">Choose your export format and options</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Export Options */}
          <div className="md:col-span-2 space-y-6">
            {/* Format Selection */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Format</h2>
              <RadioGroup value={selectedFormat} onValueChange={setSelectedFormat}>
                <div className="space-y-3">
                  {exportFormats.map((format) => {
                    const Icon = format.icon
                    return (
                      <div
                        key={format.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedFormat === format.id
                            ? "border-violet-500 bg-violet-50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                        onClick={() => setSelectedFormat(format.id)}
                      >
                        <RadioGroupItem value={format.id} id={format.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className={`w-5 h-5 ${format.color}`} />
                            <Label htmlFor={format.id} className="font-semibold text-gray-900 cursor-pointer">
                              {format.name}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-600">{format.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </RadioGroup>
            </Card>

            {/* Export Options */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Include in Export</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="modifications"
                    checked={includeModifications}
                    onCheckedChange={(checked) => setIncludeModifications(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="modifications" className="font-medium text-gray-900 cursor-pointer">
                      Pose Modifications
                    </Label>
                    <p className="text-sm text-gray-600">Include alternative options for each pose</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="benefits"
                    checked={includeBenefits}
                    onCheckedChange={(checked) => setIncludeBenefits(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="benefits" className="font-medium text-gray-900 cursor-pointer">
                      Pose Benefits
                    </Label>
                    <p className="text-sm text-gray-600">Show health benefits for each pose</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="timings"
                    checked={includeTimings}
                    onCheckedChange={(checked) => setIncludeTimings(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="timings" className="font-medium text-gray-900 cursor-pointer">
                      Duration & Timings
                    </Label>
                    <p className="text-sm text-gray-600">Include time for each pose and transitions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="images"
                    checked={includeImages}
                    onCheckedChange={(checked) => setIncludeImages(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="images" className="font-medium text-gray-900 cursor-pointer">
                      Pose Illustrations
                    </Label>
                    <p className="text-sm text-gray-600">Add visual diagrams for each pose</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Template Option */}
            <Card className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="template"
                  checked={saveAsTemplate}
                  onCheckedChange={(checked) => setSaveAsTemplate(checked as boolean)}
                />
                <div className="flex-1">
                  <Label htmlFor="template" className="font-semibold text-gray-900 cursor-pointer">
                    Save as Template
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">
                    Reuse this sequence structure for future classes with different audiences
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="space-y-6">
            {/* Sequence Summary */}
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Sequence Summary</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Name</p>
                  <p className="text-sm font-medium text-gray-900">{sequenceName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Format</p>
                  <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                    {exportFormats.find((f) => f.id === selectedFormat)?.name}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Options</p>
                  <div className="flex flex-wrap gap-1">
                    {includeModifications && (
                      <Badge variant="outline" className="text-xs">
                        Modifications
                      </Badge>
                    )}
                    {includeBenefits && (
                      <Badge variant="outline" className="text-xs">
                        Benefits
                      </Badge>
                    )}
                    {includeTimings && (
                      <Badge variant="outline" className="text-xs">
                        Timings
                      </Badge>
                    )}
                    {includeImages && (
                      <Badge variant="outline" className="text-xs">
                        Images
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Export Button */}
            <Button
              onClick={handleExport}
              disabled={isExporting}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
            >
              {isExporting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Export Sequence
                </>
              )}
            </Button>

            {/* Quick Actions */}
            <Card className="p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-sm bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Email to Students
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-sm bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Link
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start text-sm bg-transparent">
                  <Printer className="w-4 h-4 mr-2" />
                  Print Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
