import { redirect } from "next/navigation";
import { getAllProducts } from "@/lib/api/products";
import { parseProductSort, sortProducts } from "@/lib/products/productSorting";
import ProductGrid from "./ProductGrid";
import ProductSortNavigation from "./ProductSortNavigation";
import Pagination from "@/components/ui/Pagination";

type ProductListingProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const PRODUCTS_PER_PAGE = 9;

/** Sorts the full catalogue before selecting the requested product page. */
export default async function ProductListing({
  searchParams,
}: ProductListingProps) {
  const params = await searchParams;
  const sort = parseProductSort(params.sort);

  const requestedPage =
    typeof params.page === "string" && /^\d+$/.test(params.page)
      ? Number(params.page)
      : 1;

  const currentPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const products = await getAllProducts();
  const sortedProducts = sortProducts(products, sort);
  const pageCount = Math.max(
    1,
    Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE),
  );

  if (currentPage > pageCount) {
    redirect(`/?sort=${sort}&page=${pageCount}`);
  }

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="products-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Our products
        </h2>
        <ProductSortNavigation key={sort} currentSort={sort} />
      </div>

      <ProductGrid products={visibleProducts} />
      <Pagination meta={{ currentPage, pageCount }} query={{ sort }} />
    </div>
  );
}
