"use client";

import { Button } from "@/components/ui/Button";

interface AddToCartProps {
  productName: string;
  disabled?: boolean;
}

export function AddToCart({ productName, disabled }: AddToCartProps) {
  const handleAddToCart = () => {
    // Placeholder — will connect to Shopify Cart API
    console.log(`Added ${productName} to cart`);
  };

  return (
    <Button
      size="large"
      className="w-full"
      onClick={handleAddToCart}
      disabled={disabled}
    >
      {disabled ? "Sold Out" : "Add to Cart"}
    </Button>
  );
}
