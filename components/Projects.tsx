"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

const Projects = () => {
	const n = projects.length;
	const [activeIndex, setActiveIndex] = useState(n);
	const trackRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);
	const touchStartX = useRef(0);
	const touchDeltaX = useRef(0);
	const router = useRouter();
	const [navigating, setNavigating] = useState<string | null>(null);
	const [enteringFromDetail] = useState(() => {
		try {
			const flag = sessionStorage.getItem("enterProjects");
			if (flag) sessionStorage.removeItem("enterProjects");
			return Boolean(flag);
		} catch {
			return false;
		}
	});

	// 3 copies for seamless infinite looping
	const extendedProjects = [...projects, ...projects, ...projects];
	const realIndex = ((activeIndex % n) + n) % n;

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const getCardOffset = (index: number) => {
		const track = trackRef.current;
		if (!track) return 0;
		const card = track.children[index] as HTMLElement;
		if (!card) return 0;
		return card.offsetLeft;
	};

	const slideTo = (index: number, withTransition: boolean) => {
		const track = trackRef.current;
		if (!track) return;
		track.style.transition = withTransition ? "transform 0.4s ease-out" : "none";
		track.style.transform = `translateX(-${getCardOffset(index)}px)`;
	};

	// Set initial position without animation
	useEffect(() => {
		requestAnimationFrame(() => slideTo(n, false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Reposition on resize without animation
	useEffect(() => {
		const handleResize = () => slideTo(activeIndex, false);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex]);

	const handleTransitionEnd = (e: React.TransitionEvent) => {
		if (e.target !== trackRef.current) return;
		if (activeIndex < n || activeIndex >= 2 * n) {
			const normalized = n + (((activeIndex - n) % n + n) % n);
			setActiveIndex(normalized);
			slideTo(normalized, false);
		}
	};

	const handlePrev = () => {
		const newIndex = activeIndex - 1;
		setActiveIndex(newIndex);
		slideTo(newIndex, true);
	};

	const handleNext = () => {
		const newIndex = activeIndex + 1;
		setActiveIndex(newIndex);
		slideTo(newIndex, true);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
		touchDeltaX.current = 0;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
	};

	const handleTouchEnd = () => {
		if (Math.abs(touchDeltaX.current) > 50) {
			if (touchDeltaX.current < 0) handleNext();
			else handlePrev();
		}
		touchDeltaX.current = 0;
	};

	const handleCardClick = useCallback((slug: string, e: React.MouseEvent) => {
		// Don't navigate if clicking on links
		const target = e.target as HTMLElement;
		if (target.closest("a")) return;
		
		setNavigating(slug);
		// Delay navigation for zoom-in animation
		setTimeout(() => {
			router.push(`/projects/${slug}`);
		}, 450);
	}, [router]);

	return (
		<motion.section
			id="projects"
			initial={{ opacity: enteringFromDetail ? 0 : 1 }}
			animate={{ opacity: navigating ? 0 : 1 }}
			transition={{ duration: navigating ? 0.35 : 0.6, ease: [0.22, 1, 0.36, 1] }}
			className={`py-20 relative z-10 overflow-hidden ${navigating ? "pointer-events-none" : ""}`}
		>
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
							className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 bg-white/10 rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
							aria-label="Previous project"
						>
							<ChevronLeft size={24} className="text-white" />
						</button>
					)}

					{/* Right Arrow - Desktop only */}
					{!isMobile && (
						<button
							onClick={handleNext}
							className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 bg-white/10 rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center"
							aria-label="Next project"
						>
							<ChevronRight size={24} className="text-white" />
						</button>
					)}

					{/* Carousel */}
					<div
						className="overflow-hidden"
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<div
							ref={trackRef}
							onTransitionEnd={handleTransitionEnd}
							className="flex gap-6"
							style={{ willChange: "transform" }}
						>
							{extendedProjects.map((project, idx) => (
								<div
									key={idx}
									className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
								>
								<div
									onClick={(e) => handleCardClick(project.slug, e)}
									className="relative h-full flex flex-col border border-white/[0.1] rounded-xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent group hover:border-purple-500/50 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.35)] hover:-translate-y-4 transform-gpu transition-all duration-300 ease-out will-change-transform cursor-pointer"
								>
								{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

							{/* Project Image */}
							<div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden relative rounded-t-xl">
										<Image
											src={project.image}
											alt={project.title}
											fill
											sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw"
											draggable={false}
											className="object-cover transform-gpu transition-transform duration-500 ease-out will-change-transform group-hover:scale-110"
										/>
									{/* Image overlay on hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									{/* Quick action buttons on image hover */}
									<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
												className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110"
										>
											<ExternalLink size={20} className="text-white" />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
												className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-purple-500 hover:border-purple-500 transition-all duration-200 hover:scale-110"
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
								</div>
							))}
						</div>
					</div>

					{/* Pagination Dots */}
					<div className="flex justify-center gap-2 mt-6">
						{projects.map((_, idx) => (
							<button
								key={idx}
								onClick={() => {
									const target = n + idx;
									setActiveIndex(target);
									slideTo(target, true);
								}}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									realIndex === idx
										? "bg-purple-500 w-6"
										: "bg-white/30 hover:bg-white/50"
								}`}
								aria-label={`Go to project ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Zoom-in page transition overlay */}
			{navigating && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="fixed inset-0 z-[9999] bg-black pointer-events-none"
				/>
			)}
		</motion.section>
	);
};

export default Projects;
