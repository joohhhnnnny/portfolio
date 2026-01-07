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

  const getSpeed = useCallback(() => {
    if (speed === "fast") return "20s";
    if (speed === "normal") return "40s";
    return "60s";
  }, [speed]);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
      containerRef.current.style.setProperty("--animation-duration", getSpeed());
      scrollerRef.current.classList.add("animate-scroll-tech");
    }
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
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="flex flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/[0.1] bg-black/50 hover:bg-white/5 hover:border-white/[0.2] transition-all duration-300 min-w-[120px]"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-white/80 text-sm font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
