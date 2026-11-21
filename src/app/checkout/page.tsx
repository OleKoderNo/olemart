import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CheckoutContents from "@/components/checkout/CheckoutContents";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your cart and complete the OleMart demo checkout.",
  robots: {
    index: false,
    follow: false,
  },
};

/** Displays the theme-aware simulated checkout and customer details form. */
export default function CheckoutPage() {
  return (
    <main className="bg-background py-10 text-foreground">
      <Container>
        <div className="mb-8 space-y-3">
          <Link
            href="/cart"
            className="inline-flex min-h-11 items-center rounded px-2
              text-sm font-medium text-muted-foreground underline
              underline-offset-4 hover:text-foreground
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-focus"
          >
            Back to cart
          </Link>

          <h1 className="text-3xl font-bold">Checkout</h1>

          <p className="text-muted-foreground">
            Enter your details to complete your demo order.
          </p>
        </div>

        <CheckoutContents />
      </Container>
    </main>
  );
}
