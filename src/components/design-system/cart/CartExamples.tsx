"use client";

import { useState } from "react";
import CartProvider from "@/components/cart/CartProvider";
import CartContents from "@/components/cart/CartContents";
import CartSummary from "@/components/cart/CartSummary";
import AddToCartButton from "@/components/cart/AddToCartButton";
import CheckoutButton from "@/components/cart/CheckoutButton";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutConfirmation from "@/components/checkout/CheckoutConfirmation";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { exampleProduct } from "../product-card/exampleProduct";

type DemoStep = "cart" | "checkout" | "confirmation";

/** Demonstrates the complete checkout flow without navigating away. */
function CartPreview() {
  const { itemCount, total, clearCart } = useCart();
  const [step, setStep] = useState<DemoStep>("cart");

  if (step === "confirmation") {
    return (
      <div className="space-y-4">
        <div role="status">
          <CheckoutConfirmation headingLevel={3} />
        </div>

        <Button
          text="Restart demo"
          theme="secondary"
          onClick={() => setStep("cart")}
        />
      </div>
    );
  }

  if (step === "checkout") {
    return (
      <div className="space-y-6">
        <Button
          text="Back to demo cart"
          theme="secondary"
          onClick={() => setStep("cart")}
        />

        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="min-w-0 space-y-4 lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">
              Demo checkout
            </h3>

            <CheckoutForm onComplete={() => setStep("confirmation")} />
          </div>

          <CartSummary itemCount={itemCount} total={total} />
        </div>
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
          <CheckoutButton onComplete={() => setStep("checkout")} />
        }
      />
    </div>
  );
}

/**
 * Provides a temporary cart for documentation.
 * Checkout clears this demo cart without changing the shop cart.
 */
export default function CartExamples() {
  return (
    <CartProvider>
      <CartPreview />
    </CartProvider>
  );
}
