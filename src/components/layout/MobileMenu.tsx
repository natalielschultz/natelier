"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-bg-secondary flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-end p-lg">
            <button
              onClick={onClose}
              className="text-text-primary p-sm"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-3xl">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-[36px] font-semibold text-text-primary"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom */}
          <div className="p-2xl text-center">
            <p className="text-xs uppercase tracking-[0.05em] text-text-tertiary">
              thenatelier.com
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
