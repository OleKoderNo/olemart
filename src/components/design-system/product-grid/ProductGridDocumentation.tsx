import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ProductGridExamples from "./ProductGridExamples";

/** Documents product grid usage, responsive layout, and empty state. */
export default function ProductGridDocumentation() {
  return (
    <GuidelineSection
      id="product-grid"
      title="Product grid"
      description="A shared responsive layout for displaying product cards."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Pass an array of products using the products prop.</li>
        <li>Each product must have a unique ID.</li>
        <li>
          The grid displays one, two, or three columns as space increases.
        </li>
        <li>An empty array displays “No products found.”</li>
        <li>Fetch and filter products before passing them to the grid.</li>
      </ul>

      <CodeExample
        code={`import ProductGrid from "@/components/products/ProductGrid";

<ProductGrid products={products} />`}
      />

      <p className="text-sm text-slate-600">
        These examples repeat the demo toy car with alternating discount states.
        Their generated IDs do not link to real product pages.
      </p>

      <ProductGridExamples />
    </GuidelineSection>
  );
}
