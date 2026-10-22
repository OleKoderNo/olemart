import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import CartExamples from "./CartExamples";
import MiniCartExamples from "./MiniCartExamples";

/** Documents shared cart behaviour, checkout, and isolated previews. */
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
        <li>The cart count includes all units, not just unique products.</li>
        <li>
          Totals use the shared pricing rules and are calculated in øre to avoid
          floating-point rounding errors.
        </li>
        <li>Client components access cart data through useCart().</li>
        <li>Quantity controls increase or decrease the selected quantity.</li>
        <li>The minimum quantity is one. Use Remove to delete an item.</li>
        <li>Item totals and the cart summary update when quantities change.</li>
        <li>Removing the last item displays the empty-cart message.</li>
        <li>
          The shop cart is saved in browser storage and restored after a
          refresh, when storage is available.
        </li>
        <li>
          Documentation previews use temporary carts and reset on refresh.
        </li>
      </ul>

      <CodeExample
        code={`import AddToCartButton from "@/components/cart/AddToCartButton";

<AddToCartButton product={product} />`}
      />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Checkout behaviour
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            Checkout opens the customer details form without clearing the cart.
          </li>
          <li>
            Returning to the cart before completing checkout preserves its
            items.
          </li>
          <li>
            Full name, email, street address, postal code, and city are
            required.
          </li>
          <li>
            Postal codes must contain four digits for delivery within Norway.
          </li>
          <li>
            Fields are validated when focus leaves them. Fields with errors are
            checked again while typing.
          </li>
          <li>
            Submitting invalid details moves focus to the first invalid field.
          </li>
          <li>A valid submission clears the cart and displays confirmation.</li>
          <li>
            Checkout is a simulation. Personal details are not submitted or
            saved, and no payment or real order is processed.
          </li>
        </ul>
      </div>

      <p className="text-sm text-slate-600">
        Add a demo product, open checkout, and complete the form. This example
        has its own cart provider and displays confirmation without navigating
        or changing the shop cart.
      </p>

      <CartExamples />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Mini cart</h3>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>
            The header cart icon displays a badge with the total item quantity.
          </li>
          <li>
            Quantity changes and removal update item totals, the summary, and
            the header badge together.
          </li>
          <li>Decreasing a quantity to one keeps the mini cart open.</li>
          <li>
            View cart opens the full cart page, where checkout is available.
          </li>
          <li>
            Clicking outside, pressing Escape, or moving focus to an element
            outside closes the mini cart.
          </li>
        </ul>

        <p className="text-sm text-slate-600">
          Add a demo item, then open the cart icon. This preview has its own
          temporary cart, and View cart stays on this documentation page.
        </p>

        <MiniCartExamples />
      </div>
    </GuidelineSection>
  );
}
