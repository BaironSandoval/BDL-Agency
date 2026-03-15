import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Testimonials from "./components/sections/Testimonials"
import Services from "./components/sections/Services"
import Process from "./components/sections/Process"
import Portfolio from "./components/sections/Portfolio"
import Benefits from "./components/sections/Benefits"
import About from "./components/sections/About"
import CTA from "./components/sections/CTA"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import WhatsAppButton from "./components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <Process />
      <Portfolio />
      <Benefits />
      <About />
      <CTA />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  )
}
