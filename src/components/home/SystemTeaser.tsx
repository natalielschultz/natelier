"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/PageTransition";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SystemTeaser() {
  return (
    <section className="py-4xl bg-bg-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl items-center">
          {/* Text side */}
          <FadeIn>
            <div className="max-w-[440px]">
              <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
                The System
              </p>
              <h2 className="font-heading text-[36px] font-semibold text-text-primary leading-tight mb-xl">
                Pieces that connect, transform, and grow with you.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-2xl">
                Natelier pieces are designed as a system. A pendant becomes part
                of a set. A ring stacks with another. Each piece stands on its
                own — but together, they tell a fuller story.
              </p>
              <Link href="/the-system">
                <Button variant="secondary">Discover The System</Button>
              </Link>
            </div>
          </FadeIn>

          {/* Image side */}
          <FadeIn delay={0.15}>
            <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs order-first md:order-last">
              [System Visualization Image]
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
