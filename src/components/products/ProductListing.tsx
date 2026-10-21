import Link from "next/link";
import { getProducts } from "@/lib/api/products";
import ProductGrid from "./ProductGrid";
import Pagination from "@/components/ui/Pagination";

type ProductListingProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/**
 * Fetches and displays the requested product page.
 * Missing or invalid page parameters default to page one.
 */
export default async function ProductListing({
  searchParams,
}: ProductListingProps) {
  const { page } = await searchParams;

  const requestedPage =
    typeof page === "string" && /^\d+$/.test(page) ? Number(page) : 1;

  const currentPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const { data: products, meta } = await getProducts(currentPage);

  if (products.length === 0 && currentPage > 1) {
    return (
      <div className="space-y-3">
        <p className="text-slate-600">There are no products on this page.</p>

        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded px-2
            font-medium underline underline-offset-4
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-slate-900"
        >
          Return to the first page
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProductGrid products={products} />
      <Pagination meta={meta} />
    </div>
  );
}
