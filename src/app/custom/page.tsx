import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom",
  description:
    "Bespoke jewelry designed around your vision. Tell us what you're looking for and we'll bring it to life.",
  alternates: { canonical: "/custom" },
};

export default function CustomPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-text-tertiary mb-md">
              Bespoke
            </p>
            <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-xl">
              Something made just for you.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              If you have a vision — a specific stone, a particular setting, an
              idea that doesn&apos;t quite exist yet — we can bring it to life.
              Every custom piece begins with a conversation.
            </p>
          </div>

          <form className="space-y-2xl">
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
            <div>
              <label className="text-sm font-medium text-text-primary mb-md block">
                Tell us about your vision
              </label>
              <textarea
                placeholder="Describe what you're looking for — the stone, the setting, the occasion, anything that helps us understand your idea."
                rows={6}
                className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300 resize-vertical"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-text-primary mb-md block">
                Budget Range
              </label>
              <select className="w-full px-lg py-md border border-border-primary rounded-[4px] text-sm bg-bg-secondary text-text-primary focus:outline-none focus:border-text-primary transition-colors duration-300">
                <option>Select a range</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
            <Button size="large" className="w-full">
              Start the Conversation
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
