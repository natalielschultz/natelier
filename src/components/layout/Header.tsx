"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/the-system", label: "The System" },
  { href: "/the-stones", label: "The Stones" },
  { href: "/about", label: "About" },
  { href: "/custom", label: "Custom" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg-secondary/95 backdrop-blur-sm border-b border-border-secondary">
        <Container className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-semibold text-text-primary tracking-tight"
          >
            Natelier
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.05em] text-text-primary border-b border-transparent hover:border-text-primary transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Cart + Mobile Menu Toggle */}
          <div className="flex items-center gap-lg">
            {/* Cart Icon */}
            <Link
              href="#"
              className="relative text-text-primary hover:text-text-secondary transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-text-primary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
