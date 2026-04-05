"use client";

import { FadeIn } from "@/components/ui/PageTransition";
import { Container } from "@/components/ui/Container";

export function Newsletter() {
  return (
    <section className="py-4xl">
      <Container>
        <FadeIn>
          <div className="max-w-[520px] mx-auto text-center">
            <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
              Quiet updates from the studio.
            </h2>
            <p className="text-sm text-text-secondary mb-2xl leading-relaxed">
              New pieces, stories behind the stones, and occasional reflections
              on craft. No noise. Unsubscribe anytime.
            </p>
            <form className="flex gap-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-lg py-md border border-border-primary rounded-[2px] text-sm bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-lg py-md bg-button-primary-bg text-button-primary-text text-sm font-medium rounded-[2px] hover:bg-button-primary-hover transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
