import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";

/** Documents responsive navigation, theme switching, and keyboard interaction. */
export default function HeaderDocumentation() {
  return (
    <GuidelineSection
      id="header"
      title="Header and navigation"
      description="Shared branding, responsive navigation, theme controls, cart access, and site-wide search."
    >
      <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
        <li>The logo links to the homepage.</li>
        <li>Desktop displays horizontal navigation links.</li>
        <li>
          Mobile displays an icon button with an accessible label that changes
          between Open menu and Close menu.
        </li>
        <li>
          The dropdown is 10rem wide and aligns to the right beneath its
          trigger.
        </li>
        <li>The dropdown overlays content without moving the page.</li>
        <li>Opening and closing animate unless reduced motion is enabled.</li>
        <li>Clicking or tapping outside closes the dropdown.</li>
        <li>Moving keyboard focus out of the navigation closes it.</li>
        <li>Escape closes the dropdown and focuses its trigger.</li>
        <li>Closed navigation links cannot receive keyboard focus.</li>
        <li>Selecting a navigation link closes the dropdown.</li>
        <li>The current page is highlighted in the navigation.</li>
        <li>
          The theme toggle switches between light and dark mode and saves the
          selected preference.
        </li>
        <li>
          Before a preference is saved, the theme follows the device setting.
        </li>
        <li>The cart icon opens the mini cart.</li>
        <li>Site-wide product search appears below the navigation row.</li>
        <li>Render Header once in the root layout.</li>
      </ul>

      <CodeExample
        code={`import Header from "@/components/layout/Header";

// Inside the existing body and providers:
<Header />
{children}`}
      />

      <p className="text-sm text-muted-foreground">
        The header above is the live example. Resize the browser to compare
        mobile and desktop navigation, and switch themes to check both
        appearances. Use Tab to check focus, Enter to activate controls, and
        Escape to close the mobile dropdown.
      </p>
    </GuidelineSection>
  );
}
