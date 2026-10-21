import type { CartItem } from "@/types/cart";
import { getProductPricing } from "@/lib/products/getProductPricing";

/**
 * Returns a cart item's total in øre.
 *
 * JavaScript cannot represent some decimal numbers exactly.
 * For example, 0.1 + 0.2 produces 0.30000000000000004.
 *
 * We convert the unit price from NOK to whole øre before multiplying
 * and adding amounts. Math.round removes any floating-point residue
 * from the conversion, assuming prices have at most two decimal places.
 *
 * API prices remain in NOK; øre is only used for calculations.
 */
function getItemTotalInOre(item: CartItem): number {
  const { displayPrice } = getProductPricing(item.product);
  const unitPriceInOre = Math.round(displayPrice * 100);

  return unitPriceInOre * item.quantity;
}

/** Returns the total quantity of all products in the cart. */
export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

/** Returns one cart item's total, converted from øre back to NOK. */
export function getCartItemTotal(item: CartItem): number {
  return getItemTotalInOre(item) / 100;
}

/**
 * Calculates the cart total using whole øre, then converts it to NOK.
 * Conversion happens after summing to keep the addition in whole numbers.
 */
export function getCartTotal(items: CartItem[]): number {
  const totalInOre = items.reduce(
    (total, item) => total + getItemTotalInOre(item),
    0,
  );

  return totalInOre / 100;
}
