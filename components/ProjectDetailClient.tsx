"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AlertTriangle,
  ArrowLeft,
  Atom,
  Braces,
  Code,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  Flame,
  Github,
  Layers,
  LayoutGrid,
  Lightbulb,
  LucideIcon,
  Palette,
  Settings,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import type { ProjectDetail } from "@/data/projects";
import ParticleNetwork from "@/components/ui/particle-network";

const techIconMap: Record<string, LucideIcon> = {
  react: Atom,
  vite: Zap,
  tailwind: Palette,
  firebase: Flame,
  python: Code2,
  yolo: Target,
  mobilenet: Smartphone,
  opencv: Eye,
  flutter: Smartphone,
  dart: Braces,
  physics: Settings,
  flame: Flame,
  typescript: Code2,
  laravel: Layers,
  postgresql: Database,
  javascript: Braces,
  php: Code,
  mysql: Database,
  bootstrap: LayoutGrid,
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectDetailClient({ project }: { project: ProjectDetail }) {
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setExiting(true);
    try {
      sessionStorage.setItem("enterProjects", "1");
    } catch {
      // ignore
    }
    setTimeout(() => {
      router.push("/#projects");
    }, 450);
  };

  return (
    <main className="bg-black min-h-screen relative overflow-x-hidden">
      {/* Zoom-out exit overlay */}
      <AnimatePresence>
        {exiting && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          />
        )}
      </AnimatePresence>
      {/* Interactive Particle Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: exiting ? 0.4 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <ParticleNetwork
          particleCount={120}
          particleColor={`${project.color}cc`}
          lineColor={`${project.color}33`}
          maxDistance={130}
          mouseRadius={180}
          speed={0.4}
        />
      </motion.div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10"
        animate={exiting ? { opacity: 0, scale: 0.97, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-end pb-16 overflow-hidden">
          {/* Subtle color glow background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background: `radial-gradient(ellipse at 30% 40%, ${project.color}20, transparent 55%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="absolute top-8 left-8 z-20"
          >
            <button
              onClick={handleBack}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft size={18} className="text-white/70 group-hover:text-purple-400 transition-colors group-hover:-translate-x-1 duration-300" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">Back to Projects</span>
            </button>
          </motion.div>

          {/* Hero content */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Tags */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm"
                    style={{
                      borderColor: `${project.color}40`,
                      background: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight"
              >
                {project.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              >
                {project.description}
              </motion.p>

              {/* Action buttons */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full font-medium text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                    boxShadow: `0 4px 20px ${project.color}30`,
                  }}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-white/50"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start"
            >
              <motion.div variants={fadeUp}>
                <div
                  className="flex items-center gap-3 mb-4"
                >
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    <Sparkles size={20} style={{ color: project.color }} />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: project.color }}>
                    Overview
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  What is this<br />project about?
                </h3>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-white/60 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                className="relative group"
              >
                <div className="relative p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden h-full hover:border-red-500/20 transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertTriangle size={20} className="text-red-400" />
                      </div>
                      <h2 className="text-sm font-semibold uppercase tracking-widest text-red-400">
                        The Problem
                      </h2>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Challenges Identified
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Solution Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                className="relative group"
              >
                <div
                  className="relative p-8 md:p-10 rounded-2xl border bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm overflow-hidden h-full transition-colors duration-500"
                  style={{ borderColor: `${project.color}15` }}
                >
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500"
                    style={{ background: `${project.color}08` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="p-2.5 rounded-xl"
                        style={{
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        <Lightbulb size={20} style={{ color: project.color }} />
                      </div>
                      <h2
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: project.color }}
                      >
                        The Solution
                      </h2>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      How We Solved It
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    <Layers size={20} style={{ color: project.color }} />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: project.color }}>
                    Features
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Key Capabilities
                </h3>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group relative"
                  >
                    <div
                      className="relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm h-full transition-all duration-300 hover:-translate-y-1"
                      style={{
                        // @ts-expect-error CSS custom property
                        "--hover-border": `${project.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}30`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${project.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold mt-0.5"
                          style={{
                            background: `${project.color}15`,
                            color: project.color,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    <Cpu size={20} style={{ color: project.color }} />
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: project.color }}>
                    Tech Stack
                  </h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Built With
                </h3>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {project.techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={scaleIn}
                    className="group"
                  >
                    <div
                      className="relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm h-full text-center transition-all duration-300 hover:-translate-y-2"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${project.color}30`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${project.color}15`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-center justify-center mb-4">
                        {(() => {
                          const Icon = techIconMap[tech.icon] ?? Cpu;
                          return <Icon size={34} style={{ color: project.color }} aria-hidden="true" />;
                        })()}
                      </div>
                      <h4
                        className="text-lg font-semibold mb-2 transition-colors duration-300"
                        style={{ color: "white" }}
                      >
                        {tech.name}
                      </h4>
                      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in this project?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Check out the live demo or explore the source code on GitHub.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                    boxShadow: `0 4px 20px ${project.color}30`,
                  }}
                >
                  <ExternalLink size={18} />
                  View Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                  View Source Code
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-16">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 text-sm cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  Back to all projects
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-16" />
      </motion.div>
    </main>
  );
}
