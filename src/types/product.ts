/** A product image and its alternative text. */
export type ProductImage = {
  url: string;
  alt: string;
};

/** A customer review associated with a product. */
export type ProductReview = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

/** A product returned by the Noroff online shop API. */
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;

  /** The selling price. Matches price when no discount applies. */
  discountedPrice: number;

  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: ProductReview[];
};
