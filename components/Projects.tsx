"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
	{
		title: "RealiTech",
		description:
			"A real estate web application project featuring property listings, AI buyer guidance, fraud detection, and chatbot integration.",
		tags: ["React", "Vite", "Tailwind CSS", "Firebase"],
		image: "/images/realitech.png",
		liveUrl: "https://um-realitech-hackestate-1ed69.web.app/",
		githubUrl: "https://github.com/joohhhnnnny/um-realitech-frontend-realestate",
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
		title: "Fluppy Bert",
		description:
			"An AI-powered chatbot application that uses natural language processing to provide intelligent responses and assistance.",
		tags: ["Dart", "Flutter",],
		image: "/images/fluppybert.png",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/joohhhnnnny/project3",
	},
	{
		title: "Alien Care Autoshop",
		description:
			"An AI-powered chatbot application that uses natural language processing to provide intelligent responses and assistance.",
		tags: ["Python", "OpenAI", "FastAPI", "React"],
		image: "/images/aliencare.png",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/joohhhnnnny/project3",
	},
	{
		title: "Senior High School Management System",
		description:
			"An AI-powered chatbot application that uses natural language processing to provide intelligent responses and assistance.",
		tags: ["Python", "OpenAI", "FastAPI", "React"],
		image: "/images/iscp.png",
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/joohhhnnnny/project3",
	}
];

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const scrollToIndex = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = carouselRef.current.scrollWidth / projects.length;
			carouselRef.current.scrollTo({
				left: cardWidth * index,
				behavior: "smooth",
			});
		}
	};

	const handlePrev = () => {
		const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
		scrollToIndex(newIndex);
	};

	const handleNext = () => {
		const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
		scrollToIndex(newIndex);
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const scrollLeft = carouselRef.current.scrollLeft;
			const cardWidth = carouselRef.current.scrollWidth / projects.length;
			const newIndex = Math.round(scrollLeft / cardWidth);
			setCurrentIndex(newIndex);
		}
	};

	return (
		<section id="projects" className="py-20 relative z-10 overflow-hidden">
			<div className="max-w-6xl mx-auto px-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "circOut" }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
				>
					Projects
				</motion.h2>

				<div className="relative">
					{/* Left Arrow - Desktop only */}
					{!isMobile && (
						<button
							onClick={handlePrev}
							className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
							aria-label="Previous project"
						>
							<ChevronLeft size={24} className="text-white" />
						</button>
					)}

					{/* Right Arrow - Desktop only */}
					{!isMobile && (
						<button
							onClick={handleNext}
							className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
							aria-label="Next project"
						>
							<ChevronRight size={24} className="text-white" />
						</button>
					)}

					{/* Carousel Container with overflow hidden */}
					<div className="overflow-hidden">
					{/* Carousel Container */}
					<div
						ref={carouselRef}
						onScroll={handleScroll}
						className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
						style={{
							scrollbarWidth: "none",
							msOverflowStyle: "none",
						}}
					>
						{projects.map((project, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1, ease: "circOut" }}
								viewport={{ once: true }}
								className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
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

				{/* Pagination Dots */}
				<div className="flex justify-center gap-2 mt-6">
					{projects.map((_, idx) => (
						<button
							key={idx}
							onClick={() => {
								setCurrentIndex(idx);
								scrollToIndex(idx);
							}}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								currentIndex === idx
									? "bg-purple-500 w-6"
									: "bg-white/30 hover:bg-white/50"
							}`}
							aria-label={`Go to project ${idx + 1}`}
						/>
					))}
				</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
