import { MarketplaceHero } from "@/components/marketplace-hero"
import { CategorySection } from "@/components/category-section"
import { MarketplaceCta } from "@/components/marketplace-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <MarketplaceHero />
      <CategorySection />
      <MarketplaceCta />
    </main>
  )
}
