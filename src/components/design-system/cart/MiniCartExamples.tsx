"use client";

import { useState } from "react";
import CartProvider from "@/components/cart/CartProvider";
import MiniCart from "@/components/cart/MiniCart";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { exampleProduct } from "../product-card/exampleProduct";

/** Demonstrates the mini cart without navigating or changing shop items. */
function MiniCartPreview() {
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <AddToCartButton product={exampleProduct} />

        <MiniCart
          onViewCart={() =>
            setMessage("In the shop, this opens the full cart page.")
          }
        />
      </div>

      <p role="status" className="text-sm text-slate-600">
        {message}
      </p>
    </div>
  );
}

/** Gives the mini-cart preview its own temporary cart state. */
export default function MiniCartExamples() {
  return (
    <CartProvider>
      <MiniCartPreview />
    </CartProvider>
  );
}
