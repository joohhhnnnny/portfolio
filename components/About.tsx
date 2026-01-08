"use client";
import React from "react";
import { motion } from "motion/react";
import { Code, Cpu, Lightbulb, Target, Award, GraduationCap, Heart, ExternalLink, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: <Code size={24} />,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Machine Learning",
    description: "Exploring computer vision and AI applications using Python, TensorFlow, and YOLOv8.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Problem Solver",
    description: "Passionate about tackling complex challenges and turning ideas into functional solutions.",
  },
  {
    icon: <Target size={24} />,
    title: "Leadership",
    description: "Leading technical initiatives and organizing tech events as Technicals Lead at ENIGMA.",
  },
];

const experiences = [
  {
    title: "Technicals Lead",
    company: "University of Mindanao - ENIGMA",
    duration: "Jul 2025 - Present",
    description: "Leading the technical team in organizing tech events for students.",
  },
  {
    title: "RealiTech Fullstack Developer",
    company: "Filipino Homes Hackestate",
    duration: "Jul - Aug 2025",
    description: "Developed a real estate web application using React, Vite, Tailwind CSS, and Firebase.",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mindanao",
    duration: "Aug 2023 - Present",
    description: "Studying core CS fundamentals, algorithms, and software development.",
  },
  {
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    institution: "Ford Academy of the Arts Inc.",
    duration: "Jul 2021 - May 2023",
    description: "Studied core STEM subjects including mathematics, physics, chemistry, and computer science.",
  },
];

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "Nov 2025",
    credentialUrl: "https://www.freecodecamp.org/certification/joohhhnnnn/machine-learning-with-python-v7",
  },
  {
    title: "Github Foundations",
    issuer: "Github",
    date: "May 2025",
    credentialUrl: "https://www.credly.com/badges/39dc2fac-bf68-4c81-9325-7f48fcf46576/linked_in_profile",
  },
  {
    title: "IT Specialist - Databases",
    issuer: "Certiport - A Pearson VUE Business",
    date: "Mar 2025",
    credentialUrl: "https://www.credly.com/badges/a9f6a917-0234-4137-affd-006090020c35/linked_in_profile",
  },
  {
    title: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT",
    date: "Feb 2025",
    credentialUrl: "https://www.credly.com/badges/75f0982a-4821-49bb-b983-96a7feb5613f/linked_in_profile",
  },
  {
    title: "IT Specialist - Java",
    issuer: "Certiport - A Pearson VUE Business",
    date: "Mar 2024",
    credentialUrl: "https://www.credly.com/badges/8160c2c1-0af5-40a0-8991-14e1a9ae9182/linked_in_profile",
  },
];

const volunteering = [
  {
    role: "Community Events Management",
    organization: "Davao Startup Week",
    duration: "Jul 2025 - Sep 2025",
    description: "Brief description of your contributions and responsibilities.",
  },
  {
    role: "Logistics",
    organization: "DurianPy - Davao Python User Group",
    duration: "Jul 2025 - Oct 2025",
    description: "Brief description of your contributions and responsibilities.",
  },
  {
    role: "Logistics",
    organization: "Google Developer Group Davao",
    duration: "Apr 2025 - Dec 2025",
    description: "Brief description of your contributions and responsibilities.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 mt-20">
            About Me
          </h2>
          <p className="text-purple-400 text-center mb-10">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              Hi! I'm <span className="text-purple-400 font-semibold">John Benedict Bongcac</span>, 
              a passionate Computer Science student at the University of Mindanao, Davao City. 
              I thrive on building innovative solutions and exploring the intersection of 
              software development and emerging technologies.
            </p>
            <p className="text-white/70 leading-relaxed">
              My journey in tech has led me through various domains—from developing full-stack 
              web applications with React and Firebase, to diving into computer vision projects 
              using Python and machine learning models. I believe in continuous learning and 
              pushing the boundaries of what's possible with code.
            </p>
            <p className="text-white/70 leading-relaxed">
              Currently serving as the Technicals Lead at ENIGMA, I lead initiatives to foster 
              tech culture among students while working on exciting projects that solve 
              real-world problems. When I'm not coding, you'll find me exploring new 
              technologies or collaborating with fellow developers.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
              >
                <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "20+", label: "Technologies" },
            { value: "4+", label: "Projects" },
            { value: "2+", label: "Years Learning" },
            { value: "1", label: "Leadership Role" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border border-white/[0.1] bg-black/50"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Education, Experience, Certifications & Volunteering Section */}
        <div className="mt-20 space-y-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={24} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <span className="text-white/50 text-sm">{edu.duration}</span>
                  </div>
                  <p className="text-purple-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={24} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <span className="text-white/50 text-sm">{exp.duration}</span>
                  </div>
                  <p className="text-purple-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-purple-400 text-sm mt-1">{cert.issuer}</p>
                      <p className="text-white/50 text-xs mt-1">{cert.date}</p>
                    </div>
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-purple-400 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart size={24} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Volunteering</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {volunteering.map((vol, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.05] to-transparent hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                    {vol.role}
                  </h4>
                  <p className="text-purple-400 text-sm mt-1">{vol.organization}</p>
                  <p className="text-white/50 text-xs mt-1">{vol.duration}</p>
                  <p className="text-white/60 text-sm mt-3 leading-relaxed">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;