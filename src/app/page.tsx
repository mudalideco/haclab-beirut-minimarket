import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Offerings from "@/components/sections/Offerings";
import WhyUs from "@/components/sections/WhyUs";
import SpecialOffers from "@/components/sections/SpecialOffers";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Offerings />
        <WhyUs />
        <SpecialOffers />
        <Testimonials />
        <Location />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
