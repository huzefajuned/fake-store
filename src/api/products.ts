import { BASE_URI, endUrls } from "../utils/commom";

// separate API interaction logic.
export const fetchProductsAPI = async () => {
  const response = await fetch(`${BASE_URI}${endUrls.products}`);

  if (!response.ok) {
    throw new Error(`Error : ${response.statusText}`);
  }

  return await response.json();
};
