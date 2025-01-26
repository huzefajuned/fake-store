import { useEffect, useState } from "react";
import { fetchProductsAPI } from "../api/products";
import { productInterafce } from "../types/common";

const useProducts = ({ offset }: { offset: number }) => {
  const limit = 5;
  // simple states for { products, loading, error}
  const [products, setProducts] = useState<productInterafce[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  //    main function for fetching products from API.
  async function fetchProducts() {
    setLoading(true);
    try {
      const json = await fetchProductsAPI({ limit, offset });
      if (json) {
        setProducts([...products, ...json]);
      }
    } catch (error: any) {
      if (error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  }

  //    load the products
  useEffect(() => {
    fetchProducts();
  }, [offset]);

  return { products, loading, error };
};

export default useProducts;
