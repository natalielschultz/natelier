import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Natelier terms of service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-2xl">
            Terms of Service
          </h1>
          <p className="text-xs text-text-tertiary mb-3xl">
            Last updated: April 2026
          </p>

          <div className="space-y-2xl text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Overview
              </h2>
              <p>
                By accessing or using thenatelier.com, you agree to these terms.
                If you do not agree, please do not use the site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Products & Pricing
              </h2>
              <p>
                All prices are listed in US dollars. We reserve the right to
                update pricing at any time. Product images are representative —
                natural stones vary in color and inclusion patterns.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Orders
              </h2>
              <p>
                Placing an order constitutes an offer to purchase. We reserve the
                right to decline or cancel orders at our discretion. You will be
                notified if your order cannot be fulfilled.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Intellectual Property
              </h2>
              <p>
                All content on this site — including images, text, designs, and
                the Natelier name — is owned by Natelier and may not be
                reproduced without permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Contact
              </h2>
              <p>
                Questions about these terms? Contact us at{" "}
                <a
                  href="/contact"
                  className="text-text-primary underline hover:no-underline"
                >
                  our contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
