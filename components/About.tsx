"use client";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            About Me
          </h2>
          <p className="text-white/70 text-center text-lg leading-relaxed">
            I'm a passionate Computer Science student based in Davao City, Philippines. 
            I love building web applications and exploring new technologies. 
            Currently focused on learning Next.js, React, and modern web development practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;