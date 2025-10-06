import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MarketplaceCta() {
  const benefits = [
    "All-in-one platform for your business",
    "Client management & booking system",
    "Automated reminders & payments",
    "Marketing tools & analytics",
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Join thousands of beauty and wellness professionals who've simplified their workflow with OurBiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white/50 p-3 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-left">{benefit}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Start Your Free Trial
        </Button>

        <p className="text-sm text-muted-foreground">Free 14-day trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  )
}
