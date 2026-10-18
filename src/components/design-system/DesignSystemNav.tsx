type DesignSystemNavProps = {
  sections: {
    id: string;
    title: string;
  }[];
};

/** Renders anchor links to the registered design-system sections. */
export default function DesignSystemNav({ sections }: DesignSystemNavProps) {
  return (
    <nav aria-label="Design system">
      <ul className="flex flex-wrap gap-2">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 font-medium text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
