"use client";
import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RealiTech",
    description: "A real estate hackathon project featuring property listings, AI buyer guidance, fraud detection, and chatbot integration.",
    tags: ["Reactjs", "Vite", "Tailwind CSS", "Firebase"],
    image: "/images/realitech.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project1",
  },
  {
    title: "Project Two",
    description: "A mobile-responsive e-commerce platform with shopping cart functionality, payment integration, and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project2.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project2",
  },
  {
    title: "Project Three",
    description: "An AI-powered chatbot application that uses natural language processing to provide intelligent responses and assistance.",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    image: "/images/project3.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/joohhhnnnny/project3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "circOut" }}
              viewport={{ once: true }}
              className="border border-white/[0.2] rounded-xl overflow-hidden bg-black/50 hover:border-white/[0.4] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
