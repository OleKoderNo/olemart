import CodeExample from "@/components/design-system/CodeExample";

/** Explains the API pricing rule and how to use the pricing components. */
export default function ProductPriceGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Discount rules</h3>

      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Every product has a discountedPrice field. Its presence alone does not
          indicate a sale.
        </li>
        <li>
          A discount applies only when discountedPrice is lower than price.
        </li>
        <li>Equal prices display one price, without a discount badge.</li>
        <li>
          Discounted products display the selling price, the original price
          struck through, and a percentage badge.
        </li>
        <li>
          The selling price comes from the API. Only the percentage is
          calculated and rounded.
        </li>
      </ul>

      <CodeExample
        code={`import ProductPrice from "@/components/products/ProductPrice";
import DiscountBadge from "@/components/products/DiscountBadge";

<DiscountBadge
  price={product.price}
  discountedPrice={product.discountedPrice}
/>

<ProductPrice
  price={product.price}
  discountedPrice={product.discountedPrice}
/>`}
      />

      <p className="text-sm text-slate-600">
        Both components use getProductPricing for consistent behaviour. The
        badge automatically renders nothing when no discount applies. Prices
        display two decimal places followed by NOK.
      </p>
    </div>
  );
}
