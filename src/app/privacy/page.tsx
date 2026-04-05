import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Natelier privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-2xl">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-tertiary mb-3xl">
            Last updated: April 2026
          </p>

          <div className="space-y-2xl text-sm text-text-secondary leading-relaxed">
            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Information We Collect
              </h2>
              <p>
                We collect information you provide when you make a purchase,
                create an account, sign up for our newsletter, or contact us.
                This includes your name, email address, shipping address, and
                payment information.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                How We Use Your Information
              </h2>
              <p>
                We use your information to fulfill orders, communicate with you
                about your purchase, and send you updates if you&apos;ve opted in.
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Cookies
              </h2>
              <p>
                We use essential cookies to keep the site functioning and
                analytics cookies to understand how visitors use our site. You
                can disable non-essential cookies in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-[22px] font-semibold text-text-primary mb-md">
                Contact
              </h2>
              <p>
                If you have questions about this policy, contact us at{" "}
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
