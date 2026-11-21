type DesignSystemNavProps = {
  sections: {
    id: string;
    title: string;
  }[];
};

/** Renders theme-aware anchor links to registered design-system sections. */
export default function DesignSystemNav({ sections }: DesignSystemNavProps) {
  return (
    <nav aria-label="Design system">
      <ul className="flex flex-wrap gap-2">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-flex min-h-11 items-center rounded-lg border border-input-border bg-surface px-4 font-medium text-foreground hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
