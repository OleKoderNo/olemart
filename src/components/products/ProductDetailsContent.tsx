import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api/products";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductDetails from "./ProductDetails";

type ProductDetailsContentProps = {
  params: Promise<{ id: string }>;
};

/** Loads a product and connects its details to the shopping cart. */
export default async function ProductDetailsContent({
  params,
}: ProductDetailsContentProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetails
      product={product}
      actions={<AddToCartButton key={product.id} product={product} />}
    />
  );
}
