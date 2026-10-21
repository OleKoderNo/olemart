"use client";

import { useContext } from "react";
import { CartContext, type CartContextValue } from "@/context/CartContext";

/**
 * Provides access to the nearest cart provider.
 *
 * @throws If called from a component outside CartProvider.
 */
export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
