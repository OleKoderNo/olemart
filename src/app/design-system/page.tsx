import DesignSystemNav from "@/components/design-system/DesignSystemNav";
import { designSystemSections } from "@/components/design-system/sections";
import Container from "@/components/ui/Container";

/** Renders the theme-aware design-system guide from registered sections. */
export default function DesignSystemPage() {
  return (
    <main className="bg-background py-12 text-foreground">
      <Container className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">OleMart design system</h1>

          <p className="text-lg text-muted-foreground">
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
