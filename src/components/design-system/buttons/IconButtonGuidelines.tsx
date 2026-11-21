import CodeExample from "@/components/design-system/CodeExample";

/** Documents icon-button variants, accessible labels, and keyboard behaviour. */
export default function IconButtonGuidelines() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Icon buttons</h3>

      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>
          Use IconButton for actions represented by an icon, such as opening a
          menu or removing a cart item.
        </li>
        <li>
          Provide a label that describes the action. It is available to screen
          readers without displaying visible text.
        </li>
        <li>
          Mark decorative icons with aria-hidden so they do not duplicate the
          button label.
        </li>
        <li>
          Secondary is the default variant, with a border and surface
          background.
        </li>
        <li>Ghost is borderless with the standard text colour.</li>
        <li>GhostMuted is borderless with the muted text colour.</li>
        <li>
          Danger uses a red background and contrasting icon colour on hover.
        </li>
        <li>
          Native button attributes, event handlers, and refs are supported. The
          default type is button.
        </li>
        <li>
          Use aria-expanded and aria-controls when the button toggles a panel.
        </li>
        <li>
          Disabled buttons cannot be activated and do not receive hover styling.
        </li>
      </ul>

      <CodeExample
        code={`import { IoTrashOutline } from "react-icons/io5";
import IconButton from "@/components/ui/IconButton";

<IconButton
  theme="danger"
  label={\`Remove \${product.title} from cart\`}
  onClick={() => removeItem(product.id)}
>
  <IoTrashOutline aria-hidden="true" className="size-5" />
</IconButton>`}
      />

      <p className="text-sm text-muted-foreground">
        Test icons and focus outlines in both themes. Labels should describe
        what happens when activated, rather than the shape of the icon.
      </p>
    </div>
  );
}
