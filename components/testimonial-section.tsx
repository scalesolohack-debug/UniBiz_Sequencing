import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-background border-border/50 shadow-xl rounded-2xl">
          <CardContent className="p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-balance mb-8 leading-relaxed">
              "Finally, everything in one place. I cut my no-shows by 40% after switching."
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img src="/professional-yoga-teacher-headshot-woman.png" alt="Priya, Yoga Teacher" className="w-15 h-15 rounded-full" />
              <div className="text-left">
                <div className="font-semibold">Priya</div>
                <div className="text-muted-foreground">Yoga Teacher</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
