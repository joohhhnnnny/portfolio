"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";

export const InfiniteTechCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const initializedRef = useRef(false);

  const getSpeed = useCallback(() => {
    if (speed === "fast") return "20s";
    if (speed === "normal") return "40s";
    return "60s";
  }, [speed]);

  useEffect(() => {
    // In React Strict Mode (dev), effects can run twice.
    // Guard to avoid duplicating children repeatedly (which changes the total travel distance and appears to speed up).
    addAnimation();
  }, [direction, getSpeed]);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;

    // Always keep speed/direction in sync.
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty("--animation-duration", getSpeed());

    if (initializedRef.current || scrollerRef.current.dataset.cloned === "true") {
      scrollerRef.current.classList.add("animate-scroll-tech");
      return;
    }

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Duplicate items 3x so we have 4 identical sets. The CSS keyframes scroll -25% (one set width).
    for (let i = 0; i < 3; i++) {
      scrollerContent.forEach((item) => {
        scrollerRef.current?.appendChild(item.cloneNode(true));
      });
    }

    scrollerRef.current.dataset.cloned = "true";
    initializedRef.current = true;
    scrollerRef.current.classList.add("animate-scroll-tech");
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 transform-gpu [transform:translate3d(0,0,0)]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="flex flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/[0.1] bg-black/50 hover:bg-white/5 hover:border-white/[0.2] transition-colors duration-300 min-w-[120px] shrink-0 transform-gpu [transform:translate3d(0,0,0)]"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                draggable={false}
                className="w-12 h-12 object-contain block select-none pointer-events-none"
              />
            </div>
            <span className="text-white/80 text-sm font-medium select-none whitespace-nowrap">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
