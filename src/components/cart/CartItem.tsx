import Image from "next/image";
import type { CartItem as CartItemData } from "@/types/cart";
import { getCartItemTotal } from "@/lib/cart/cartTotals";
import ProductPrice from "@/components/products/ProductPrice";
import Button from "@/components/ui/Button";
import QuantityControl from "./QuantityControl";

type CartItemProps = {
  item: CartItemData;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
};

/** Displays a cart item with pricing, quantity controls, and removal. */
export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  const { product, quantity } = item;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-slate-50 sm:size-28">
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            sizes="(max-width: 639px) 80px, 112px"
            className="object-contain p-2"
          />
        </div>

        <div className="min-w-0 space-y-2">
          <h3 className="wrap-break-word text-lg font-semibold text-slate-900">
            {product.title}
          </h3>

          <p className="text-sm text-slate-600">Price per item</p>

          <ProductPrice
            price={product.price}
            discountedPrice={product.discountedPrice}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <QuantityControl
          quantity={quantity}
          productTitle={product.title}
          onQuantityChange={onQuantityChange}
        />

        <Button
          text="Remove"
          theme="secondary"
          aria-label={`Remove ${product.title} from cart`}
          onClick={onRemove}
        />
      </div>

      <p className="mt-4 font-semibold text-slate-900">
        Item total: {getCartItemTotal(item).toFixed(2)} NOK
      </p>
    </article>
  );
}
