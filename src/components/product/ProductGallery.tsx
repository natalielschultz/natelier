"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-md">
      {/* Main image */}
      <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs overflow-hidden">
        [Product Image — {productName}]
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-md">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-16 h-16 bg-bg-tertiary rounded-[2px] flex items-center justify-center text-[10px] text-text-tertiary border transition-colors duration-300 ${
                selectedIndex === index
                  ? "border-text-primary"
                  : "border-border-secondary hover:border-border-primary"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
