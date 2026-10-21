import ProductGrid from "@/components/products/ProductGrid";
import { exampleProduct } from "@/components/design-system/product-card/exampleProduct";
import type { Product } from "@/types/product";

/**
 * Demo copies for previewing grid spacing and discount states.
 * Generated IDs are for documentation only, not real product pages.
 */
const exampleProducts: Product[] = Array.from({ length: 6 }, (_, index) => ({
  ...exampleProduct,
  id: `grid-example-${index + 1}`,
  discountedPrice:
    index % 2 === 0 ? exampleProduct.discountedPrice : exampleProduct.price,
}));

/** Previews a populated product grid and its empty state. */
export default function ProductGridExamples() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Responsive grid</h3>
        <ProductGrid products={exampleProducts} />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Empty grid</h3>
        <ProductGrid products={[]} />
      </div>
    </div>
  );
}
