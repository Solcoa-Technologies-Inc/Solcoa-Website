import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function AccentSpinner({ className }: Props) {
  return (
    <div
      className={cn(
        "border border-white/25 w-6 aspect-square rounded-full relative translate-x-1/2 translate-y-1/2 group/accent-spinner",
        className
      )}
    >
      <div className="w-18 h-[1px] bg-white/25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/accent-spinner:rotate-180 transition-transform duration-500 ease-in-out"></div>
    </div>
  );
}
