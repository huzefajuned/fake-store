const fakeURI = "https://api.escuelajs.co/api/v1/products";

// separate API interaction logic.
export const fetchProductsAPI = async ({ limit = 0, offset = 0 }) => {
  const url = `${fakeURI}?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error : ${response.statusText}`);
  }

  return await response.json();
};
