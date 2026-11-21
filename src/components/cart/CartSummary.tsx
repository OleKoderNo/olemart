import type { ReactNode } from "react";

type CartSummaryProps = {
  itemCount: number;
  total: number;
  actions?: ReactNode;
};

/** Displays theme-aware cart totals and optional checkout controls. */
export default function CartSummary({
  itemCount,
  total,
  actions,
}: CartSummaryProps) {
  return (
    <section
      aria-label="Cart summary"
      className="space-y-4 rounded-xl border border-border bg-surface p-6 text-foreground"
    >
      <h2 className="text-xl font-semibold">Cart summary</h2>

      <dl className="space-y-3">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Items</dt>
          <dd className="font-medium">{itemCount}</dd>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-3">
          <dt className="font-semibold">Total</dt>
          <dd className="font-semibold tabular-nums">{total.toFixed(2)} NOK</dd>
        </div>
      </dl>

      {actions}
    </section>
  );
}
