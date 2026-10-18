import DesignSystemNav from "@/components/design-system/DesignSystemNav";
import { designSystemSections } from "@/components/design-system/sections";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-8">
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
      </div>
    </main>
  );
}
