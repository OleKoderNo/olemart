import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import ProductDetails from "./ProductDetails";

type ProductDetailsContentProps = {
  params: Promise<{ id: string }>;
};

/** Loads the requested product or displays the product-not-found page. */
export default async function ProductDetailsContent({
  params,
}: ProductDetailsContentProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
