"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  borderRadius = "rounded-3xl",
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  animate?: boolean;
}) => {
  const spinVariants = {
    animate: {
      rotate: [0, 360],
    },
  };

  return (
    <div className={cn("relative p-[3px] group", containerClassName)}>
      {/* Outer glow - animated spinning purple */}
      <motion.div
        variants={animate ? spinVariants : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        className={cn(
          "absolute inset-[-4px] z-[1] opacity-70 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          borderRadius,
          "bg-[conic-gradient(from_0deg,#7c3aed,#a855f7,#c084fc,#e879f9,#a855f7,#7c3aed)]"
        )}
      />
      {/* Inner border - animated spinning purple */}
      <motion.div
        variants={animate ? spinVariants : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }
            : undefined
        }
        className={cn(
          "absolute inset-0 z-1 will-change-transform",
          borderRadius,
          "bg-[conic-gradient(from_0deg,#7c3aed,#a855f7,#c084fc,#e879f9,#a855f7,#7c3aed)]"
        )}
      />
      {/* Pulsing purple glow */}
      <motion.div
        animate={
          animate
            ? {
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.05, 1],
              }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={cn(
          "absolute inset-[-6px] z-[0] blur-2xl will-change-transform",
          borderRadius,
          "bg-purple-500/40"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};