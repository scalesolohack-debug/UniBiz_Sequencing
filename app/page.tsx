import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AhaMomentSection } from "@/components/aha-moment-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaPricingSection } from "@/components/cta-pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AhaMomentSection />
      <TestimonialSection />
      <CtaPricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  )
}
