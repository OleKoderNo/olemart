import type { CheckoutErrors, CheckoutValues } from "@/types/checkout";

/**
 * Validates customer details for a Norwegian delivery address.
 * This demo does not submit or store the supplied personal information.
 */
export function validateCheckout(values: CheckoutValues): CheckoutErrors {
  const errors: CheckoutErrors = {};

  if (values.fullName.trim().length < 3) {
    errors.fullName = "Enter your full name using at least 3 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (values.address.trim().length < 3) {
    errors.address = "Enter a street address using at least 3 characters.";
  }

  // Keep postal codes as text so leading zeros are preserved.
  if (!/^\d{4}$/.test(values.postalCode.trim())) {
    errors.postalCode = "Enter a four-digit Norwegian postal code.";
  }

  if (values.city.trim().length < 2) {
    errors.city = "Enter a city using at least 2 characters.";
  }

  return errors;
}
