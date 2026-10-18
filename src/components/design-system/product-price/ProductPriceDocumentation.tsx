import GuidelineSection from "@/components/design-system/GuidelineSection";
import ProductPriceExamples from "./ProductPriceExamples";
import ProductPriceGuidelines from "./ProductPriceGuidelines";

/** Assembles the pricing guidelines and live discount examples. */
export default function ProductPriceDocumentation() {
  return (
    <GuidelineSection
      id="product-price"
      title="Product pricing"
      description="Shared rules for selling prices, original prices, and discount badges."
    >
      <ProductPriceGuidelines />
      <ProductPriceExamples />
    </GuidelineSection>
  );
}
