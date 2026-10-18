import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";

/** Documents desktop and mobile navigation behaviour and keyboard interaction. */
export default function HeaderDocumentation() {
  return (
    <GuidelineSection
      id="header"
      title="Header and navigation"
      description="Shared branding with desktop navigation and a compact mobile dropdown."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>The logo links to the homepage.</li>
        <li>Desktop displays horizontal navigation links.</li>
        <li>Mobile displays a Menu button that toggles the dropdown.</li>
        <li>
          The dropdown fits its content and aligns to the right beneath the Menu
          button.
        </li>
        <li>The dropdown overlays content without moving the page.</li>
        <li>Opening and closing animate unless reduced motion is enabled.</li>
        <li>Clicking or tapping outside closes the dropdown.</li>
        <li>Moving keyboard focus out of the navigation closes it.</li>
        <li>Escape closes the dropdown and focuses the Menu button.</li>
        <li>Closed navigation links cannot receive keyboard focus.</li>
        <li>Selecting a navigation link closes the dropdown.</li>
        <li>The current page is highlighted in the navigation.</li>
        <li>Render Header once in the root layout.</li>
      </ul>

      <CodeExample
        code={`import Header from "@/components/layout/Header";

// Inside the existing body:
<Header />
{children}`}
      />

      <p className="text-sm text-slate-600">
        The header above is the live example. Resize the browser to compare
        mobile and desktop navigation. Use Tab to check focus, Enter to activate
        links, and Escape to close the mobile dropdown.
      </p>
    </GuidelineSection>
  );
}
