"use client";

import CartProvider from "@/components/cart/CartProvider";
import CartContents from "@/components/cart/CartContents";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { exampleProduct } from "../product-card/exampleProduct";

/** Demonstrates adding, adjusting, removing, and clearing demo items. */
function CartPreview() {
  const { itemCount, clearCart } = useCart();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start gap-4">
        <AddToCartButton product={exampleProduct} />

        <Button
          text="Clear demo cart"
          theme="secondary"
          onClick={clearCart}
          disabled={itemCount === 0}
        />
      </div>

      <CartContents />
    </div>
  );
}

/** Provides an isolated cart for interactive documentation examples. */
export default function CartExamples() {
  return (
    <CartProvider>
      <CartPreview />
    </CartProvider>
  );
}
