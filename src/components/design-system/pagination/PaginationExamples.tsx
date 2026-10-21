import PaginationPreview from "./PaginationPreview";

const examples = [
  { title: "Starting on the first page", initialPage: 1 },
  { title: "Starting on the middle page", initialPage: 2 },
  { title: "Starting on the last page", initialPage: 3 },
];

/** Displays independent interactive pagination previews. */
export default function PaginationExamples() {
  return (
    <div className="space-y-8">
      {examples.map(({ title, initialPage }) => (
        <div key={initialPage} className="space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <PaginationPreview initialPage={initialPage} />
        </div>
      ))}
    </div>
  );
}
