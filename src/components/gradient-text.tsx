import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactElement<HTMLAttributes<HTMLElement>>;
  className?: string;
};

export default function GradientText({ children, className }: Props) {
  return React.cloneElement(children, {
    className: cn(
      "text-transparent bg-clip-text bg-gradient-to-r from-white/25 to-white/50",
      className,
      children.props.className
    ),
  });
}
