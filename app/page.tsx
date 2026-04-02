import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import HonorsEducation from "@/components/HonorsEducation";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen bg-surface">
      <Navbar />
      <main className="pt-[4.25rem] md:pt-24">
        <Hero />
        <Skills />
        <HonorsEducation />
        <CareerTimeline />
        <Projects />
        <Interests />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
