type CodeExampleProps = {
  code: string;
};

/** Displays a code example in a keyboard-focusable, scrollable block. */
export default function CodeExample({ code }: CodeExampleProps) {
  return (
    <pre
      tabIndex={0}
      aria-label="Code example"
      className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <code>{code}</code>
    </pre>
  );
}
