import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import SpecialOffers from "@/components/sections/SpecialOffers";
import Gallery from "@/components/sections/Gallery";
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
        <Products />
        <WhyUs />
        <Services />
        <SpecialOffers />
        <Gallery />
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
