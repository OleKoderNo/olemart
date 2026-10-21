import type { Product } from "@/types/product";

/**
 * Demo product using the Toy car data from the Noroff online shop API.
 * Used to preview product cards without making an API request.
 */
export const exampleProduct: Product = {
  id: "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
  title: "Toy car",
  description:
    "A die-cast model of a toy car, perfect for displaying on your shelf.",
  price: 499.95,
  discountedPrice: 449.95,
  image: {
    url: "https://static.noroff.dev/api/online-shop/12-toy-car.jpg",
    alt: "",
  },
  rating: 0,
  tags: ["toy"],
  reviews: [],
};
