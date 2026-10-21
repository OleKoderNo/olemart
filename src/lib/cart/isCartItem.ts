import type { CartItem } from "@/types/cart";

/** Checks whether an unknown value is a non-null object. */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Checks whether a value is a finite, non-negative price. */
function isPrice(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

/** Validates stored cart data before it is used by the application. */
export function isCartItem(value: unknown): value is CartItem {
  if (!isObject(value) || !isObject(value.product)) {
    return false;
  }

  const { product, quantity } = value;

  return (
    typeof quantity === "number" &&
    Number.isSafeInteger(quantity) &&
    quantity >= 1 &&
    typeof product.id === "string" &&
    product.id.length > 0 &&
    typeof product.title === "string" &&
    isPrice(product.price) &&
    isPrice(product.discountedPrice) &&
    isObject(product.image) &&
    typeof product.image.url === "string" &&
    typeof product.image.alt === "string"
  );
}
