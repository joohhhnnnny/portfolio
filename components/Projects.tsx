"use client";
import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
	{
		title: "RealiTech",
		description:
			"A real estate hackathon project featuring property listings, AI buyer guidance, fraud detection, and chatbot integration.",
		tags: ["React", "Vite", "Tailwind CSS", "Firebase"],
		image: "/images/realitech.png",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/joohhhnnnny/project1",
	},
	{
		title: "Human Face Detector",
		description:
			"A python computer vision project that aims to detect and highlight human faces in real-time using MobileNetv2 and YOLOv8s models.",
		tags: ["Python", "YOLOv8s", "MobileNetv2"],
		image: "/images/face.jpg",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/joohhhnnnny/project2",
	},
	{
		title: "Project Three",
		description:
			"An AI-powered chatbot application that uses natural language processing to provide intelligent responses and assistance.",
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
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1, ease: "circOut" }}
							viewport={{ once: true }}
							className="h-full"
						>
							<div className="relative h-full flex flex-col border border-white/[0.1] rounded-xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm group hover:border-purple-500/50 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.35)] hover:-translate-y-4 transform-gpu transition-all duration-300 ease-out will-change-transform">
								{/* Gradient overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

								{/* Project Image */}
								<div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden relative">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transform-gpu transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
									/>
									{/* Image overlay on hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									{/* Quick action buttons on image hover */}
									<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110"
										>
											<ExternalLink size={20} className="text-white" />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110"
										>
											<Github size={20} className="text-white" />
										</a>
									</div>
								</div>

								<div className="p-6 relative flex-1 flex flex-col">
									<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-white/60 text-sm mb-4 line-clamp-3 group-hover:text-white/80 transition-colors duration-300 flex-1">
										{project.description}
									</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag, tagIdx) => (
											<span
												key={tagIdx}
												className="px-3 py-1 text-xs bg-white/[0.05] text-white/70 rounded-full border border-white/[0.1] group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all duration-300"
											>
												{tag}
											</span>
										))}
									</div>

									{/* Links */}
									<div className="flex items-center gap-4 pt-2 border-t border-white/[0.05] mt-auto">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-white/60 hover:text-purple-400 transition-all duration-200 hover:gap-3"
										>
											<ExternalLink size={16} />
											<span>Live Demo</span>
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm text-white/60 hover:text-purple-400 transition-all duration-200 hover:gap-3"
										>
											<Github size={16} />
											<span>Code</span>
										</a>
									</div>
								</div>

								{/* Bottom accent line */}
								<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
