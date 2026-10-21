import type { CartAction, CartItem } from "@/types/cart";

/**
 * Returns the updated cart after an action.
 * Updates create new arrays and objects without changing the previous state.
 */
export function cartReducer(items: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const existingItem = items.find(
        (item) => item.product.id === action.product.id,
      );

      if (existingItem) {
        return items.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { product: action.product, quantity: 1 }];
    }

    case "remove":
      return items.filter((item) => item.product.id !== action.productId);

    case "setQuantity":
      if (!Number.isSafeInteger(action.quantity) || action.quantity < 1) {
        return items;
      }

      return items.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item,
      );

    case "clear":
      return [];
  }
}
