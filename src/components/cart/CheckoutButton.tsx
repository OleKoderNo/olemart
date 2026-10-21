"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

type CheckoutButtonProps = {
  onComplete?: () => void;
};

/**
 * Completes a simulated checkout and clears the current cart.
 * Documentation previews can provide onComplete to avoid navigation.
 */
export default function CheckoutButton({ onComplete }: CheckoutButtonProps) {
  const router = useRouter();
  const { isReady, itemCount, clearCart } = useCart();

  function handleCheckout() {
    if (!isReady || itemCount === 0) {
      return;
    }

    clearCart();

    if (onComplete) {
      onComplete();
    } else {
      router.push("/checkout/success");
    }
  }

  return (
    <Button
      text="Checkout"
      onClick={handleCheckout}
      disabled={!isReady || itemCount === 0}
    />
  );
}
