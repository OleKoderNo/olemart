import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";
import ProductRatingExamples from "./ProductRatingExamples";

/** Documents product ratings, review counts, and the unrated state. */
export default function ProductRatingDocumentation() {
  return (
    <GuidelineSection
      id="product-rating"
      title="Product rating"
      description="A consistent rating display for product cards and detail pages."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Pass the rating supplied by the API.</li>
        <li>Use the length of the reviews array for reviewCount.</li>
        <li>Ratings display one decimal place, out of five.</li>
        <li>Products without reviews display “No reviews yet”.</li>
        <li>The star is decorative; the text communicates the rating.</li>
      </ul>

      <CodeExample
        code={`import ProductRating from "@/components/products/ProductRating";

<ProductRating
  rating={product.rating}
  reviewCount={product.reviews.length}
/>`}
      />

      <ProductRatingExamples />
    </GuidelineSection>
  );
}
