import type { PaginatedResponse, SingleResponse } from "@/types/api";
import type { Product } from "@/types/product";

const PRODUCTS_URL = "https://v2.api.noroff.dev/online-shop";

/**
 * Fetches a page containing up to nine products.
 *
 * @param page - The page number to retrieve. Defaults to 1.
 * @returns Products and pagination information.
 * @throws If the request fails, the API returns an unsuccessful status,
 * or the response cannot be parsed as JSON.
 */
export async function getProducts(
  page = 1,
): Promise<PaginatedResponse<Product>> {
  const response = await fetch(`${PRODUCTS_URL}?page=${page}&limit=9`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Unable to load products (${response.status}).`);
  }

  const result: PaginatedResponse<Product> = await response.json();

  return result;
}

/**
 * Fetches a single product by its UUID, including its reviews.
 *
 * @param id - The unique ID of the product.
 * @returns The product, or null if the ID is malformed or the API returns 404.
 * @throws If the request fails, the API returns another unsuccessful status,
 * or the response cannot be parsed as JSON.
 */
export async function getProduct(id: string): Promise<Product | null> {
  // Reject malformed IDs before requesting a product from the API.
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(id)) {
    return null;
  }

  const response = await fetch(`${PRODUCTS_URL}/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Unable to load product (${response.status}).`);
  }

  const result: SingleResponse<Product> = await response.json();

  return result.data;
}

/**
 * Fetches every product page so search covers the entire catalogue.
 *
 * @returns All products across the API's pagination.
 * @throws If any product page cannot be loaded.
 */
export async function getAllProducts(): Promise<Product[]> {
  const products: Product[] = [];
  let page: number | null = 1;

  while (page !== null) {
    const result: PaginatedResponse<Product> = await getProducts(page);

    products.push(...result.data);
    page = result.meta.nextPage;
  }

  return products;
}
