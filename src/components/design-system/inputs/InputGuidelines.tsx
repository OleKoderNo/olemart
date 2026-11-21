import CodeExample from "@/components/design-system/CodeExample";

/** Documents input usage, shared field structure, and styling responsibilities. */
export default function InputGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Usage</h3>

      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>Give every input a unique id and a visible label.</li>
        <li>Use helpText for instructions before an error occurs.</li>
        <li>Use error to explain what needs correcting.</li>
        <li>Use placeholders for examples, not as replacement labels.</li>
        <li>Indicate required fields in their labels.</li>
      </ul>

      <CodeExample
        code={`import Input from "@/components/ui/Input";

<Input
  id="email"
  name="email"
  label="Email (required)"
  type="email"
  autoComplete="email"
  required
/>`}
      />

      <h3 className="text-lg font-semibold text-foreground">
        Shared field structure
      </h3>

      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>
          Input, Textarea, and Select use FormField for consistent labels and
          spacing.
        </li>
        <li>
          Input and Textarea also use its help text and error presentation.
        </li>
        <li>
          Use the existing controls for normal forms. Do not wrap them in
          another FormField.
        </li>
        <li>
          Use FormField when building a new control that needs the same label
          and feedback layout.
        </li>
        <li>
          The control must use the same id as its FormField. Reference rendered
          feedback through aria-describedby using the id-help and id-error
          suffixes.
        </li>
        <li>
          FormField does not add accessibility attributes to its child. The
          control handles aria-describedby and aria-invalid.
        </li>
        <li>
          Validation belongs to the parent form. FormField only displays the
          supplied feedback.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground">
        Where to change styles
      </h3>

      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>
          Edit FormField for label styling, feedback text, and spacing around
          the control.
        </li>
        <li>
          Edit formControlStyles for shared control colours, borders, padding,
          focus outlines, and error borders.
        </li>
        <li>
          Keep control-specific styles in Input, Textarea, or Select, such as
          height, textarea resizing, and disabled background or opacity.
        </li>
        <li>
          The hasError option changes appearance only. It does not validate
          values or set accessibility attributes.
        </li>
        <li>
          Use className for additional layout styles. clsx combines classes but
          does not resolve conflicting Tailwind styles.
        </li>
      </ul>
    </div>
  );
}
