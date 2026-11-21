"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import CartSummary from "@/components/cart/CartSummary";
import CheckoutForm from "./CheckoutForm";

/** Displays theme-aware checkout states and totals after cart restoration. */
export default function CheckoutContents() {
  const { isReady, itemCount, total } = useCart();

  if (!isReady) {
    return (
      <p role="status" className="text-muted-foreground">
        Loading checkout…
      </p>
    );
  }

  if (itemCount === 0) {
    return (
      <div className="space-y-3 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-xl font-semibold text-foreground">
          Your cart is empty
        </h2>

        <p className="text-muted-foreground">
          Add a product before starting checkout.
        </p>

        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded
            font-medium text-foreground underline underline-offset-4
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-focus"
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
          className="text-xl font-semibold text-foreground"
        >
          Customer details
        </h2>

        <CheckoutForm />
      </section>

      <CartSummary itemCount={itemCount} total={total} />
    </div>
  );
}
