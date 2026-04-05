"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/PageTransition";
import { Container } from "@/components/ui/Container";
import { getFeaturedProducts, formatPrice } from "@/lib/mock-data";

export function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-4xl">
      <Container>
        <FadeIn>
          <div className="text-center mb-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
              Selected Pieces
            </p>
            <h2 className="font-heading text-[36px] font-semibold text-text-primary">
              The Collection
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
          {featured.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <Link href={`/products/${product.handle}`} className="group block">
                <div className="bg-bg-secondary border border-border-secondary rounded-[4px] overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-elevated group-hover:-translate-y-0.5">
                  {/* Image placeholder */}
                  <div className="aspect-[4/5] bg-bg-tertiary flex items-center justify-center text-text-tertiary text-xs">
                    [Product Image]
                  </div>
                  <div className="p-lg">
                    <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-sm">
                      {product.collection}
                    </p>
                    <h3 className="font-heading text-base font-semibold text-text-primary mb-md">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-md leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <p className="text-xl font-medium text-text-primary">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-3xl">
            <Link
              href="/collections"
              className="text-sm text-text-primary underline hover:no-underline transition-all duration-300"
            >
              View All Collections
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
