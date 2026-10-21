"use client";

import { createContext } from "react";
import type { CartItem, CartProduct } from "@/types/cart";

/** Shared cart data and actions available to consuming components. */
export type CartContextValue = {
  items: CartItem[];
  isReady: boolean;
  itemCount: number;
  total: number;
  addItem: (product: CartProduct) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

/** Null lets useCart detect when the provider is missing. */
export const CartContext = createContext<CartContextValue | null>(null);
