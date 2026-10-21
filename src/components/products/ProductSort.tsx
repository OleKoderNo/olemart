"use client";

import { useId } from "react";
import Select from "@/components/ui/Select";
import {
  parseProductSort,
  productSortOptions,
  type ProductSort as ProductSortValue,
} from "@/lib/products/productSorting";

type ProductSortProps = {
  value: ProductSortValue;
  onChange: (value: ProductSortValue) => void;
  disabled?: boolean;
};

/** Displays product sorting options with a controlled selection. */
export default function ProductSort({
  value,
  onChange,
  disabled = false,
}: ProductSortProps) {
  const id = useId();

  return (
    <Select
      id={id}
      label="Sort products"
      options={productSortOptions}
      value={value}
      disabled={disabled}
      onChange={(event) => onChange(parseProductSort(event.target.value))}
    />
  );
}
