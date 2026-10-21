import ProductCard from "@/components/products/ProductCard";
import { exampleProduct } from "./exampleProduct";

/**
 * Demonstrates discounted and regular pricing with the same demo product.
 * The regular-price example sets both prices equal to represent no discount.
 */
export default function ProductCardExamples() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">With discount</h3>

        <ProductCard product={exampleProduct} />
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Without discount</h3>

        <ProductCard
          product={{
            ...exampleProduct,
            discountedPrice: exampleProduct.price,
          }}
        />
      </div>
    </div>
  );
}
