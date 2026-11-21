import GuidelineSection from "@/components/design-system/GuidelineSection";
import ButtonExamples from "./ButtonExamples";
import ButtonGuidelines from "./ButtonGuidelines";
import ButtonProperties from "./ButtonProperties";
import ButtonLinkGuidelines from "./ButtonLinkGuidelines";
import IconButtonGuidelines from "./IconButtonGuidelines";
import IconButtonExamples from "./IconButtonExamples";

/** Assembles guidelines and examples for buttons, styled links, and icon buttons. */
export default function ButtonDocumentation() {
  return (
    <GuidelineSection
      id="buttons"
      title="Buttons"
      description="Shared styling for action buttons and prominent navigation links."
    >
      <ButtonGuidelines />
      <ButtonProperties />
      <ButtonExamples />

      <div className="space-y-6 border-t border-border pt-6">
        <ButtonLinkGuidelines />
      </div>

      <div className="space-y-6 border-t border-border pt-6">
        <IconButtonGuidelines />
        <IconButtonExamples />
      </div>
    </GuidelineSection>
  );
}
