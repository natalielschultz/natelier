"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-bg-tertiary overflow-hidden">
      {/* Placeholder for hero image - will be replaced with real photography */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-tertiary/60 to-bg-primary/40" />

      <div className="relative z-10 text-center max-w-[640px] px-lg">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-lg">
            Handcrafted &middot; Intentional &middot; Made to Last
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-[48px] md:text-[64px] font-semibold text-text-primary leading-[1.1] tracking-tight mb-xl">
            Jewelry made for people who care about the work.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-text-secondary mb-2xl leading-relaxed">
            Each piece is handcrafted with one question in mind: will this still
            matter in twenty years?
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Link href="/collections">
            <Button size="large">Explore Collections</Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
