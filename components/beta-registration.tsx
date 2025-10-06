"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Mail } from "lucide-react"
import { useState } from "react"

export function BetaRegistration() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      console.log("[v0] Beta registration email:", email)
      // TODO: Handle beta registration submission
      setSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-primary/20 shadow-xl bg-card/80 backdrop-blur">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Join the Beta</h2>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto font-light">
                  Be among the first to experience OurBiz. Register your interest and get early access to the platform
                  that will transform your business.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 space-y-3">
                  <div className="text-2xl">✓</div>
                  <p className="text-lg font-semibold text-primary">Thank you for your interest!</p>
                  <p className="text-sm text-muted-foreground">We'll be in touch soon with beta access details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-12 bg-background"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Register Interest
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    No spam, ever. We'll only contact you about beta access.
                  </p>
                </form>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
