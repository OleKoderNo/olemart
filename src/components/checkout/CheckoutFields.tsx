import type { ComponentProps } from "react";
import Input from "@/components/ui/Input";
import type { CheckoutErrors, CheckoutValues } from "@/types/checkout";

type CheckoutFieldsProps = {
  idPrefix: string;
  errors: CheckoutErrors;
};

type CheckoutField = {
  name: keyof CheckoutValues;
  label: string;
  autoComplete: string;
  type?: ComponentProps<"input">["type"];
  inputMode?: ComponentProps<"input">["inputMode"];
  minLength?: number;
};

const fields: CheckoutField[] = [
  {
    name: "fullName",
    label: "Full name",
    autoComplete: "name",
    minLength: 3,
  },
  {
    name: "email",
    label: "Email",
    autoComplete: "email",
    type: "email",
  },
  {
    name: "address",
    label: "Street address",
    autoComplete: "shipping street-address",
    minLength: 3,
  },
  {
    name: "postalCode",
    label: "Postal code",
    autoComplete: "shipping postal-code",
    inputMode: "numeric",
  },
  {
    name: "city",
    label: "City",
    autoComplete: "shipping address-level2",
    minLength: 2,
  },
];

/** Renders reusable inputs for customer and delivery details. */
export default function CheckoutFields({
  idPrefix,
  errors,
}: CheckoutFieldsProps) {
  return (
    <div className="space-y-4">
      {fields.map(({ name, ...field }) => (
        <Input
          key={name}
          {...field}
          id={`${idPrefix}-${name}`}
          name={name}
          required
          error={errors[name]}
        />
      ))}
    </div>
  );
}
