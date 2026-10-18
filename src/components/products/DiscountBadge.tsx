import clsx from "clsx";
import { getProductPricing } from "@/lib/products/getProductPricing";
import type { Product } from "@/types/product";

type DiscountBadgeProps = Pick<Product, "price" | "discountedPrice"> & {
  className?: string;
};

/**
 * Displays a discount percentage when the discounted price is lower.
 * Renders nothing for products without a discount.
 */
export default function DiscountBadge({
  price,
  discountedPrice,
  className,
}: DiscountBadgeProps) {
  const { hasDiscount, discountPercentage } = getProductPricing({
    price,
    discountedPrice,
  });

  if (!hasDiscount) return null;

  return (
    <span
      className={clsx(
        "inline-flex rounded-full bg-red-700 px-3 py-1",
        "text-xs font-semibold text-white",
        className,
      )}
    >
      {discountPercentage === 0 ? "<1" : discountPercentage}% off
    </span>
  );
}
