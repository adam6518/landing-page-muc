import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyMuc from "@/components/WhyMuc";
import Coverage from "@/components/Coverage";
import Portfolio from "@/components/Portfolio";
import VisionMission from "@/components/VisionMission";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyMuc />
      <Coverage />
      <Portfolio />
      <VisionMission />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
