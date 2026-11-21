import ProductCard from "@/components/products/ProductCard";
import { exampleProduct } from "./exampleProduct";

/**
 * Demonstrates discounted and regular pricing with the same demo product.
 * Separate heading and card rows prevent full-height cards overflowing.
 */
export default function ProductCardExamples() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="grid min-w-0 grid-rows-[auto_1fr] gap-3">
        <h3 className="text-lg font-semibold text-foreground">With discount</h3>

        <div className="min-w-0">
          <ProductCard product={exampleProduct} />
        </div>
      </div>

      <div className="grid min-w-0 grid-rows-[auto_1fr] gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          Without discount
        </h3>

        <div className="min-w-0">
          <ProductCard
            product={{
              ...exampleProduct,
              discountedPrice: exampleProduct.price,
            }}
          />
        </div>
      </div>
    </div>
  );
}
