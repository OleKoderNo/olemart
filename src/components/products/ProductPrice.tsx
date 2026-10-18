import clsx from "clsx";
import { getProductPricing } from "@/lib/products/getProductPricing";
import type { Product } from "@/types/product";

type ProductPriceProps = Pick<Product, "price" | "discountedPrice"> & {
  className?: string;
};

/**
 * Displays the selling price with two decimal places.
 * Shows the original price struck through only when a discount applies.
 */
export default function ProductPrice({
  price,
  discountedPrice,
  className,
}: ProductPriceProps) {
  const { hasDiscount, displayPrice } = getProductPricing({
    price,
    discountedPrice,
  });

  return (
    <div className={clsx("flex flex-wrap items-baseline gap-2", className)}>
      {hasDiscount && (
        <span className="text-sm text-slate-600">
          <span className="sr-only">Original price: </span>
          <s>{price.toFixed(2)} NOK</s>
        </span>
      )}

      <span className="font-semibold text-slate-900">
        <span className="sr-only">Current price: </span>
        {displayPrice.toFixed(2)} NOK
      </span>
    </div>
  );
}
