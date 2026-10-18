import CodeExample from "@/components/design-system/CodeExample";
import GuidelineSection from "@/components/design-system/GuidelineSection";
import Container from "@/components/ui/Container";

export default function ContainerDocumentation() {
  return (
    <GuidelineSection
      id="container"
      title="Container"
      description="Keeps content centred with consistent width and side spacing."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Use inside headers, footers, and page sections.</li>
        <li>Put full-width backgrounds on the outer element.</li>
        <li>Avoid nesting containers, which adds extra side padding.</li>
        <li>Use className for additional spacing, such as py-8.</li>
      </ul>

      <CodeExample
        code={`import Container from "@/components/ui/Container";

<section className="bg-slate-100">
  <Container className="py-8">
    <h2>Featured products</h2>
  </Container>
</section>`}
      />

      <div className="rounded-lg bg-slate-200 py-4">
        <Container>
          <div className="rounded bg-white p-4 text-slate-700">
            Resize the browser to see the side spacing change.
          </div>
        </Container>
      </div>
    </GuidelineSection>
  );
}
