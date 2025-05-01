"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type Props = {
  className?: string;
};

export default function BackgroundLines({ className }: Props) {
  const [numLines, setNumLines] = useState(5); // default for mobile

  useEffect(() => {
    const updateNumLines = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        // xl breakpoint
        setNumLines(10);
      } else if (width >= 1024) {
        // lg breakpoint
        setNumLines(8);
      } else if (width >= 768) {
        // md breakpoint
        setNumLines(6);
      } else {
        setNumLines(4); // default for mobile
      }
    };

    // Initial call
    updateNumLines();

    // Add event listener for window resize
    window.addEventListener("resize", updateNumLines);

    // Cleanup
    return () => window.removeEventListener("resize", updateNumLines);
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-screen flex justify-between pointer-events-none",
        className
      )}
    >
      {Array.from({ length: numLines }).map((_, index) => (
        <div
          key={index}
          className="h-full w-[1px] flex justify-between items-center bg-gradient-to-b from-transparent to-white/50 opacity-30"
        />
      ))}
    </div>
  );
}
