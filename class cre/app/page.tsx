import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CoursesSection from "@/components/courses-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Cart from "@/components/cart"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Cart />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
