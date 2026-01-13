"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface ParticleNetworkProps {
  particleCount?: number;
  particleColor?: string;
  lineColor?: string;
  particleRadius?: number;
  lineWidth?: number;
  maxDistance?: number;
  speed?: number;
  mouseRadius?: number;
  className?: string;
}

// Responsive configuration based on screen width
const getResponsiveConfig = (width: number) => {
  if (width < 480) {
    // Mobile phones
    return {
      particleMultiplier: 0.3,
      maxDistanceMultiplier: 0.6,
      mouseRadiusMultiplier: 0.5,
    };
  } else if (width < 768) {
    // Tablets
    return {
      particleMultiplier: 0.5,
      maxDistanceMultiplier: 0.75,
      mouseRadiusMultiplier: 0.7,
    };
  } else if (width < 1024) {
    // Small laptops
    return {
      particleMultiplier: 0.7,
      maxDistanceMultiplier: 0.85,
      mouseRadiusMultiplier: 0.85,
    };
  }
  // Desktop
  return {
    particleMultiplier: 1,
    maxDistanceMultiplier: 1,
    mouseRadiusMultiplier: 1,
  };
};

export const ParticleNetwork: React.FC<ParticleNetworkProps> = ({
  particleCount = 80,
  particleColor = "rgba(255, 255, 255, 1)",
  lineColor = "rgba(139, 92, 246, 0.15)",
  particleRadius = 3,
  lineWidth = 2,
  maxDistance = 150,
  speed = 0.5,
  mouseRadius = 200,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const configRef = useRef(getResponsiveConfig(typeof window !== "undefined" ? window.innerWidth : 1024));

  const initParticles = useCallback(
    (width: number, height: number) => {
      const config = getResponsiveConfig(width);
      configRef.current = config;
      const adjustedCount = Math.floor(particleCount * config.particleMultiplier);
      
      const particles: Particle[] = [];
      for (let i = 0; i < adjustedCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: particleRadius + Math.random() * 1,
        });
      }
      return particles;
    },
    [particleCount, speed, particleRadius]
  );

  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();
    },
    [particleColor]
  );

  const drawLine = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      distance: number,
      maxDist: number
    ) => {
      const opacity = 1 - distance / maxDist;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${opacity * 0.3})`);
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    },
    [lineColor, lineWidth]
  );

  const getDistance = (
    p1: { x: number; y: number },
    p2: { x: number; y: number }
  ) => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  };

  const animate = useCallback((currentTime: number) => {
    // Skip if not visible (tab hidden or scrolled away)
    if (!isVisibleRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Calculate delta time for smooth animation regardless of frame rate
    const deltaTime = lastTimeRef.current ? (currentTime - lastTimeRef.current) / 16.67 : 1;
    lastTimeRef.current = currentTime;

    // Clamp delta time to prevent large jumps (e.g., after tab switch)
    const clampedDelta = Math.min(deltaTime, 3);

    const width = canvas.width;
    const height = canvas.height;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const config = configRef.current;

    // Apply responsive multipliers
    const adjustedMaxDistance = maxDistance * config.maxDistanceMultiplier;
    const adjustedMouseRadius = mouseRadius * config.mouseRadiusMultiplier;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    const particleCount = particles.length;
    for (let i = 0; i < particleCount; i++) {
      const particle = particles[i];

      // Mouse interaction - particles move away slightly from cursor
      const distToMouse = getDistance(particle, mouse);
      if (distToMouse < adjustedMouseRadius) {
        const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
        const force = (adjustedMouseRadius - distToMouse) / adjustedMouseRadius;
        particle.vx += Math.cos(angle) * force * 0.02 * clampedDelta;
        particle.vy += Math.sin(angle) * force * 0.02 * clampedDelta;
      }

      // Apply velocity with damping (adjusted for delta time)
      const damping = Math.pow(0.99, clampedDelta);
      particle.vx *= damping;
      particle.vy *= damping;

      // Ensure minimum velocity for continuous motion
      const currentSpeed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
      if (currentSpeed < speed * 0.3) {
        particle.vx += (Math.random() - 0.5) * 0.1 * clampedDelta;
        particle.vy += (Math.random() - 0.5) * 0.1 * clampedDelta;
      }

      // Update position (adjusted for delta time)
      particle.x += particle.vx * clampedDelta;
      particle.y += particle.vy * clampedDelta;

      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Draw particle
      drawParticle(ctx, particle);

      // Draw lines to nearby particles (optimized loop)
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        // Quick distance check before expensive sqrt
        const dx = particle.x - p2.x;
        const dy = particle.y - p2.y;
        const distSquared = dx * dx + dy * dy;
        const maxDistSquared = adjustedMaxDistance * adjustedMaxDistance;
        
        if (distSquared < maxDistSquared) {
          const distance = Math.sqrt(distSquared);
          drawLine(ctx, particle, p2, distance, adjustedMaxDistance);
        }
      }

      // Draw line to mouse if close enough
      if (distToMouse < adjustedMouseRadius) {
        drawLine(ctx, particle, mouse, distToMouse, adjustedMouseRadius);
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticle, drawLine, maxDistance, mouseRadius, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Visibility change handler - pause when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      if (!document.hidden) {
        // Reset lastTime to prevent large delta after tab switch
        lastTimeRef.current = 0;
      }
    };

    // Initial setup
    handleResize();

    // Event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleNetwork;
