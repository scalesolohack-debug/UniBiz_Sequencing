import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-card/50 px-4 py-20">
      <div className="absolute inset-0 bg-[url('/serene-yoga-meditation-background-with-soft-flowin.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Join 10000+ Yoga Teachers who simplified their workflow and <span className="text-primary">Increased their revenue</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Meet the all-in-one platform built just for yoga teachers.
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start free today
          </Button>
        </div>

        <div className="pt-8">
          <img
            src="/yoga-teacher-using-tablet-app-in-peaceful-studio.png"
            alt="YogaFlow app interface"
            className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
