/** Customer details used by the simulated checkout. */
export type CheckoutValues = {
  fullName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
};

/** Validation messages associated with checkout fields. */
export type CheckoutErrors = Partial<Record<keyof CheckoutValues, string>>;
