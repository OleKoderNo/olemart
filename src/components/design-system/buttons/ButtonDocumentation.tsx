import GuidelineSection from "@/components/design-system/GuidelineSection";
import ButtonExamples from "./ButtonExamples";
import ButtonGuidelines from "./ButtonGuidelines";
import ButtonProperties from "./ButtonProperties";

export default function ButtonDocumentation() {
  return (
    <GuidelineSection
      id="buttons"
      title="Buttons"
      description="Use buttons to trigger actions and submit forms."
    >
      <ButtonGuidelines />
      <ButtonProperties />
      <ButtonExamples />
    </GuidelineSection>
  );
}
