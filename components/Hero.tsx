"use client";
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import { motion, scale } from "framer-motion";
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Briefcase, MapPin } from 'lucide-react';
import { HoverBorderGradient } from './ui/hover-border-gradient';


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight className="h-[80vh] w-[50vw] top-28 left-80" fill="blue"/>
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e720_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e720_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#26262620_1px,transparent_1px),linear-gradient(to_bottom,#26262620_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-5">
            Dynamic Web Magic with Next.js
          </h2>
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
              <Briefcase size={16} />
              <span>Computer Science Student</span>
            </HoverBorderGradient>

            <div className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 mt-3">
              <MapPin size={15} className="text-white/70" />
              <span>Davao City, Philippines</span>
            </div>
          </motion.div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero