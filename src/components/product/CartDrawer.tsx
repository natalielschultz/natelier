"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-text-primary/20"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[95] w-full max-w-[420px] bg-bg-secondary border-l border-border-secondary flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-lg border-b border-border-secondary">
              <h2 className="font-heading text-lg font-semibold text-text-primary">
                Your Cart
              </h2>
              <button
                onClick={onClose}
                className="text-text-primary p-sm"
                aria-label="Close cart"
              >
                <svg
                  width="20"
                  height="20"
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

            {/* Body */}
            <div className="flex-1 flex items-center justify-center p-2xl">
              <div className="text-center">
                <p className="text-sm text-text-secondary mb-md">
                  Your pieces are ready whenever you are.
                </p>
                <p className="text-xs text-text-tertiary">
                  We&apos;ll be here.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-lg border-t border-border-secondary">
              <Button size="large" className="w-full" disabled>
                Checkout
              </Button>
              <p className="text-xs text-text-tertiary text-center mt-md">
                Shipping calculated at checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
