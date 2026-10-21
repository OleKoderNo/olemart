import type { Product } from "./product";

/** Product information needed to display and calculate a cart item. */
export type CartProduct = Pick<
  Product,
  "id" | "title" | "price" | "discountedPrice" | "image"
>;

/** A product in the cart and the quantity selected. */
export type CartItem = {
  product: CartProduct;
  quantity: number;
};

/** Supported changes to the shopping cart. */
export type CartAction =
  | { type: "add"; product: CartProduct }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" };
