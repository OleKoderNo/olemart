"use client";

import { useCart } from "@/hooks/useCart";

/** Displays the total quantity of products in the shared cart. */
export default function CartCount() {
  const { itemCount } = useCart();

  return <span>({itemCount})</span>;
}
