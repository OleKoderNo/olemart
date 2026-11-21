const properties = [
  { name: "text", description: "Required. The visible button label." },
  {
    name: "theme",
    description: "primary, secondary, or danger. Defaults to primary.",
  },
  {
    name: "type",
    description: "button, submit, or reset. Defaults to button.",
  },
  {
    name: "disabled",
    description: "Prevents activation. Defaults to false.",
  },
  {
    name: "onClick",
    description: "The function called when the button is activated.",
  },
  {
    name: "className",
    description: "Additional classes for layout, such as w-full.",
  },
];

/** Lists Button properties and explains the shared styling boundary. */
export default function ButtonProperties() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Button properties</h3>

      <dl className="divide-y divide-border">
        {properties.map(({ name, description }) => (
          <div
            key={name}
            className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
          >
            <dt className="font-mono text-sm font-semibold">{name}</dt>
            <dd className="text-muted-foreground">{description}</dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-muted-foreground">
        Native button attributes are also supported. The text prop supplies the
        content; children are not accepted.
      </p>

      <p className="text-sm text-muted-foreground">
        Button and ButtonLink share the buttonStyles helper. Update shared
        appearance there, while keeping action and navigation behaviour in their
        respective components.
      </p>

      <p className="text-sm text-muted-foreground">
        clsx combines classes; it does not resolve conflicting Tailwind styles.
        Use className for additional layout styles rather than overriding theme
        colours.
      </p>
    </div>
  );
}
