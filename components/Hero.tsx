"use client";
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import { motion, scale } from "framer-motion";
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Briefcase, Github, GraduationCap, Linkedin, Mail, MapPin, School } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';


const Hero = () => {
  return (
    <div id="home" className="pb-20 pt-36 overflow-hidden relative">
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight className="h-[80vh] w-[50vw] top-28 left-80" fill="blue"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          >
            <BackgroundGradient className="rounded-full" containerClassName="mb-0" borderRadius="rounded-full">
              <img
                src="/images/nawng-nako.jpg"
                alt=""
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover bg-black"
              />
            </BackgroundGradient>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          >
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="John Benedict Bongcac"
            />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="flex flex-col items-center"
          >
            <HoverBorderGradient
              containerClassName="rounded-full mt-3"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white"
            >
              <GraduationCap size={16} />
              <span>Computer Science Student</span>
            </HoverBorderGradient>

            <div className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 mt-3">
              <MapPin size={15} className="text-white/70" />
              <span>Davao City, Philippines</span>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mt-4">
              <a
                href="mailto:johnbongcacjohn@gmail.com"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 bg-black/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/john-benedict-bongcac-b37668346/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 bg-black/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/joohhhnnnny"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 bg-black/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

            <p className="text-m text-center text-white/50 mt-4">
            I'm a passionate Computer Science student based in Davao City, Philippines. 
            I love building web applications and exploring new technologies. 
            Currently focused on learning Next.js, React, and modern web development practices.
            </p>
          </motion.div>

        </div>
      </div>
        
    </div>
  )
}

export default Hero