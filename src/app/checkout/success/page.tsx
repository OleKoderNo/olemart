import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CheckoutConfirmation from "@/components/checkout/CheckoutConfirmation";

export const metadata: Metadata = {
  title: "Checkout complete",
  robots: {
    index: false,
    follow: false,
  },
};

/** Displays checkout confirmation and a link back to the shop. */
export default function CheckoutSuccessPage() {
  return (
    <main className="bg-slate-50 py-12 text-slate-900">
      <Container className="space-y-6">
        <CheckoutConfirmation />

        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded px-2
            font-medium underline underline-offset-4
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-slate-900"
        >
          Continue shopping
        </Link>
      </Container>
    </main>
  );
}
