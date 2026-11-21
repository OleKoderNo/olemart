import CodeExample from "@/components/design-system/CodeExample";
import ButtonLink from "@/components/ui/ButtonLink";

/** Explains when navigation should use shared button styling. */
export default function ButtonLinkGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Links styled as buttons</h3>

      <p className="text-muted-foreground">
        Use ButtonLink for prominent navigation actions. Use Button for actions
        such as submitting a form or removing an item. Ordinary navigation links
        can remain text links.
      </p>

      <CodeExample
        code={`import ButtonLink from "@/components/ui/ButtonLink";

<ButtonLink href="/" text="Browse products" theme="secondary" />`}
      />

      <ButtonLink href="/" text="Browse products" theme="secondary" />

      <p className="text-sm text-muted-foreground">
        This example opens the shop. It remains a link and supports opening in a
        new tab. ButtonLink shares its appearance with Button and does not
        provide a disabled prop.
      </p>
    </div>
  );
}
