import CodeExample from "@/components/design-system/CodeExample";

export default function ButtonGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Usage</h3>

      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <strong>Primary:</strong> the main action, such as adding to cart.
        </li>
        <li>
          <strong>Secondary:</strong> supporting actions, such as cancelling.
        </li>
        <li>
          <strong>Danger:</strong> destructive actions, such as removing an
          item.
        </li>
        <li>Use links for navigation and buttons for actions.</li>
        <li>Use clear labels that describe what the button does.</li>
      </ul>

      <CodeExample
        code={`import Button from "@/components/ui/Button";

<Button theme="primary" text="Add to cart" />
<Button theme="secondary" text="Cancel" />
<Button theme="danger" text="Remove item" />
<Button text="Send message" type="submit" />
<Button text="Unavailable" disabled />`}
      />

      <p className="text-sm text-slate-600">
        Use a Client Component when passing an onClick handler. Buttons default
        to type="button".
      </p>
    </div>
  );
}
