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
 * Fetches a single product by its ID, including its reviews.
 *
 * @param id - The unique ID of the product.
 * @returns The requested product, or null if the API returns 404.
 * @throws If the request fails, the API returns an unsuccessful status
 * other than 404, or the response cannot be parsed as JSON.
 */
export async function getProduct(id: string): Promise<Product | null> {
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
