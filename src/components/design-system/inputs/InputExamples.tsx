import Input from "@/components/ui/Input";

/**
 * Demonstrates standard, search, error, and disabled input states.
 * The error example is static and does not perform validation.
 */
export default function InputExamples() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Examples</h3>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="example-name"
          label="Full name"
          helpText="Enter at least 3 characters."
        />

        <Input
          id="example-search"
          label="Search products"
          type="search"
          placeholder="Try headphones"
        />

        <Input
          id="example-email-error"
          label="Email"
          type="email"
          defaultValue="invalid-email"
          error="Enter a valid email address."
        />

        <Input
          id="example-disabled"
          label="Unavailable field"
          defaultValue="Cannot be edited"
          disabled
        />
      </div>

      <p className="text-sm text-slate-600">
        The error example demonstrates appearance only. Validation will be
        handled by the form.
      </p>
    </div>
  );
}
