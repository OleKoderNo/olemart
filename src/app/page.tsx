import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ProductListing from "@/components/products/ProductListing";
import ProductListingLoading from "@/components/products/ProductListingLoading";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/** Displays the theme-aware shop introduction and paginated product catalogue. */
export default function HomePage({ searchParams }: HomePageProps) {
  return (
    <main className="bg-background py-12 text-foreground">
      <Container className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold sm:text-4xl">Welcome to OleMart</h1>

          <p className="text-muted-foreground">
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
