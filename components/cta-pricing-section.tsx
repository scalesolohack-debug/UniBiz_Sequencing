import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function CtaPricingSection() {
  const benefits = ["No complicated setup", "Free trial included", "No credit card required", "Cancel anytime"]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            No complicated setup. <span className="text-primary">Try it free</span> — no credit card required.
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Join hundreds of yoga teachers who've simplified their business with YogaFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get Started Today
        </Button>
      </div>
    </section>
  )
}
