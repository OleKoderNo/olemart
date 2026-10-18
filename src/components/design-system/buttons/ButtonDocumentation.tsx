import GuidelineSection from "@/components/design-system/GuidelineSection";
import ButtonExamples from "./ButtonExamples";
import ButtonGuidelines from "./ButtonGuidelines";
import ButtonProperties from "./ButtonProperties";

/** Assembles the button guidelines, property reference, and live examples. */
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
