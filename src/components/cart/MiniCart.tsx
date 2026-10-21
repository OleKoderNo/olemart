"use client";

import { useEffect, useId, useRef, useState } from "react";
import { IoCartOutline, IoClose } from "react-icons/io5";
import clsx from "clsx";
import { useCart } from "@/hooks/useCart";
import MiniCartContents from "./MiniCartContents";

type MiniCartProps = {
  onViewCart?: () => void;
};

/** Displays a cart icon and an animated, dismissible mini-cart panel. */
export default function MiniCart({ onViewCart }: MiniCartProps) {
  const id = useId();
  const { itemCount, isReady } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

  /** Closes the panel and returns keyboard focus to its trigger. */
  function closeAndFocus() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;

        // Disabling a quantity button can cause focus loss without a new target.
        // Close only when focus moves to an actual element outside the mini cart.
        if (
          nextTarget instanceof Node &&
          !event.currentTarget.contains(nextTarget)
        ) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          event.stopPropagation();
          closeAndFocus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={
          isReady
            ? `Shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`
            : "Shopping cart, loading"
        }
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={() => setIsOpen((open) => !open)}
        className="relative inline-flex size-11 cursor-pointer items-center
          justify-center rounded-lg text-slate-900 hover:bg-slate-100
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-slate-900"
      >
        <IoCartOutline aria-hidden="true" className="size-7" />

        {isReady && itemCount > 0 && (
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 flex min-h-5 min-w-5
              items-center justify-center rounded-full bg-slate-900
              px-1 text-xs font-semibold text-white"
          >
            {itemCount}
          </span>
        )}
      </button>

      <div
        id={`${id}-panel`}
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={clsx(
          "absolute right-0 top-full z-50 mt-3 grid w-80",
          "max-w-[calc(100vw-2rem)]",
          "transition-[grid-template-rows,opacity] duration-200 ease-in-out",
          "motion-reduce:transition-none",
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <section
            aria-labelledby={`${id}-heading`}
            className="max-h-[70dvh] space-y-4 overflow-y-auto rounded-xl
              border border-slate-200 bg-white p-4 shadow-lg"
          >
            <div className="flex items-center justify-between gap-3">
              <h2
                id={`${id}-heading`}
                className="text-lg font-semibold text-slate-900"
              >
                Your cart
              </h2>

              <button
                type="button"
                aria-label="Close cart"
                onClick={closeAndFocus}
                className="inline-flex size-11 cursor-pointer items-center
                  justify-center rounded-lg text-slate-600
                  hover:bg-slate-100 focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-slate-900"
              >
                <IoClose aria-hidden="true" className="size-5" />
              </button>
            </div>

            <MiniCartContents
              onClose={() => setIsOpen(false)}
              onViewCart={onViewCart}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
