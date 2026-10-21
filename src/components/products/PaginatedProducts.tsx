"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import type { ProductSort } from "@/lib/products/productSorting";
import { useProductsPerPage } from "@/hooks/useProductsPerPage";
import Pagination from "@/components/ui/Pagination";
import ProductGrid from "./ProductGrid";
import ProductSortNavigation from "./ProductSortNavigation";
import ProductListingLoading from "./ProductListingLoading";

type PaginatedProductsProps = {
  products: Product[];
  requestedPage: number;
  sort: ProductSort;
};

/** Paginates sorted products according to the browser's viewport width. */
export default function PaginatedProducts({
  products,
  requestedPage,
  sort,
}: PaginatedProductsProps) {
  const router = useRouter();
  const pageSize = useProductsPerPage();

  const pageCount =
    pageSize === null ? 1 : Math.max(1, Math.ceil(products.length / pageSize));

  const currentPage = Math.min(requestedPage, pageCount);

  useEffect(() => {
    if (pageSize === null || requestedPage === currentPage) {
      return;
    }

    // Keep the URL valid if resizing makes the requested page unavailable.
    const params = new URLSearchParams({
      sort,
      page: String(currentPage),
    });

    router.replace(`/?${params.toString()}`, { scroll: false });
  }, [pageSize, requestedPage, currentPage, sort, router]);

  if (pageSize === null) {
    return <ProductListingLoading />;
  }

  const startIndex = (currentPage - 1) * pageSize;
  const visibleProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
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
