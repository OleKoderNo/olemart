"use client";

import { useCart } from "@/hooks/useCart";

/**
 * Displays the total quantity of products in the cart.
 * Shows a placeholder while the saved cart is being restored.
 */
export default function CartCount() {
  const { itemCount, isReady } = useCart();

  if (!isReady) {
    return <span aria-label="Loading cart count">(…)</span>;
  }

  return <span>({itemCount})</span>;
}
