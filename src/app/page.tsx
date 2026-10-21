import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ProductListing from "@/components/products/ProductListing";
import ProductListingLoading from "@/components/products/ProductListingLoading";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/** Displays the shop introduction and paginated product catalogue. */
export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <main className="bg-slate-50 py-12 text-slate-900">
      <Container className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold sm:text-4xl">Welcome to OleMart</h1>
          <p className="text-slate-600">
            Browse our collection and find your next favourite.
          </p>
        </header>

        <section aria-labelledby="products-heading" className="space-y-6">
          <Suspense fallback={<ProductListingLoading />}>
            <ProductListing searchParams={searchParams} />
          </Suspense>
        </section>
      </Container>
    </main>
  );
}
