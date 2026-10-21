import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ProductSearchExamples from "./ProductSearchExamples";

/** Documents product search, dismissal, and local previews. */
export default function ProductSearchDocumentation() {
  return (
    <GuidelineSection
      id="product-search"
      title="Product search"
      description="Search product titles and select a matching result."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Pass the complete catalogue, not just the visible product page.</li>
        <li>Search ignores letter casing and surrounding whitespace.</li>
        <li>An empty search hides the results panel.</li>
        <li>Unmatched searches display “No products found.”</li>
        <li>Use Tab to reach results and Enter to select one.</li>
        <li>
          Escape, clicking outside, or moving focus outside closes the panel.
        </li>
        <li>Shop results link to product details.</li>
        <li>Provide onProductSelect for local previews without navigation.</li>
        <li>
          Search appears in the shared header and is available across the site.
        </li>
      </ul>

      <CodeExample
        code={`import ProductSearch from "@/components/products/ProductSearch";

<ProductSearch products={products} />`}
      />

      <p className="text-sm text-slate-600">
        Try “toy” for multiple results, “gold” for one, or “xyz” for no results.
        These fictional examples stay on this page.
      </p>

      <ProductSearchExamples />
    </GuidelineSection>
  );
}
