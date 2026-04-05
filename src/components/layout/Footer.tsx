import Link from "next/link";
import { Container } from "@/components/ui/Container";

const shopLinks = [
  { href: "/collections", label: "All Collections" },
  { href: "/the-system", label: "The System" },
  { href: "/the-stones", label: "The Stones" },
  { href: "/custom", label: "Custom" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/care-guide", label: "Care Guide" },
  { href: "/faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-secondary mt-4xl">
      <Container className="py-3xl">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3xl mb-3xl pb-3xl border-b border-border-secondary">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-heading text-lg font-semibold text-text-primary"
            >
              Natelier
            </Link>
            <p className="mt-lg text-sm text-text-secondary leading-relaxed">
              Handcrafted jewelry for those who appreciate quality and restraint.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-lg">
              Shop
            </h4>
            <ul className="space-y-md">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-lg">
              Company
            </h4>
            <ul className="space-y-md">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-lg">
              Stay in Touch
            </h4>
            <p className="text-sm text-text-secondary mb-lg">
              New pieces, stories from the studio, and quiet updates.
            </p>
            <form className="flex gap-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-lg py-md border border-border-primary rounded-[2px] text-sm bg-bg-primary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-text-primary transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-lg py-md bg-button-primary-bg text-button-primary-text text-sm font-medium rounded-[2px] hover:bg-button-primary-hover transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-lg">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Natelier. All rights reserved.
          </p>
          <div className="flex gap-2xl">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-tertiary hover:text-text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
