"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { validateCheckout } from "@/lib/validation/validateCheckout";
import type { CheckoutErrors, CheckoutValues } from "@/types/checkout";
import CheckoutFields from "./CheckoutFields";

type CheckoutFormProps = {
  onComplete?: () => void;
};

/** Reads checkout fields without converting postal codes into numbers. */
function readValues(form: HTMLFormElement): CheckoutValues {
  const data = new FormData(form);

  return {
    fullName: String(data.get("fullName") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    address: String(data.get("address") ?? "").trim(),
    postalCode: String(data.get("postalCode") ?? "").trim(),
    city: String(data.get("city") ?? "").trim(),
  };
}

/** Narrows an input name to a known checkout field. */
function isCheckoutField(name: string): name is keyof CheckoutValues {
  return (
    name === "fullName" ||
    name === "email" ||
    name === "address" ||
    name === "postalCode" ||
    name === "city"
  );
}

/**
 * Validates checkout details before completing a simulated order.
 * onComplete allows documentation previews to finish without navigation.
 */
export default function CheckoutForm({ onComplete }: CheckoutFormProps) {
  const idPrefix = useId();
  const router = useRouter();
  const { isReady, itemCount, clearCart } = useCart();
  const [errors, setErrors] = useState<CheckoutErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittedRef = useRef(false);

  /** Updates only the field being edited or left. */
  function validateField(form: HTMLFormElement, name: keyof CheckoutValues) {
    const message = validateCheckout(readValues(form))[name];

    setErrors((previous) => {
      const next = { ...previous };

      if (message) {
        next[name] = message;
      } else {
        delete next[name];
      }

      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isReady || itemCount === 0 || submittedRef.current) {
      return;
    }

    const form = event.currentTarget;
    const nextErrors = validateCheckout(readValues(form));

    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];

    if (firstError) {
      // Wait until error descriptions render before moving focus.
      requestAnimationFrame(() => {
        const field = form.elements.namedItem(firstError);

        if (field instanceof HTMLElement) {
          field.focus();
        }
      });

      return;
    }

    submittedRef.current = true;
    setIsSubmitting(true);

    // Opening checkout never clears the cart; valid completion does.
    clearCart();

    if (onComplete) {
      onComplete();
    } else {
      router.push("/checkout/success");
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onBlur={(event) => {
        const field = event.target;

        if (field instanceof HTMLInputElement && isCheckoutField(field.name)) {
          validateField(event.currentTarget, field.name);
        }
      }}
      onChange={(event) => {
        const field = event.target;

        if (
          field instanceof HTMLInputElement &&
          isCheckoutField(field.name) &&
          errors[field.name]
        ) {
          validateField(event.currentTarget, field.name);
        }
      }}
      className="space-y-6"
    >
      <CheckoutFields idPrefix={idPrefix} errors={errors} />

      <p className="text-sm text-slate-600">
        Delivery country: Norway. This is a demo checkout. Your details are not
        submitted or saved, and no payment or real order is processed.
      </p>

      <Button
        type="submit"
        text={isSubmitting ? "Completing order…" : "Place demo order"}
        disabled={!isReady || itemCount === 0 || isSubmitting}
      />
    </form>
  );
}
