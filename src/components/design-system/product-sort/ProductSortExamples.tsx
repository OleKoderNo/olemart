"use client";

import { useState } from "react";
import ProductSort from "@/components/products/ProductSort";
import ProductPrice from "@/components/products/ProductPrice";
import {
  sortProducts,
  type ProductSort as ProductSortValue,
} from "@/lib/products/productSorting";
import { exampleProduct } from "../product-card/exampleProduct";

/** Fictional variants for comparing sorting behaviour. */
const exampleProducts = [
  {
    ...exampleProduct,
    id: "sort-demo-1",
    title: "Toy car",
    price: 499.95,
    discountedPrice: 449.95,
    rating: 3,
  },
  {
    ...exampleProduct,
    id: "sort-demo-2",
    title: "Wooden train",
    price: 600,
    discountedPrice: 200,
    rating: 5,
  },
  {
    ...exampleProduct,
    id: "sort-demo-3",
    title: "Building blocks",
    price: 300,
    discountedPrice: 300,
    rating: 4,
  },
];

/** Demonstrates sorting locally without changing the shop URL. */
export default function ProductSortExamples() {
  const [sort, setSort] = useState<ProductSortValue>("default");
  const products = sortProducts(exampleProducts, sort);

  return (
    <div className="max-w-xl space-y-4">
      <ProductSort value={sort} onChange={setSort} />

      <ul className="space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="space-y-2 rounded-lg border border-slate-200 p-4"
          >
            <p className="font-semibold">{product.title}</p>

            <ProductPrice
              price={product.price}
              discountedPrice={product.discountedPrice}
            />

            <p className="text-sm text-slate-600">
              Rating: {product.rating} out of 5
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
