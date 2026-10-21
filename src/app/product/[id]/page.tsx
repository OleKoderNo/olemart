import { Suspense } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductDetailsContent from "@/components/products/ProductDetailsContent";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

/** Displays a product page with loading feedback. */
export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="bg-slate-50 py-10 text-slate-900">
      <Container className="space-y-6">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded px-2
            font-medium underline underline-offset-4
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-slate-900"
        >
          Back to shop
        </Link>

        <Suspense
          fallback={
            <p role="status" className="py-8 text-center text-slate-600">
              Loading product…
            </p>
          }
        >
          <ProductDetailsContent params={params} />
        </Suspense>
      </Container>
    </main>
  );
}
