"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/PageTransition";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function StonesTeaser() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl items-center">
          {/* Image side */}
          <FadeIn>
            <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs">
              [Stone Close-up Image]
            </div>
          </FadeIn>

          {/* Text side */}
          <FadeIn delay={0.15}>
            <div className="max-w-[440px]">
              <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
                The Stones
              </p>
              <h2 className="font-heading text-[36px] font-semibold text-text-primary leading-tight mb-xl">
                We choose stones for their character, not just their grade.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-2xl">
                Every stone has a story — where it formed, how it was cut, why
                we chose it. We work with sapphires, rubies, emeralds, and
                diamonds sourced from trusted origins. No treatments are hidden.
                No grades are inflated.
              </p>
              <Link href="/the-stones">
                <Button variant="secondary">Learn About Our Stones</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
