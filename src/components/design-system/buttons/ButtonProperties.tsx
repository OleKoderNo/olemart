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

export default function ButtonProperties() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Properties</h3>

      <dl className="divide-y divide-slate-200">
        {properties.map(({ name, description }) => (
          <div
            key={name}
            className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4"
          >
            <dt className="font-mono text-sm font-semibold">{name}</dt>
            <dd className="text-slate-600">{description}</dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-slate-600">
        Native button attributes are also supported. clsx combines classes; it
        does not resolve conflicting Tailwind styles.
      </p>
    </div>
  );
}
