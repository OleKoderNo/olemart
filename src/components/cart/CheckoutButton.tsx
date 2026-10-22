"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

type CheckoutButtonProps = {
  onComplete?: () => void;
};

/**
 * Opens checkout without clearing the cart.
 * The optional callback lets documentation intercept navigation.
 */
export default function CheckoutButton({ onComplete }: CheckoutButtonProps) {
  const router = useRouter();
  const { isReady, itemCount } = useCart();

  function handleCheckout() {
    if (!isReady || itemCount === 0) {
      return;
    }

    if (onComplete) {
      onComplete();
    } else {
      router.push("/checkout");
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
