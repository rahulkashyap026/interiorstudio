import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Instagram from '@/components/Instagram';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Gallery />
        <About />
        <WhyUs />
        <Testimonials />
        <CTA />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}