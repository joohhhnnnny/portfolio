"use client";
import React from "react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Company Name",
    duration: "2024 - Present",
    description: "Working on building responsive web applications using React and Next.js.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    duration: "2023 - 2024",
    description: "Developed websites for small businesses and personal clients.",
  },
  {
    title: "Computer Science Student",
    company: "University Name",
    duration: "2022 - Present",
    description: "Studying core CS fundamentals, algorithms, and software development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "circOut" }}
              viewport={{ once: true }}
              className="border border-white/[0.2] rounded-xl p-6 bg-black/50"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-white/50 text-sm">{exp.duration}</span>
              </div>
              <p className="text-purple-400 mb-2">{exp.company}</p>
              <p className="text-white/70">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;