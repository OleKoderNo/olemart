"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutForm from "./CheckoutForm";

/** Displays checkout details and totals once the saved cart is restored. */
export default function CheckoutContents() {
  const { isReady, itemCount, total } = useCart();

  if (!isReady) {
    return (
      <p role="status" className="text-slate-600">
        Loading checkout…
      </p>
    );
  }

  if (itemCount === 0) {
    return (
      <div className="space-y-3 rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Your cart is empty
        </h2>

        <p className="text-slate-600">
          Add a product before starting checkout.
        </p>

        <Link
          href="/"
          className="inline-block font-medium text-slate-900 underline underline-offset-4"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-3">
      <section
        aria-labelledby="checkout-details-heading"
        className="min-w-0 space-y-6 lg:col-span-2"
      >
        <h2
          id="checkout-details-heading"
          className="text-xl font-semibold text-slate-900"
        >
          Customer details
        </h2>

        <CheckoutForm />
      </section>

      <CartSummary itemCount={itemCount} total={total} />
    </div>
  );
}
