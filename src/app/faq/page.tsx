import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Natelier jewelry, shipping, returns, and care.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "Are your stones natural?",
    answer:
      "Yes. Every stone we use is natural, never lab-created. We disclose all treatments upfront — if a sapphire has been heat-treated or an emerald has minor oiling, we'll tell you. No surprises.",
  },
  {
    question: "What metals do you use?",
    answer:
      "We work primarily in 18-karat gold (yellow, white, and rose) and platinum. We don't use plated or vermeil. Every piece is solid throughout.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Most pieces ship within 3-5 business days. Custom and made-to-order pieces take 4-6 weeks. All orders over $200 include free shipping within the US.",
  },
  {
    question: "Do you offer returns?",
    answer:
      "Yes. If a piece isn't right, you have 14 days to return it in its original condition for a full refund. Custom pieces are final sale. See our Shipping & Returns page for full details.",
  },
  {
    question: "Can I resize a ring?",
    answer:
      "Most of our rings can be resized within 1-2 sizes up or down. Contact us with your order number and we'll arrange it. The first resize is complimentary.",
  },
  {
    question: "How should I care for my jewelry?",
    answer:
      "Remove pieces before swimming, showering, or exercising. Store them in the pouch or box provided. Clean gently with a soft cloth. For deeper cleaning or stone-specific care, see our Care Guide.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Not yet, but we're working on it. Currently we ship within the United States. Sign up for our newsletter to be notified when international shipping becomes available.",
  },
  {
    question: "How does the modular system work?",
    answer:
      "Every Natelier piece is designed to work alone and together. Pieces within the same collection are proportionally matched, and many pieces across collections complement each other. Visit The System page to learn more.",
  },
];

export default function FAQPage() {
  return (
    <section className="py-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getFAQSchema(faqs),
            getBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "FAQ", url: "/faq" },
            ]),
          ]),
        }}
      />
      <Container>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-3xl">
            <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-text-secondary">
              If your question isn&apos;t here,{" "}
              <a
                href="/contact"
                className="text-text-primary underline hover:no-underline"
              >
                reach out
              </a>
              . We&apos;re happy to help.
            </p>
          </div>

          <div className="space-y-2xl">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-border-secondary pb-2xl"
              >
                <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                  {faq.question}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
