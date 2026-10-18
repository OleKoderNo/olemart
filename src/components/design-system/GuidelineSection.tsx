import type { ReactNode } from "react";

type GuidelineSectionProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

/**
 * Wraps component documentation in a consistently styled section.
 * Uses the supplied ID for anchor navigation and heading association.
 */
export default function GuidelineSection({
  id,
  title,
  description,
  children,
}: GuidelineSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-8 space-y-6 rounded-xl border border-slate-200 bg-white p-6"
    >
      <header>
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold text-slate-900"
        >
          {title}
        </h2>

        <p className="mt-2 text-slate-600">{description}</p>
      </header>

      {children}
    </section>
  );
}
