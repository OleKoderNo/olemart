"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import MiniCartItem from "./MiniCartItem";

type MiniCartContentsProps = {
  onClose: () => void;
  onViewCart?: () => void;
};

/** Displays mini-cart items, totals, and access to the full cart. */
export default function MiniCartContents({
  onClose,
  onViewCart,
}: MiniCartContentsProps) {
  const { items, isReady, total } = useCart();

  const actionClassName =
    "inline-flex min-h-11 w-full cursor-pointer items-center justify-center " +
    "rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white " +
    "hover:bg-slate-700 focus-visible:outline-2 " +
    "focus-visible:outline-offset-2 focus-visible:outline-slate-900";

  if (!isReady) {
    return <p role="status">Loading your cart…</p>;
  }

  if (items.length === 0) {
    return (
      <p role="status" className="text-sm text-slate-600">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <ul className="max-h-60 space-y-4 overflow-y-auto p-1">
        {items.map((item) => (
          <li key={item.product.id}>
            <MiniCartItem item={item} />
          </li>
        ))}
      </ul>

      <p
        role="status"
        className="flex flex-wrap justify-between gap-2 border-t
          border-slate-200 pt-4 font-semibold text-slate-900"
      >
        <span>Total</span>
        <span>{total.toFixed(2)} NOK</span>
      </p>

      {onViewCart ? (
        <button
          type="button"
          className={actionClassName}
          onClick={() => {
            onClose();
            onViewCart();
          }}
        >
          View cart
        </button>
      ) : (
        <Link href="/cart" onClick={onClose} className={actionClassName}>
          View cart
        </Link>
      )}
    </div>
  );
}
