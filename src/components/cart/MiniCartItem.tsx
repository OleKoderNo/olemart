"use client";

import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import type { CartItem } from "@/types/cart";
import { getCartItemTotal } from "@/lib/cart/cartTotals";
import { useCart } from "@/hooks/useCart";
import QuantityControl from "./QuantityControl";

type MiniCartItemProps = {
  item: CartItem;
};

/** Displays a theme-aware cart item with quantity and removal controls. */
export default function MiniCartItem({ item }: MiniCartItemProps) {
  const { removeItem, setQuantity } = useCart();
  const { product, quantity } = item;

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        {/* Keeps product images on a consistent light backdrop in both themes. */}
        <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-slate-50">
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            sizes="56px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1 space-y-1">
          <p className="wrap-break-word text-sm font-semibold text-foreground">
            {product.title}
          </p>

          <p className="text-sm font-medium text-foreground">
            Item total: {getCartItemTotal(item).toFixed(2)} NOK
          </p>
        </div>

        <button
          type="button"
          aria-label={`Remove ${product.title} from cart`}
          onClick={() => removeItem(product.id)}
          className="inline-flex size-11 shrink-0 cursor-pointer items-center
            justify-center rounded-lg text-muted-foreground hover:bg-danger
            hover:text-danger-foreground focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          <IoTrashOutline aria-hidden="true" className="size-5" />
        </button>
      </div>

      <QuantityControl
        quantity={quantity}
        productTitle={product.title}
        onQuantityChange={(nextQuantity) =>
          setQuantity(product.id, nextQuantity)
        }
      />
    </div>
  );
}
