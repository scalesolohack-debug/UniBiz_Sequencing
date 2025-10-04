import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Calendar, CreditCard } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Calendar,
      title: "Trying to attract and retain students",
      description:
        "You pour your heart into every class and still feel unseen when attendance wavers and competition is high. It's tough to keep your studio full and your inspiration high.",
    },
    {
      icon: AlertCircle,
      title: "Overwhelming admin and self-doubt",
      description:
        "Between managing scheduling, payments, online tools—and alive with self-doubt—you end your day exhausted, asking: 'Am I even cut out for this?'",
    },
    {
      icon: CreditCard,
      title: "Unstable income",
      description:
        "One month you teach eight classes, the next you hit a wall. Without a safety net, it's easy to feel undervalued and burned out.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">That feeling—does it hit close to home?</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            You didn't become a yoga teacher to feel overwhelmed, underpaid, or unseen. 
            You followed your heart so, let's honor it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300 rounded-xl"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground text-balance">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
