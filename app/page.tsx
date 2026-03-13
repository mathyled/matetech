import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { Process } from "@/components/process"
import { Demos } from "@/components/demos"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Process />
      <Demos />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
