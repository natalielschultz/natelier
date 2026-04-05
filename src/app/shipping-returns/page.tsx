import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Natelier shipping information and return policy.",
  alternates: { canonical: "/shipping-returns" },
};

export default function ShippingReturnsPage() {
  return (
    <section className="py-4xl">
      <Container>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-3xl">
            <h1 className="font-heading text-[48px] font-semibold text-text-primary leading-tight mb-lg">
              Shipping & Returns
            </h1>
          </div>

          <div className="space-y-3xl">
            <div>
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Shipping
              </h2>
              <div className="space-y-md text-sm text-text-secondary leading-relaxed">
                <p>Free shipping on all orders over $200 within the United States.</p>
                <p>Standard shipping (3-5 business days): $15.</p>
                <p>All orders are shipped fully insured via FedEx or UPS with signature required.</p>
                <p>Made-to-order and custom pieces ship within 4-6 weeks.</p>
                <p>International shipping is not yet available.</p>
              </div>
            </div>

            <div className="border-t border-border-secondary pt-3xl">
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Returns
              </h2>
              <div className="space-y-md text-sm text-text-secondary leading-relaxed">
                <p>We accept returns within 14 days of delivery for a full refund.</p>
                <p>Items must be in their original, unworn condition with all packaging.</p>
                <p>Custom and made-to-order pieces are final sale.</p>
                <p>To initiate a return, contact us with your order number.</p>
                <p>Refunds are processed within 5-7 business days of receiving the return.</p>
              </div>
            </div>

            <div className="border-t border-border-secondary pt-3xl">
              <h2 className="font-heading text-[28px] font-semibold text-text-primary mb-lg">
                Exchanges & Resizing
              </h2>
              <div className="space-y-md text-sm text-text-secondary leading-relaxed">
                <p>Most rings can be resized within 1-2 sizes. The first resize is complimentary.</p>
                <p>For exchanges, contact us within 14 days of delivery.</p>
                <p>We&apos;ll cover return shipping for exchanges within the US.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
