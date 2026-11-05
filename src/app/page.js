import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <About />
        <WhyChooseUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
