import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ThemeToggle from "@/components/theme/ThemeToggle";

/** Documents theme preferences, shared colour classes, and intentional exceptions. */
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
          Shared colours are defined in globals.css. Use their Tailwind classes
          instead of fixed colours for surfaces and text.
        </li>
        <li>
          Product image backgrounds and code examples intentionally keep their
          own consistent colours in both themes.
        </li>
        <li>
          Check normal, hover, focus, disabled, and error states in both themes.
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
