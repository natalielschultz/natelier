import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Natelier. We're here to help.",
};

export default function ContactPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
              Contact
            </p>
            <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-xl">
              We&apos;re here to help.
            </h1>
            <p className="text-lg text-text-secondary">
              Questions about a piece, your order, or anything else — reach out
              and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
              <div>
                <label className="text-sm font-medium text-text-primary mb-md block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-text-primary mb-md block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary mb-md block">
                Subject
              </label>
              <select className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary focus:outline-none focus:border-text-primary transition-colors duration-300">
                <option>General Inquiry</option>
                <option>Order Status</option>
                <option>Product Question</option>
                <option>Custom / Bespoke</option>
                <option>Returns & Exchanges</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary mb-md block">
                Message
              </label>
              <textarea
                placeholder="Tell us how we can help..."
                rows={6}
                className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300 resize-vertical"
              />
            </div>
            <Button size="large" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
