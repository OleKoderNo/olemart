import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";

/** Documents footer placement, responsive layout, and usage. */
export default function FooterDocumentation() {
  return (
    <GuidelineSection
      id="footer"
      title="Footer"
      description="Shared site information and supporting navigation."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Render Footer once, after the page content in the root layout.</li>
        <li>Use Container to align its content with the header.</li>
        <li>
          Content stacks on mobile and sits side by side on wider screens.
        </li>
        <li>The footer follows page content and never covers it.</li>
      </ul>

      <CodeExample
        code={`import Footer from "@/components/layout/Footer";

<Footer />`}
      />

      <p className="text-sm text-slate-600">
        The live example is at the bottom of this page.
      </p>
    </GuidelineSection>
  );
}
