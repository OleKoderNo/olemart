import type { Product } from "./product";

/** Product information required by search results. */
export type SearchProduct = Pick<Product, "id" | "title">;
