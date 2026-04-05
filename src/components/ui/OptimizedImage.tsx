"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import clsx from "clsx";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  className?: string;
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <Image
        {...props}
        alt={alt}
        className={clsx(
          "transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-bg-tertiary animate-pulse" />
      )}
    </div>
  );
}
