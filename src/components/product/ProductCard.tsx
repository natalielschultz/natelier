"use client";

import Link from "next/link";
import { formatPrice, type Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="bg-bg-secondary border border-border-secondary rounded-[4px] overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-elevated group-hover:-translate-y-0.5">
        <div className="aspect-[4/5] bg-bg-tertiary flex items-center justify-center text-text-tertiary text-xs">
          [Product Image]
        </div>
        <div className="p-lg">
          <h3 className="font-heading text-base font-semibold text-text-primary mb-sm">
            {product.name}
          </h3>
          <p className="text-xl font-medium text-text-primary mb-md">
            {formatPrice(product.price)}
          </p>
          <div className="flex gap-sm flex-wrap">
            <span className="bg-bg-tertiary text-text-secondary px-md py-sm rounded-[2px] text-xs font-medium">
              {product.category}
            </span>
            <span className="bg-bg-tertiary text-text-secondary px-md py-sm rounded-[2px] text-xs font-medium">
              {product.stone}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
