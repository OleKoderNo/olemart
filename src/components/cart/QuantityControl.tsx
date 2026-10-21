import Button from "@/components/ui/Button";

type QuantityControlProps = {
  quantity: number;
  productTitle: string;
  onQuantityChange: (quantity: number) => void;
};

/** Provides controls for selecting a whole-number quantity of at least one. */
export default function QuantityControl({
  quantity,
  productTitle,
  onQuantityChange,
}: QuantityControlProps) {
  return (
    <div
      role="group"
      aria-label={`Quantity for ${productTitle}`}
      className="flex items-center gap-3"
    >
      <Button
        text="−"
        theme="secondary"
        aria-label={`Decrease quantity of ${productTitle}`}
        disabled={quantity <= 1}
        onClick={() => onQuantityChange(quantity - 1)}
      />

      <span className="min-w-8 text-center font-medium tabular-nums">
        <span className="sr-only">Quantity: </span>
        {quantity}
      </span>

      <Button
        text="+"
        theme="secondary"
        aria-label={`Increase quantity of ${productTitle}`}
        onClick={() => onQuantityChange(quantity + 1)}
      />
    </div>
  );
}
