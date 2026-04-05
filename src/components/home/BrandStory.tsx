"use client";

import { FadeIn } from "@/components/ui/PageTransition";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="py-4xl bg-bg-secondary">
      <Container>
        <div className="max-w-[680px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-lg">
              Our Story
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-[36px] md:text-[48px] font-semibold text-text-primary leading-tight mb-xl">
              We started Natelier because we believed jewelry shouldn&apos;t be
              complicated.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed mb-2xl">
              Every piece is handcrafted with one question in mind: will this
              still matter in twenty years? We source stones for their character,
              not just their grade. We design for people who think before they
              buy.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/about"
              className="text-sm text-text-primary underline hover:no-underline transition-all duration-300"
            >
              Read Our Story
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
