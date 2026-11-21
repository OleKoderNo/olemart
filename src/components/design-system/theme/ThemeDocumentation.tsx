import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ThemeToggle from "@/components/theme/ThemeToggle";

/** Documents theme preferences, shared colour tokens, and palette maintenance. */
export default function ThemeDocumentation() {
  return (
    <GuidelineSection
      id="theme"
      title="Theme"
      description="Shared colours that keep components consistent in light and dark mode."
    >
      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>
          The initial theme follows the device setting until a preference is
          saved.
        </li>
        <li>
          The toggle switches between light and dark mode. The selected
          preference is saved across refreshes.
        </li>
        <li>
          ThemeProvider applies the active theme class to the html element.
        </li>
        <li>
          Colours are defined centrally in globals.css. Components use named
          colour tokens instead of individual palette colours.
        </li>
        <li>
          Product image backgrounds, code examples, and discount badges keep
          consistent colours in both themes.
        </li>
        <li>
          Check normal, hover, focus, disabled, and error states in both themes.
        </li>
      </ul>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          Using shared colours
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>Use background and foreground for the page.</li>
          <li>
            Use surface and surface-muted for panels and supporting areas.
          </li>
          <li>Use muted-foreground for supporting text.</li>
          <li>Use border and input-border for their respective boundaries.</li>
          <li>Use focus for keyboard focus outlines.</li>
          <li>Use error for validation text, borders, and outlines.</li>
          <li>
            Buttons, notifications, ratings, and discounts have dedicated tokens
            for their colours.
          </li>
        </ul>

        <CodeExample
          code={`<section className="bg-background text-foreground">
  <article className="rounded-xl border border-border bg-surface p-4">
    <h3 className="font-semibold">Example panel</h3>
    <p className="text-muted-foreground">Supporting information.</p>
  </article>
</section>`}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">
          Changing or adding colours
        </h3>

        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>
            Reuse an existing token when it already describes the intended
            purpose.
          </li>
          <li>
            To change an existing colour, edit its value in globals.css.
            Components using that token receive the update.
          </li>
          <li>For a new token, define its default value inside :root.</li>
          <li>
            Add an override inside :root.dark if it should change in dark mode.
          </li>
          <li>
            Expose the token through a --color- mapping inside @theme inline.
          </li>
          <li>Apply the resulting Tailwind class and check both themes.</li>
        </ol>

        <CodeExample
          code={`/* Default validation colour. */
:root {
  --error: var(--color-red-700);
}

/* Dark-theme validation colour. */
:root.dark {
  --error: var(--color-red-400);
}

/* Makes text-error, border-error, and outline-error available. */
@theme inline {
  --color-error: var(--error);
}`}
        />

        <p className="text-sm text-muted-foreground">
          The Tailwind import uses theme(static) to retain the palette variables
          referenced by our tokens. Keep this option so those colours remain
          available after direct palette classes are removed.
        </p>

        <CodeExample code={`@import "tailwindcss" theme(static);`} />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <p className="text-sm text-muted-foreground">
          Switch the theme to preview this entire page. This changes the saved
          site preference, not just this example.
        </p>
      </div>
    </GuidelineSection>
  );
}
