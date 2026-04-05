import clsx from "clsx";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
  return (
    <div
      className={clsx(
        "animate-pulse bg-bg-tertiary",
        variant === "text" && "h-4 rounded-[2px]",
        variant === "rectangular" && "rounded-[4px]",
        variant === "circular" && "rounded-full",
        className
      )}
    />
  );
}
