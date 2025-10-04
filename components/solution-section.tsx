import { Card, CardContent } from "@/components/ui/card"
import { BellRing, CalendarCheck, Users, Wallet, Sparkles } from "lucide-react"

type Tone = "calm" | "clean" | "bold"

export function SolutionSection({ tone = "calm" }: { tone?: Tone }) {
  const copy: Record<Tone, Array<{
    icon: any
    title: string
    aha_moment: string
    description: string
  }>> = {
    // Warm, supportive, yoga-forward
    calm: [
      {
        icon: CalendarCheck,
        title: "Prevent no-shows & fill classes",
        aha_moment: "Open spots refill themselves.",
        description: "Gentle reminders + auto-waitlists keep mats full.",
      },
      {
        icon: Users,
        title: "Boost retention with care",
        aha_moment: "Motivation becomes momentum.",
        description: "Streaks and prompts help practice become habit.",
      },
      {
        icon: Sparkles,
        title: "Ease the admin load",
        aha_moment: "You teach; the ops flow.",
        description: "Scheduling, payments, unique links—together.",
      },
      {
        icon: Wallet,
        title: "Stabilize income",
        aha_moment: "Cash flow when you need it.",
        description: "Instant, integrated payouts—no chasing invoices.",
      },
    ],
    // Clear, succinct, professional
    clean: [
      {
        icon: BellRing,
        title: "Cut no-shows & backfill spots",
        aha_moment: "Capacity stays high.",
        description: "Automated reminders and waitlists.",
      },
      {
        icon: Users,
        title: "Raise repeat attendance",
        aha_moment: "Stickier habits, steadier rosters.",
        description: "Streaks/gamification nudge consistency.",
      },
      {
        icon: Sparkles,
        title: "Streamline operations",
        aha_moment: "Fewer tabs, fewer tasks.",
        description: "Scheduling, payments, links in one place.",
      },
      {
        icon: Wallet,
        title: "Smooth, fast payouts",
        aha_moment: "Predictable cash flow.",
        description: "Instant Stripe payouts, receipts handled.",
      },
    ],
    // Energetic, product-led
    bold: [
      {
        icon: CalendarCheck,
        title: "Stop no-shows. Pack classes.",
        aha_moment: "Every slot counts.",
        description: "Auto-reminders + waitlists do the heavy lifting.",
      },
      {
        icon: Users,
        title: "Retention on autopilot",
        aha_moment: "Fans, not passersby.",
        description: "Streaks and milestones keep them coming back.",
      },
      {
        icon: Sparkles,
        title: "Zero busywork",
        aha_moment: "All signal, no noise.",
        description: "Scheduling, payments, links—click, done.",
      },
      {
        icon: Wallet,
        title: "Revenue you can rely on",
        aha_moment: "Money in, right away.",
        description: "Instant payouts—forget invoice chasing.",
      },
    ],
  }

  const features = copy[tone]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            One platform. <span className="text-primary">Zero headaches.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Run your teaching with less hustle—and more heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="bg-card border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="font-semibold text-primary text-balance text-sm">{f.aha_moment}</p>
                <div className="hidden group-hover:block transition-all duration-300">
                  <p className="text-sm text-muted-foreground text-balance">{f.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
