import { HeroSection, PopupScreen } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
              <PopupScreen />
        <ServicesOverview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
