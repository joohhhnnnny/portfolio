"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ParticleNetwork from "@/components/ui/particle-network";

const AboutPage = () => {
  return (
    <main className="bg-black min-h-screen">
      <ParticleNetwork
        particleCount={100}
        particleColor="rgba(139, 92, 246, 0.5)"
        lineColor="rgba(139, 92, 246, 0.2)"
        maxDistance={120}
        mouseRadius={180}
        speed={0.4}
      />
      <Navbar />
      <About />
    </main>
  );
};

export default AboutPage;
