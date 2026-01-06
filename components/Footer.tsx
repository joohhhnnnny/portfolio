"use client";
import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/joohhhnnnny",
		icon: Github,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/yourprofile",
		icon: Linkedin,
	},
	{
		name: "Email",
		href: "mailto:your.email@example.com",
		icon: Mail,
	},
];

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Tech Stack", href: "#tech" },
	{ name: "Contact", href: "#contact" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative z-10 border-t border-white/[0.1] bg-black-100/50 backdrop-blur-sm">
			<div className="max-w-6xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "circOut" }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						<h3 className="text-2xl font-bold text-white">
							John<span className="text-purple-500">.</span>
						</h3>
						<p className="text-white/60 text-sm leading-relaxed">
							Building digital experiences with passion and precision. Let&apos;s create something amazing together.
						</p>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1, ease: "circOut" }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						<h4 className="text-lg font-semibold text-white">Quick Links</h4>
						<ul className="space-y-2">
							{navLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className="text-white/60 hover:text-purple-400 transition-colors duration-200 text-sm"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						<h4 className="text-lg font-semibold text-white">Connect</h4>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									className="p-3 bg-white/[0.05] border border-white/[0.1] rounded-full hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
								>
									<social.icon
										size={20}
										className="text-white/70 group-hover:text-purple-400 transition-colors duration-300"
									/>
								</a>
							))}
						</div>
						<p className="text-white/60 text-sm">
							Feel free to reach out anytime!
						</p>
					</motion.div>
				</div>

				{/* Divider */}
				<div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent mb-8" />

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="flex flex-col md:flex-row items-center justify-between gap-4"
				>
					<p className="text-white/50 text-sm">
						© {currentYear} John Benedict. All rights reserved.
					</p>
				</motion.div>
			</div>

			{/* Gradient accent */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
		</footer>
	);
};

export default Footer;
