"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import type { CartProduct } from "@/types/cart";

type AddToCartButtonProps = {
  product: CartProduct;
};

/**
 * Adds one unit of a product and announces confirmation.
 * Disabled until the saved cart has been restored.
 */
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, isReady } = useCart();
  const [addedCount, setAddedCount] = useState(0);

  /** Adds the product and tracks additions made through this button. */
  function handleAdd() {
    addItem(product);
    setAddedCount((count) => count + 1);
  }

  return (
    <div className="space-y-2">
      <Button text="Add to cart" onClick={handleAdd} disabled={!isReady} />

      <p role="status" className="min-h-5 text-sm text-slate-600">
        {addedCount > 0 && `${product.title} added to cart (${addedCount}).`}
      </p>
    </div>
  );
}
