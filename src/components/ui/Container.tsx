import clsx from "clsx";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-[1200px] px-lg md:px-2xl",
        className
      )}
    >
      {children}
    </Component>
  );
}
