import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CartContents from "@/components/cart/CartContents";

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Review your items and update your shopping cart.",
};

/** Displays the shopping cart and a link back to the shop. */
export default function CartPage() {
  return (
    <main className="bg-slate-50 py-10 text-slate-900">
      <Container className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">Shopping cart</h1>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded px-2
              font-medium underline underline-offset-4
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-slate-900"
          >
            Continue shopping
          </Link>
        </header>

        <CartContents />
      </Container>
    </main>
  );
}
