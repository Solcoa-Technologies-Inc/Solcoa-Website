"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "motion/react";
import { links } from "@/constants/nav-links";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full h-16 z-10 sticky top-0 before:content-[''] before:fixed before:top-0 before:left-0 before:right-0 before:h-16 before:bg-gradient-to-t before:from-black/25 before:to-black/50 before:backdrop-blur-sm before:z-[-1]">
      <div
        className={cn(
          "relative flex justify-between items-center border-b border-transparent w-full transition-all duration-300 h-full",
          !isOpen && "border-white/25"
        )}
      >
        <NavProgress className={cn(isOpen && "hidden")} />

        <img
          src="/images/logo.svg"
          alt="Solcoa Industries"
          className="h-full cursor-pointer"
        />

        <div className="hidden md:flex gap-12">
          {links
            .filter((link) => !link.mobileOnly)
            .map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.target}
                className={cn(
                  "text-white/50 hover:text-white transition-all duration-300",
                  link.emphasized &&
                    "text-purple-vibrant hover:underline hover:text-purple-vibrant"
                )}
              >
                {link.label}
              </Link>
            ))}
        </div>

        <MobileMenuButton isOpen={isOpen} onOpenChange={setIsOpen} />

        <div
          className={cn(
            "md:hidden fixed inset-0 text-neutral-400 bg-black/75 z-10 transition-all duration-300 opacity-0 pointer-events-none",
            isOpen && "opacity-100 pointer-events-auto"
          )}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute top-60 px-8 flex flex-col gap-4 text-right w-full text-3xl">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.target}
                className={cn(
                  "w-full py-1 hover:text-white transition-all",
                  link.emphasized &&
                    "text-green-vibrant hover:underline hover:text-green-vibrant"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

type MobileMenuButtonProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

function MobileMenuButton({ isOpen, onOpenChange }: MobileMenuButtonProps) {
  return (
    <div
      onClick={() => onOpenChange(!isOpen)}
      className={cn(
        "relative md:hidden flex justify-between cursor-pointer gap-2 items-center text-neutral-400 transition-all duration-300 z-20",
        isOpen &&
          "text-white translate-y-[8rem] -translate-x-[calc(100vw-4rem-100%)]"
      )}
    >
      <div className={cn("transition-all duration-300", isOpen && "text-2xl")}>
        {isOpen ? "close" : "menu"}
      </div>
      <div
        className={cn(
          "relative flex flex-col gap-2 w-4 justify-between translate-y-[1px] transition-all duration-300"
        )}
      >
        <div
          className={cn(
            "w-full h-[2px] bg-neutral-400",
            isOpen &&
              "bg-white rotate-45 translate-y-[5px] transition-all duration-300"
          )}
        />
        <div
          className={cn(
            "w-full h-[2px] bg-neutral-400",
            isOpen &&
              "bg-white -rotate-45 -translate-y-[5px] transition-all duration-300"
          )}
        />
      </div>
    </div>
  );
}

type NavProgressProps = {
  className?: string;
};

function NavProgress({ className }: NavProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/60 to-white z-[1]",
        scrollYProgress.get() > 0.95 && "from-white",
        className
      )}
      style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
    />
  );
}
