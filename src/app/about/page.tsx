import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Natelier. Handcrafted jewelry for people who think before they buy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
            Our Story
          </p>
          <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-2xl">
            We started Natelier because we believed jewelry shouldn&apos;t be
            complicated.
          </h1>

          <div className="aspect-[3/2] bg-bg-tertiary rounded-[4px] flex items-center justify-center text-text-tertiary text-xs mb-3xl">
            [Founder / Studio Image]
          </div>

          <div className="space-y-xl text-base text-text-secondary leading-relaxed">
            <p>
              Every piece is handcrafted with one question in mind: will this
              still matter in twenty years? We source stones for their character,
              not just their grade. We design for people who think before they buy.
            </p>
            <p>
              Natelier was born from a simple observation: the jewelry industry
              had become noisy. Too many brands chasing trends, cutting corners
              on materials, and wrapping mediocre work in aspirational marketing.
              We wanted to do the opposite.
            </p>
            <p>
              We work with a small network of trusted stone dealers and master
              jewelers. Every sapphire, ruby, emerald, and diamond is hand-selected.
              Every setting is finished by hand. We don&apos;t hide treatments or
              inflate grades. We don&apos;t pretend our stones are something
              they&apos;re not.
            </p>
            <p>
              Our pieces are designed as a system — each one stands alone, but
              together they tell a fuller story. A pendant pairs with studs. A
              ring stacks with a band. The system grows with you, at your pace.
            </p>
            <p>
              We believe that real quality doesn&apos;t need to announce itself.
              It&apos;s in the weight of the gold, the depth of the stone, the
              precision of the setting. It&apos;s in the way a piece feels on
              your skin. That&apos;s what we&apos;re after.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
