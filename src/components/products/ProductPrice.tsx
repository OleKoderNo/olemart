import clsx from "clsx";
import { getProductPricing } from "@/lib/products/getProductPricing";
import type { Product } from "@/types/product";

type ProductPriceProps = Pick<Product, "price" | "discountedPrice"> & {
  className?: string;
};

/**
 * Displays theme-aware prices with two decimal places and NOK currency.
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
        <span className="text-sm text-muted-foreground">
          <span className="sr-only">Original price: </span>
          <s>{price.toFixed(2)} NOK</s>
        </span>
      )}

      <span className="font-semibold text-foreground">
        <span className="sr-only">Current price: </span>
        {displayPrice.toFixed(2)} NOK
      </span>
    </div>
  );
}
