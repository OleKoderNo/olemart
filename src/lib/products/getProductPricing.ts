import type { Product } from "@/types/product";

type ProductPricing = {
  hasDiscount: boolean;
  displayPrice: number;
  discountPercentage: number;
};

/**
 * Determines the selling price and discount information.
 * Equal original and discounted prices mean there is no discount.
 *
 * @param product - The original and discounted prices from the API.
 * @returns The selling price, discount status, and rounded percentage.
 */
export function getProductPricing(
  product: Pick<Product, "price" | "discountedPrice">,
): ProductPricing {
  const hasDiscount = product.discountedPrice < product.price;

  const displayPrice = hasDiscount ? product.discountedPrice : product.price;

  const discountPercentage =
    hasDiscount && product.price > 0
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100,
        )
      : 0;

  return {
    hasDiscount,
    displayPrice,
    discountPercentage,
  };
}
