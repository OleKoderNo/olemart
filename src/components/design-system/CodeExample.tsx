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
      className="overflow-x-auto rounded-lg border border-border bg-code-background p-4 text-sm text-code-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      <code>{code}</code>
    </pre>
  );
}
