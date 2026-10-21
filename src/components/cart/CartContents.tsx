"use client";

import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

/** Displays loading feedback, cart items, or the empty-cart state. */
export default function CartContents() {
  const { items, isReady, itemCount, total, setQuantity, removeItem } =
    useCart();

  // Wait for restoration before deciding whether the cart is empty.
  if (!isReady) {
    return (
      <p role="status" className="py-8 text-center text-slate-600">
        Loading your cart…
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <div
        role="status"
        className="rounded-xl border border-slate-200 bg-white p-6"
      >
        <h2 className="text-xl font-semibold text-slate-900">
          Your cart is empty
        </h2>

        <p className="mt-2 text-slate-600">
          Add a product from the shop to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-3">
      <section aria-label="Cart items" className="min-w-0 lg:col-span-2">
        <h2 className="sr-only">Cart items</h2>

        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.product.id}>
              <CartItem
                item={item}
                onQuantityChange={(quantity) =>
                  setQuantity(item.product.id, quantity)
                }
                onRemove={() => removeItem(item.product.id)}
              />
            </li>
          ))}
        </ul>
      </section>

      <CartSummary itemCount={itemCount} total={total} />

      <p role="status" className="sr-only">
        Cart contains {itemCount} {itemCount === 1 ? "item" : "items"}. Total:{" "}
        {total.toFixed(2)} NOK.
      </p>
    </div>
  );
}
