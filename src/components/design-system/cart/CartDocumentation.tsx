import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import CartExamples from "./CartExamples";

/** Documents cart actions, shared state, and isolated previews. */
export default function CartDocumentation() {
  return (
    <GuidelineSection
      id="cart"
      title="Shopping cart"
      description="Shared cart state with reusable controls and calculated totals."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Add to cart adds one unit per click.</li>
        <li>Adding the same product increases its quantity.</li>
        <li>The navbar count includes all units, not just unique products.</li>
        <li>Totals use the shared pricing rules and are calculated in øre.</li>
        <li>Client components access cart data through useCart().</li>
        <li>The cart currently resets when the browser refreshes.</li>
      </ul>

      <CodeExample
        code={`import AddToCartButton from "@/components/cart/AddToCartButton";

<AddToCartButton product={product} />`}
      />

      <p className="text-sm text-slate-600">
        This example has its own cart provider. Adding demo items does not
        change the shop cart or navbar count.
      </p>

      <CartExamples />
    </GuidelineSection>
  );
}
