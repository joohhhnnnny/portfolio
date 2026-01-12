"use client";

import React, { useRef, useEffect, useCallback } from "react";

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

export const ParticleNetwork: React.FC<ParticleNetworkProps> = ({
  particleCount = 80,
  particleColor = 
  "rgba(255, 255, 255, 1)",
  // "rgba(139, 92, 246, 0.6)",
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

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
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

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach((particle, i) => {
      // Mouse interaction - particles move away slightly from cursor
      const distToMouse = getDistance(particle, mouse);
      if (distToMouse < mouseRadius) {
        const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
        const force = (mouseRadius - distToMouse) / mouseRadius;
        particle.vx += Math.cos(angle) * force * 0.02;
        particle.vy += Math.sin(angle) * force * 0.02;
      }

      // Apply velocity with damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Ensure minimum velocity for continuous motion
      const currentSpeed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
      if (currentSpeed < speed * 0.3) {
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Draw particle
      drawParticle(ctx, particle);

      // Draw lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const distance = getDistance(particle, particles[j]);
        if (distance < maxDistance) {
          drawLine(ctx, particle, particles[j], distance, maxDistance);
        }
      }

      // Draw line to mouse if close enough
      if (distToMouse < mouseRadius) {
        drawLine(ctx, particle, mouse, distToMouse, mouseRadius);
      }
    });

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

    // Initial setup
    handleResize();

    // Event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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
