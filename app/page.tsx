import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ui/particle-network";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <ParticleNetwork
        particleCount={100}
        particleColor="rgba(139, 92, 246, 0.5)"
        lineColor="rgba(139, 92, 246, 0.2)"
        maxDistance={120}
        mouseRadius={180}
        speed={0.4}
      />
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );  
}
