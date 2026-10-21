"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/useToast";
import type { CartProduct } from "@/types/cart";

type AddToCartButtonProps = {
  product: CartProduct;
};

/** Adds one product to the cart and displays a success notification. */
export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, isReady } = useCart();
  const { showToast } = useToast();

  function handleAdd() {
    if (!isReady) return;

    addItem(product);

    showToast({
      message: `${product.title} added to cart.`,
      theme: "success",
    });
  }

  return <Button text="Add to cart" onClick={handleAdd} disabled={!isReady} />;
}
