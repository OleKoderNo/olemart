"use client";

import { useEffect, useReducer } from "react";
import type { CartAction, CartItem } from "@/types/cart";
import { cartReducer } from "@/lib/cart/cartReducer";
import { loadCart, saveCart } from "@/lib/cart/cartStorage";

type CartState = {
  items: CartItem[];
  isReady: boolean;
};

type StateAction = CartAction | { type: "restore"; items: CartItem[] };

/** Adds restoration tracking around the existing cart reducer. */
function stateReducer(state: CartState, action: StateAction): CartState {
  if (action.type === "restore") {
    // Avoid restoring twice during development's effect checks.
    return state.isReady ? state : { items: action.items, isReady: true };
  }

  if (!state.isReady) {
    return state;
  }

  return {
    ...state,
    items: cartReducer(state.items, action),
  };
}

/**
 * Manages cart state with optional browser persistence.
 * Keep persist unchanged throughout the provider's lifetime.
 */
export function useCartState(persist: boolean) {
  const [state, dispatch] = useReducer(stateReducer, {
    items: [],
    isReady: !persist,
  });

  useEffect(() => {
    if (persist) {
      dispatch({ type: "restore", items: loadCart() });
    }
  }, [persist]);

  useEffect(() => {
    if (persist && state.isReady) {
      saveCart(state.items);
    }
  }, [persist, state.isReady, state.items]);

  return { ...state, dispatch };
}
