"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { ProductSort as ProductSortValue } from "@/lib/products/productSorting";
import ProductSort from "./ProductSort";

type ProductSortNavigationProps = {
  currentSort: ProductSortValue;
};

/** Updates the shop URL when sorting changes and returns to page one. */
export default function ProductSortNavigation({
  currentSort,
}: ProductSortNavigationProps) {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState(currentSort);
  const [isPending, startTransition] = useTransition();

  function handleChange(sort: ProductSortValue) {
    setSelectedSort(sort);

    const params = new URLSearchParams({ sort });

    startTransition(() => {
      router.push(`/?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="w-full sm:w-64">
      <ProductSort
        value={selectedSort}
        onChange={handleChange}
        disabled={isPending}
      />

      <p role="status" className="mt-2 min-h-5 text-sm text-slate-600">
        {isPending ? "Updating products…" : ""}
      </p>
    </div>
  );
}
