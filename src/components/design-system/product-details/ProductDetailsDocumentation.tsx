import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ProductDetailsExamples from "./ProductDetailsExamples";

/** Documents product details, tags, and review presentation. */
export default function ProductDetailsDocumentation() {
  return (
    <GuidelineSection
      id="product-details"
      title="Product details"
      description="A responsive view of an individual product and its reviews."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Pass a complete Product object using the product prop.</li>
        <li>Fetch the product outside this presentation component.</li>
        <li>Prices and discounts use the shared pricing components.</li>
        <li>Empty tags are hidden. Tags are descriptive labels.</li>
        <li>An empty review list displays “No reviews yet.”</li>
        <li>
          The title defaults to h1. Use headingLevel=&#123;3&#125; inside
          design-system sections.
        </li>
      </ul>

      <CodeExample
        code={`import ProductDetails from "@/components/products/ProductDetails";

// Product page
<ProductDetails product={product} />

// Design-system preview
<ProductDetails product={exampleProduct} headingLevel={3} />`}
      />

      <ProductDetailsExamples />
    </GuidelineSection>
  );
}
