"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteTechCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: string; // image path
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getSpeedValue = () => {
    if (speed === "fast") return 15;
    if (speed === "normal") return 25;
    return 40;
  };

  useEffect(() => {
    if (scrollerRef.current) {
      // Only duplicate if not already done
      if (scrollerRef.current.getAttribute("data-duplicated") === "true") {
        setStart(true);
        return;
      }

      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Duplicate items 3 times for seamless loop on wide screens
      // This ensures enough content even for short item lists
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      scrollerRef.current.setAttribute("data-duplicated", "true");
      setStart(true);
    }
  }, []);

  // Calculate animation based on number of items
  const animationStyle = start
    ? {
        animation: `scroll ${getSpeedValue()}s linear infinite`,
        animationDirection: direction === "left" ? "normal" : "reverse",
      }
    : {};

  return (
    <div
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          gap: "24px",
          ...animationStyle,
        }}
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
