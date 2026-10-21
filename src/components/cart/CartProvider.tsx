"use client";

import type { ReactNode } from "react";
import { CartContext, type CartContextValue } from "@/context/CartContext";
import { useCartState } from "@/hooks/useCartState";
import { getCartItemCount, getCartTotal } from "@/lib/cart/cartTotals";

type CartProviderProps = {
  children: ReactNode;
  persist?: boolean;
};

/**
 * Shares cart state and actions with its children.
 * Enable persist for the shop; leave it disabled for documentation previews.
 */
export default function CartProvider({
  children,
  persist = false,
}: CartProviderProps) {
  const { items, isReady, dispatch } = useCartState(persist);

  const value: CartContextValue = {
    items,
    isReady,
    itemCount: getCartItemCount(items),
    total: getCartTotal(items),

    addItem: (product) => {
      dispatch({ type: "add", product });
    },

    removeItem: (productId) => {
      dispatch({ type: "remove", productId });
    },

    setQuantity: (productId, quantity) => {
      dispatch({ type: "setQuantity", productId, quantity });
    },

    clearCart: () => {
      dispatch({ type: "clear" });
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
