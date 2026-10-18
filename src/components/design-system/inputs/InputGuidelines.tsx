import CodeExample from "@/components/design-system/CodeExample";

/** Documents input labels, help text, errors, and basic usage. */
export default function InputGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Usage</h3>

      <ul className="list-disc space-y-2 pl-5 text-slate-700">
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
    </div>
  );
}
