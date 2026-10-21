import type { Product } from "@/types/product";
import ProductCard from "@/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
};

/**
 * Displays products in one column on mobile, two on tablet,
 * and three on desktop.
 */
export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-slate-600">No products found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
