"use client";

import { useReducer, type ReactNode } from "react";
import { CartContext, type CartContextValue } from "@/context/CartContext";
import { cartReducer } from "@/lib/cart/cartReducer";
import { getCartItemCount, getCartTotal } from "@/lib/cart/cartTotals";
import type { CartItem } from "@/types/cart";

type CartProviderProps = {
  children: ReactNode;
};

const initialItems: CartItem[] = [];

/**
 * Shares cart state and actions with its children.
 * State lasts while the provider is mounted; refreshing resets the cart.
 */
export default function CartProvider({ children }: CartProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, initialItems);

  const value: CartContextValue = {
    items,
    // Derive these values from items so they always match the current cart.
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
