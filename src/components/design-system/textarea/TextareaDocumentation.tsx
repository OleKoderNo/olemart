import GuidelineSection from "@/components/design-system/GuidelineSection";
import CodeExample from "@/components/design-system/CodeExample";
import Textarea from "@/components/ui/Textarea";

/** Documents multiline input, help text, and error presentation. */
export default function TextareaDocumentation() {
  return (
    <GuidelineSection
      id="textarea"
      title="Textarea"
      description="A reusable multiline field with an associated label and optional feedback."
    >
      <p className="text-slate-700">
        Provide a unique id and a label. Use helpText for instructions and error
        for validation feedback. Validation belongs to the form; this component
        displays the supplied message.
      </p>

      <CodeExample
        code={`<Textarea
  id="message"
  name="message"
  label="Message"
  helpText="At least 10 characters."
  error={errors.message}
/>`}
      />

      <div className="max-w-xl space-y-6">
        <Textarea
          id="textarea-demo-default"
          label="Message"
          helpText="You can resize this field vertically."
        />

        <Textarea
          id="textarea-demo-error"
          label="Message with an example error"
          defaultValue="Hi"
          error="Message must contain at least 10 characters."
        />

        <Textarea
          id="textarea-demo-disabled"
          label="Disabled message"
          disabled
        />
      </div>
    </GuidelineSection>
  );
}
