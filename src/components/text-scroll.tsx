"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string[];
  className?: string;
};

export default function TextScroll({ text, className }: Props) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const [rotations, setRotations] = useState(0);
  const secondLastTextRef = useRef(null);

  useEffect(() => {
    const maxIndex = text.length;
    let timeoutId: NodeJS.Timeout;

    const scheduleNext = () => {
      // 1s for first (index 0) and last (duplicate); 2s otherwise
      const delay =
        currentTextIndex === 0 || currentTextIndex === maxIndex ? 1000 : 2000;

      timeoutId = setTimeout(() => {
        if (currentTextIndex < maxIndex) {
          setHasTransition(true);
          setCurrentTextIndex(currentTextIndex + 1);
        } else {
          // Snap back without transition
          setHasTransition(false);
          if (containerRef.current) {
            containerRef.current.style.translate = "0 0";
          }
          setCurrentTextIndex(0);
          setRotations((rotations) => rotations + 1);
        }
      }, delay);
    };

    if (secondLastTextRef.current) {
      if (rotations % 1000 === 999) {
        // @ts-expect-error - second last text is not used
        secondLastTextRef.current.innerText = "China Cooked 💀😭";
      } else {
        // @ts-expect-error - second last text is not used
        secondLastTextRef.current.innerText = text[text.length - 2];
      }
    }

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, [text, currentTextIndex, rotations]);

  return (
    <div className={cn("overflow-hidden h-[1.1em]", className)}>
      <div
        className={cn(
          "relative",
          hasTransition && "transition-transform duration-300"
        )}
        ref={containerRef}
        style={{
          translate: `0 -${currentTextIndex * 1.5}em`,
        }}
      >
        {text.map((t, i) => (
          <div
            key={i}
            className="whitespace-nowrap h-[1.5em]"
            ref={i === text.length - 2 ? secondLastTextRef : null}
          >
            {t}
          </div>
        ))}
        <div className="whitespace-nowrap">{text[0]}</div>
      </div>
    </div>
  );
}
