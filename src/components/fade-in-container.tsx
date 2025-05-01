"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeInContainer({ children, className }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0.3"],
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        scale: useTransform(scrollYProgress, [0, 1], [0.7, 1]),
      }}
    >
      {children}
    </motion.div>
  );
}
