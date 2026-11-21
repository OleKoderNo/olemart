type CheckoutConfirmationProps = {
  headingLevel?: 1 | 3;
};

/** Displays theme-aware confirmation for the assignment's simulated checkout. */
export default function CheckoutConfirmation({
  headingLevel = 1,
}: CheckoutConfirmationProps) {
  const Heading = headingLevel === 1 ? "h1" : "h3";

  return (
    <div className="space-y-3">
      <Heading className="text-3xl font-bold text-foreground">
        Checkout complete!
      </Heading>

      <p className="text-muted-foreground">
        Thank you for shopping with OleMart.
      </p>

      <p className="text-sm text-muted-foreground">
        This is a demonstration checkout. No payment was taken and no real order
        was placed.
      </p>
    </div>
  );
}
