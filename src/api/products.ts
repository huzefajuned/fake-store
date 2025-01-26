const fakeURI = "https://api.escuelajs.co/api/v1/products";

// separate API interaction logic.
export const fetchProductsAPI = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {

  console.log('limit ', limit);
  console.log('offset :', offset)
  const url = `${fakeURI}?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error : ${response.statusText}`);
  }

  return await response.json();
};
