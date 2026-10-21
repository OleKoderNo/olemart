"use client";

import CartProvider from "@/components/cart/CartProvider";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { exampleProduct } from "../product-card/exampleProduct";

/** Displays controls and totals from the isolated preview cart. */
function CartPreview() {
  const { itemCount, total, clearCart } = useCart();

  return (
    <div className="space-y-4">
      <AddToCartButton product={exampleProduct} />

      <p role="status" className="text-slate-700">
        Items: {itemCount} · Total: {total.toFixed(2)} NOK
      </p>

      <Button
        text="Clear demo cart"
        theme="secondary"
        onClick={clearCart}
        disabled={itemCount === 0}
      />
    </div>
  );
}

/** Keeps documentation interactions separate from the shop cart. */
export default function CartExamples() {
  return (
    <CartProvider>
      <CartPreview />
    </CartProvider>
  );
}
