import type { Product } from "@/types/product";
import { getProductPricing } from "./getProductPricing";

/** Available sorting options and their labels. */
export const productSortOptions = [
  { value: "default", label: "Default order" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "title-asc", label: "Title: A–Z" },
  { value: "rating-desc", label: "Rating: highest first" },
] as const;

/** Valid sorting values, derived from the options above. */
export type ProductSort = (typeof productSortOptions)[number]["value"];

/** Validates a sorting value and falls back to the default order. */
export function parseProductSort(value: unknown): ProductSort {
  return (
    productSortOptions.find((option) => option.value === value)?.value ??
    "default"
  );
}

/**
 * Returns a sorted copy without changing the original array.
 * Price sorting uses the actual selling price from shared pricing logic.
 */
export function sortProducts(
  products: Product[],
  sort: ProductSort,
): Product[] {
  return [...products].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return (
          getProductPricing(a).displayPrice - getProductPricing(b).displayPrice
        );

      case "price-desc":
        return (
          getProductPricing(b).displayPrice - getProductPricing(a).displayPrice
        );

      case "title-asc":
        return a.title.localeCompare(b.title, "en");

      case "rating-desc":
        return b.rating - a.rating;

      default:
        return 0;
    }
  });
}
