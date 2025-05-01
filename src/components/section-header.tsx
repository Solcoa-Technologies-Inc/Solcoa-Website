import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

export default function SectionHeader({ title, className }: Props) {
  return (
    <div className={cn("text-center flex gap-4 items-center", className)}>
      <div className="w-full h-[1px] bg-white/25"></div>
      <h2 className="font-mono text-white/35 whitespace-nowrap">{title}</h2>
      <div className="w-full h-[1px] bg-white/25"></div>
    </div>
  );
}
