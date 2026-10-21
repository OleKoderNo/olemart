import type { CartItem } from "@/types/cart";
import { isCartItem } from "./isCartItem";

const STORAGE_KEY = "olemart-cart-v1";

/**
 * Reads the saved cart in the browser.
 * Invalid data or unavailable storage produces an empty cart.
 */
export function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed) || !parsed.every(isCartItem)) {
      return [];
    }

    const ids = new Set(parsed.map((item) => item.product.id));

    return ids.size === parsed.length ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Saves the cart, removing the saved entry when empty.
 * Storage failures leave the in-memory cart usable.
 */
export function saveCart(items: CartItem[]): void {
  try {
    if (items.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  } catch {
    // Browser storage may be blocked or full. Cart interactions still work.
  }
}
