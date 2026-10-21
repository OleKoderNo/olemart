import ProductRating from "@/components/products/ProductRating";

/** Demonstrates ratings with multiple, single, and no reviews. */
export default function ProductRatingExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Examples</h3>

      <ProductRating rating={4.5} reviewCount={12} />
      <ProductRating rating={3} reviewCount={1} />
      <ProductRating rating={0} reviewCount={0} />
    </div>
  );
}
