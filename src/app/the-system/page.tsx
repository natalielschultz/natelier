import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The System",
  description:
    "Pieces that connect, transform, and grow with you. Natelier jewelry is designed as a modular system.",
};

export default function TheSystemPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto text-center mb-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
            The System
          </p>
          <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-xl">
            Pieces that connect, transform, and grow with you.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Every Natelier piece is designed to work alone — and together.
            A pendant becomes part of a set. A ring stacks with another.
            The system grows with you, at your pace.
          </p>
        </div>

        {/* Visual demonstration area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2xl mb-3xl">
          <div className="text-center">
            <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs mb-lg">
              [Stand Alone]
            </div>
            <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
              Stand Alone
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Each piece is complete on its own. Designed with enough presence
              to need nothing else.
            </p>
          </div>
          <div className="text-center">
            <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs mb-lg">
              [Connect]
            </div>
            <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
              Connect
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Pair pieces from the same collection or across collections.
              The proportions are designed to work together.
            </p>
          </div>
          <div className="text-center">
            <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs mb-lg">
              [Transform]
            </div>
            <h3 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
              Transform
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Build your collection over time. Stack rings, layer necklaces,
              mix stones. The system adapts to you.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/collections">
            <Button>Explore Collections</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
