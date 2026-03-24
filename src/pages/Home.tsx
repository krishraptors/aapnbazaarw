import Hero from '@/components/sections/Hero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import Features from '@/components/sections/Features';
import MyProductsShowcase from '@/components/sections/MyProductsShowcase';
import GolaMartShowcase from '@/components/sections/GolaMartShowcase';
import GlobalServices from '@/components/sections/GlobalServices';
import Testimonials from '@/components/sections/Testimonials';
import HowItWorks from '@/components/sections/HowItWorks';
import VendorForm from '@/components/sections/VendorForm';
import AppDownload from '@/components/sections/AppDownload';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesShowcase />
      <Features />
      <MyProductsShowcase />
      <GolaMartShowcase />
      <GlobalServices />
      <Testimonials />
      <HowItWorks />
      <VendorForm />
      <AppDownload />
      <Contact />
      <Footer />
    </div>
  );
}
