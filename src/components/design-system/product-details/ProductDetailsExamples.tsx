import type { ProductReview } from "@/types/product";
import ProductDetails from "@/components/products/ProductDetails";
import ProductReviews from "@/components/products/ProductReviews";
import { exampleProduct } from "../product-card/exampleProduct";

/** Fictional review used only to demonstrate the populated review state. */
const exampleReviews: ProductReview[] = [
  {
    id: "demo-review-1",
    username: "Example customer",
    rating: 4,
    description: "A nicely detailed model that looks great on my shelf.",
  },
];

/** Previews full product details and a populated review list. */
export default function ProductDetailsExamples() {
  return (
    <div className="space-y-10">
      <ProductDetails product={exampleProduct} headingLevel={3} />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Populated reviews example</h3>

        <p className="text-sm text-slate-600">
          This fictional review is for documentation only.
        </p>

        <ProductReviews reviews={exampleReviews} />
      </div>
    </div>
  );
}
