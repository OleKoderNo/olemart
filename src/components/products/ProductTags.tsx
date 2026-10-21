type ProductTagsProps = {
  tags: string[];
};

/** Displays product tags, or nothing when no tags are available. */
export default function ProductTags({ tags }: ProductTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul aria-label="Product tags" className="flex flex-wrap gap-2">
      {Array.from(new Set(tags)).map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
