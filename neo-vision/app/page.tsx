import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import TeamSection from "@/components/team-section"
import EquipmentGallery from "@/components/equipment-gallery"
import AppointmentTimeline from "@/components/appointment-timeline"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <Services />
      <TeamSection />
      <EquipmentGallery />
      <AppointmentTimeline />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

