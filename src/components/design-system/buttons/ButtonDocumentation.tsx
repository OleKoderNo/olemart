import GuidelineSection from "@/components/design-system/GuidelineSection";
import ButtonExamples from "./ButtonExamples";
import ButtonGuidelines from "./ButtonGuidelines";
import ButtonProperties from "./ButtonProperties";
import IconButtonGuidelines from "./IconButtonGuidelines";
import IconButtonExamples from "./IconButtonExamples";

/** Assembles guidelines, properties, and live examples for text and icon buttons. */
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

      <div className="space-y-6 border-t border-border pt-6">
        <IconButtonGuidelines />
        <IconButtonExamples />
      </div>
    </GuidelineSection>
  );
}
