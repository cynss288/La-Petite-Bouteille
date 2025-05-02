import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Cart from "@/components/cart"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <Cart />
      <Footer />
    </main>
  )
}
