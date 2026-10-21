import { getAllProducts } from "@/lib/api/products";
import ProductSearch from "./ProductSearch";

/** Loads the complete catalogue for homepage search. */
export default async function ProductSearchContent() {
  const products = await getAllProducts();

  const searchProducts = products.map(({ id, title }) => ({
    id,
    title,
  }));

  return <ProductSearch products={searchProducts} />;
}
