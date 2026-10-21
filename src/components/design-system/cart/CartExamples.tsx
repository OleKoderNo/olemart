"use client";

import { useState } from "react";
import CartProvider from "@/components/cart/CartProvider";
import CartContents from "@/components/cart/CartContents";
import AddToCartButton from "@/components/cart/AddToCartButton";
import CheckoutButton from "@/components/cart/CheckoutButton";
import CheckoutConfirmation from "@/components/checkout/CheckoutConfirmation";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { exampleProduct } from "../product-card/exampleProduct";

/** Demonstrates cart interactions and checkout without leaving the page. */
function CartPreview() {
  const { itemCount, clearCart } = useCart();
  const [isComplete, setIsComplete] = useState(false);

  if (isComplete) {
    return (
      <div className="space-y-4">
        <div role="status">
          <CheckoutConfirmation headingLevel={3} />
        </div>

        <Button
          text="Restart demo"
          theme="secondary"
          onClick={() => setIsComplete(false)}
        />
      </div>
    );
  }

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

      <CartContents
        checkoutAction={
          <CheckoutButton onComplete={() => setIsComplete(true)} />
        }
      />
    </div>
  );
}

/** Keeps documentation cart and checkout actions isolated from the shop. */
export default function CartExamples() {
  return (
    <CartProvider>
      <CartPreview />
    </CartProvider>
  );
}
