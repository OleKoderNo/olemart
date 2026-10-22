import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CheckoutContents from "@/components/checkout/CheckoutContents";

export const metadata: Metadata = {
  title: "Checkout | OleMart",
  description: "Review your cart and complete the OleMart demo checkout.",
  robots: {
    index: false,
    follow: false,
  },
};

/** Displays the simulated checkout and customer details form. */
export default function CheckoutPage() {
  return (
    <main className="py-10">
      <Container>
        <div className="mb-8 space-y-3">
          <Link
            href="/cart"
            className="inline-block text-sm font-medium text-slate-700 underline underline-offset-4"
          >
            Back to cart
          </Link>

          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>

          <p className="text-slate-600">
            Enter your details to complete your demo order.
          </p>
        </div>

        <CheckoutContents />
      </Container>
    </main>
  );
}
