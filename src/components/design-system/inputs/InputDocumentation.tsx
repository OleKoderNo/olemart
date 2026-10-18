import GuidelineSection from "@/components/design-system/GuidelineSection";
import InputExamples from "./InputExamples";
import InputGuidelines from "./InputGuidelines";

export default function InputDocumentation() {
  return (
    <GuidelineSection
      id="inputs"
      title="Inputs"
      description="Labelled fields for entering short text, email addresses, and search terms."
    >
      <InputGuidelines />
      <InputExamples />
    </GuidelineSection>
  );
}
