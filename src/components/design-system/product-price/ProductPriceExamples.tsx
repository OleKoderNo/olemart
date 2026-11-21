import DiscountBadge from "@/components/products/DiscountBadge";
import ProductPrice from "@/components/products/ProductPrice";

const examples = [
  {
    title: "No discount",
    price: 100,
    discountedPrice: 100,
  },
  {
    title: "With discount",
    price: 100,
    discountedPrice: 80,
  },
];

/** Demonstrates equal prices and a product with a genuine discount. */
export default function ProductPriceExamples() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {examples.map(({ title, price, discountedPrice }) => (
        <div
          key={title}
          className="space-y-3 rounded-lg border border-border bg-surface p-4"
        >
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>

          <DiscountBadge price={price} discountedPrice={discountedPrice} />

          <ProductPrice price={price} discountedPrice={discountedPrice} />
        </div>
      ))}
    </div>
  );
}
