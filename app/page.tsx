import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { Demos } from "@/components/demos"
import { SocialProof } from "@/components/social-proof"
import { TechStack } from "@/components/tech-stack"
import { Pricing } from "@/components/pricing"
import { CtaBanner } from "@/components/cta-banner"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Process />
      {/* <Demos /> */}
      <SocialProof />
      <Pricing />
      <CtaBanner />
      <FAQ />
      <Contact />
      <Footer />
      <MobileNav />
    </main>
  )
}
