import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import ProductSortExamples from "./ProductSortExamples";

/** Documents the shared select and product sorting behaviour. */
export default function ProductSortDocumentation() {
  return (
    <GuidelineSection
      id="product-sort"
      title="Product sorting"
      description="Sort the catalogue using a reusable, labelled select."
    >
      <ul className="list-disc space-y-2 pl-5 text-slate-700">
        <li>Sort the full catalogue before applying pagination.</li>
        <li>Price sorting uses the selling price after any discount.</li>
        <li>Default order preserves the order returned by the API.</li>
        <li>Changing the shop sort returns to page one.</li>
        <li>Pagination preserves the selected sort in the URL.</li>
        <li>Unknown sorting values fall back to the default order.</li>
        <li>The shared Select accepts native select attributes.</li>
      </ul>

      <CodeExample
        code={`import Select from "@/components/ui/Select";

<Select
  id="example-sort"
  label="Sort products"
  options={[
    { value: "default", label: "Default order" },
    { value: "price-asc", label: "Price: low to high" },
  ]}
  value={sort}
  onChange={(event) => setSort(event.target.value)}
/>`}
      />

      <p className="text-sm text-slate-600">
        These fictional products demonstrate sorting locally. The wooden train
        has the highest original price but the lowest selling price.
      </p>

      <ProductSortExamples />
    </GuidelineSection>
  );
}
