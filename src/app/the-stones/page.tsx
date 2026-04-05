import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Stones",
  description:
    "We choose stones for their character, not just their grade. Learn about our sourcing, treatment transparency, and stone philosophy.",
  alternates: { canonical: "/the-stones" },
};

const stones = [
  {
    name: "Sapphires",
    origin: "Sri Lanka & Madagascar",
    description:
      "We favor sapphires with depth of color over maximum carat weight. Our Sri Lankan stones have the velvety blue that the island is known for. Madagascar sapphires bring a slightly different character — often with subtle secondary hues that make each one unique.",
    href: "/collections/sapphires",
  },
  {
    name: "Rubies",
    origin: "Mozambique & Myanmar",
    description:
      "The rarest of the classical stones. Our Mozambique rubies carry a warm, slightly pinkish red. Burmese rubies — when we can source them — have the coveted pigeon-blood color. We never compromise on origin transparency.",
    href: "/collections/rubies",
  },
  {
    name: "Emeralds",
    origin: "Colombia & Zambia",
    description:
      "Every emerald has inclusions — the jardins that tell the story of how the stone formed over millions of years. We don't hide them. Colombian emeralds bring warmth; Zambian emeralds bring a cooler, deeper green. Both are honest.",
    href: "/collections/emeralds",
  },
  {
    name: "Diamonds",
    origin: "Botswana",
    description:
      "Conflict-free, traceable. We favor warmer tones and interesting cuts over the chase for colorless perfection. A diamond with character — a warm J color, an antique cut — tells a better story than a technically flawless stone with no personality.",
    href: "/collections/diamonds",
  },
];

export default function TheStonesPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto text-center mb-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
            The Stones
          </p>
          <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-xl">
            We choose stones for their character, not just their grade.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Every stone has a story — where it formed, how it was cut, why we
            chose it. No treatments are hidden. No grades are inflated.
          </p>
        </div>

        <div className="space-y-3xl max-w-[800px] mx-auto">
          {stones.map((stone) => (
            <div
              key={stone.name}
              className="grid grid-cols-1 md:grid-cols-2 gap-2xl items-start"
            >
              <div className="aspect-square bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs">
                [{stone.name} Close-up]
              </div>
              <div>
                <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-md">
                  {stone.name}
                </h2>
                <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-lg">
                  Origin: {stone.origin}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-lg">
                  {stone.description}
                </p>
                <Link
                  href={stone.href}
                  className="text-sm text-text-primary underline hover:no-underline transition-all duration-300"
                >
                  View {stone.name} Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
