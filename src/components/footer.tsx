"use client";

import { links } from "@/constants/nav-links";
import Link from "next/link";
import XIcon from "./icons/X";
import LinkedinIcon from "./icons/Linkedin";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0.85"],
  });

  return (
    <footer className="bg-black w-full px-16 pt-16 pb-24 z-10 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        ref={ref}
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0, 1], [-200, 0]),
        }}
      >
        <div>
          <div className="text-white/50 text-xl tracking-tight">
            Solcoa Industries, Inc.
          </div>
          <div className="text-white/25 font-mono text-xs">
            California, United States
          </div>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.target}
              className="text-white/50 hover:text-white transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-8 md:flex-col lg:flex-row">
          <Link href="https://x.com/solcoatech" target="_blank">
            <XIcon className="w-6 h-6 fill-white/50 hover:fill-white transition-all duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/solcoaindustries/"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6 fill-white/50 hover:fill-white transition-all duration-300" />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
