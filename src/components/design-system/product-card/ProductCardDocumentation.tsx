import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";
import ProductCardExamples from "./ProductCardExamples";

/** Documents product card composition, navigation, and demo states. */
export default function ProductCardDocumentation() {
  return (
    <GuidelineSection
      id="product-card"
      title="Product card"
      description="A reusable product summary for catalogue grids."
    >
      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Pass a complete Product object through the product prop.</li>
        <li>The entire card links to its product detail page.</li>
        <li>Images retain their proportions without cropping.</li>
        <li>Discount badges appear only when the selling price is lower.</li>
        <li>Prices display in NOK using the shared pricing component.</li>
        <li>Use cards beneath a section heading, as titles use h3.</li>
        <li>Do not place additional links or buttons inside the card link.</li>
      </ul>

      <CodeExample
        code={`import ProductCard from "@/components/products/ProductCard";

<ProductCard product={product} />`}
      />

      <p className="text-sm text-muted-foreground">
        These examples demonstrate discounted and full-price states using demo
        data. Selecting a card opens the product route using its ID.
      </p>

      <ProductCardExamples />
    </GuidelineSection>
  );
}
