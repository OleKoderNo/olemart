import ButtonDocumentation from "./buttons/ButtonDocumentation";
import ContainerDocumentation from "./container/ContainerDocumentation";
import FooterDocumentation from "./footer/FooterDocumentation";
import HeaderDocumentation from "./header/HeaderDocumentation";
import InputDocumentation from "./inputs/InputDocumentation";
import ProductPriceDocumentation from "./product-price/ProductPriceDocumentation";
import ProductRatingDocumentation from "./product-rating/ProductRatingDocumentation";
import ProductCardDocumentation from "./product-card/ProductCardDocumentation";
import ProductGridDocumentation from "./product-grid/ProductGridDocumentation";
import PaginationDocumentation from "./pagination/PaginationDocumentation";
import ProductDetailsDocumentation from "./product-details/ProductDetailsDocumentation";

/**
 * Defines navigation labels, documentation components, and display order.
 * IDs must match the corresponding documentation section IDs.
 */
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
  {
    id: "product-price",
    title: "Product pricing",
    component: ProductPriceDocumentation,
  },
  {
    id: "product-rating",
    title: "Product rating",
    component: ProductRatingDocumentation,
  },
  {
    id: "product-card",
    title: "Product card",
    component: ProductCardDocumentation,
  },
  {
    id: "product-grid",
    title: "Product grid",
    component: ProductGridDocumentation,
  },
  {
    id: "pagination",
    title: "Pagination",
    component: PaginationDocumentation,
  },
  {
    id: "product-details",
    title: "Product details",
    component: ProductDetailsDocumentation,
  },
];
