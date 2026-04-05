import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Care Guide",
  description: "How to care for your Natelier jewelry so it lasts a lifetime.",
};

export default function CareGuidePage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-3xl">
            <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-lg">
              Care Guide
            </h1>
            <p className="text-lg text-text-secondary">
              Your pieces are made to last. A little care goes a long way.
            </p>
          </div>

          <div className="space-y-3xl">
            <div>
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Daily Wear
              </h2>
              <ul className="space-y-md text-sm text-text-secondary leading-relaxed">
                <li>Remove jewelry before swimming, showering, or exercising.</li>
                <li>Apply perfume, lotion, and sunscreen before putting on your pieces.</li>
                <li>Jewelry should be the last thing you put on and the first thing you take off.</li>
              </ul>
            </div>

            <div className="border-t border-border-secondary pt-3xl">
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Cleaning
              </h2>
              <ul className="space-y-md text-sm text-text-secondary leading-relaxed">
                <li>Wipe gently with a soft, lint-free cloth after each wear.</li>
                <li>For deeper cleaning, use warm water with a drop of mild soap. Pat dry thoroughly.</li>
                <li>Avoid ultrasonic cleaners for pieces with emeralds or opals.</li>
                <li>Professional cleaning is recommended once a year for frequently worn pieces.</li>
              </ul>
            </div>

            <div className="border-t border-border-secondary pt-3xl">
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Storage
              </h2>
              <ul className="space-y-md text-sm text-text-secondary leading-relaxed">
                <li>Store each piece separately in the pouch or box provided.</li>
                <li>Keep pieces away from direct sunlight and extreme temperatures.</li>
                <li>Store in a cool, dry place. Humidity can tarnish metals over time.</li>
              </ul>
            </div>

            <div className="border-t border-border-secondary pt-3xl">
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Stone-Specific Care
              </h2>
              <div className="space-y-2xl">
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-md">Sapphires & Rubies</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Durable stones (9 on the Mohs scale). Safe for warm water cleaning. Avoid harsh chemicals.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-md">Emeralds</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    More delicate (7.5-8 on the Mohs scale). Avoid ultrasonic cleaners, steam, and harsh chemicals. The natural oils that enhance clarity can be affected by heat.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-md">Diamonds</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    The hardest natural material (10 on the Mohs scale). Safe for most cleaning methods. A soft toothbrush with warm soapy water works well for stubborn buildup.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary border border-border-secondary rounded-[4px] p-2xl mt-3xl">
              <p className="text-sm text-text-secondary leading-relaxed">
                Questions about caring for a specific piece?{" "}
                <a
                  href="/contact"
                  className="text-text-primary underline hover:no-underline"
                >
                  Contact us
                </a>
                . We&apos;re happy to help.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
