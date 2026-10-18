import ButtonDocumentation from "./buttons/ButtonDocumentation";
import ContainerDocumentation from "./container/ContainerDocumentation";
import HeaderDocumentation from "./header/HeaderDocumentation";
import FooterDocumentation from "./footer/FooterDocumentation";
import InputDocumentation from "./inputs/InputDocumentation";

export const designSystemSections = [
  {
    id: "container",
    title: "Container",
    component: ContainerDocumentation,
  },
  {
    id: "header",
    title: "Header",
    component: HeaderDocumentation,
  },
  {
    id: "footer",
    title: "Footer",
    component: FooterDocumentation,
  },
  {
    id: "buttons",
    title: "Buttons",
    component: ButtonDocumentation,
  },
  {
    id: "inputs",
    title: "Inputs",
    component: InputDocumentation,
  },
];
