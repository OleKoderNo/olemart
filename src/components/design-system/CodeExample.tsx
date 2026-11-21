type CodeExampleProps = {
  code: string;
};

/**
 * Displays code on a consistently dark background in both themes.
 * Supports keyboard focus and horizontal scrolling for long examples.
 */
export default function CodeExample({ code }: CodeExampleProps) {
  return (
    <pre
      tabIndex={0}
      aria-label="Code example"
      className="overflow-x-auto rounded-lg border border-border bg-slate-900 p-4 text-sm text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      <code>{code}</code>
    </pre>
  );
}
