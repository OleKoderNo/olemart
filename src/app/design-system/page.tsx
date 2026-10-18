import DesignSystemNav from "@/components/design-system/DesignSystemNav";
import { designSystemSections } from "@/components/design-system/sections";
import Container from "@/components/ui/Container";

export default function DesignSystemPage() {
  return (
    <main className="bg-slate-50 py-12 text-slate-900">
      <Container className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">OleMart design system</h1>
          <p className="text-lg text-slate-600">
            Components, examples, and guidelines for building the website.
          </p>
        </header>

        <DesignSystemNav sections={designSystemSections} />

        {designSystemSections.map(({ id, component: Component }) => (
          <Component key={id} />
        ))}
      </Container>
    </main>
  );
}
