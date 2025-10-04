import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/20 via-accent/20 to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Stop juggling tools. <span className="text-primary">Start focusing</span> on your teaching.
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Click to join 10000+ yoga teachers who've already simplified their flow and increased their revenue with UniBiz Yoga.
          </p>
        </div>

        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Create your free account now
        </Button>

        <p className="text-sm text-muted-foreground">Free trial • No credit card required • Setup in under 5 minutes</p>
      </div>
    </section>
  )
}
