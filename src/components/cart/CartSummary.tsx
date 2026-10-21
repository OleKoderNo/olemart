import type { ReactNode } from "react";

type CartSummaryProps = {
  itemCount: number;
  total: number;
  actions?: ReactNode;
};

/** Displays cart totals and optional checkout controls. */
export default function CartSummary({
  itemCount,
  total,
  actions,
}: CartSummaryProps) {
  return (
    <section
      aria-label="Cart summary"
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6"
    >
      <h2 className="text-xl font-semibold text-slate-900">Cart summary</h2>

      <dl className="space-y-3">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-600">Items</dt>
          <dd className="font-medium">{itemCount}</dd>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-slate-200 pt-3">
          <dt className="font-semibold">Total</dt>
          <dd className="font-semibold tabular-nums">{total.toFixed(2)} NOK</dd>
        </div>
      </dl>

      {actions}
    </section>
  );
}
