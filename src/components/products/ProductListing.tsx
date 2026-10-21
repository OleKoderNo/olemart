import { getAllProducts } from "@/lib/api/products";
import { parseProductSort, sortProducts } from "@/lib/products/productSorting";
import PaginatedProducts from "./PaginatedProducts";

type ProductListingProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/** Fetches and sorts the catalogue for responsive client-side pagination. */
export default async function ProductListing({
  searchParams,
}: ProductListingProps) {
  const params = await searchParams;
  const sort = parseProductSort(params.sort);

  const page =
    typeof params.page === "string" && /^\d+$/.test(params.page)
      ? Number(params.page)
      : 1;

  const requestedPage = Number.isSafeInteger(page) && page > 0 ? page : 1;

  const products = await getAllProducts();
  const sortedProducts = sortProducts(products, sort);

  return (
    <PaginatedProducts
      products={sortedProducts}
      requestedPage={requestedPage}
      sort={sort}
    />
  );
}
