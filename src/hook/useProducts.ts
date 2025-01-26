import { useEffect, useState } from "react";
import { fetchProductsAPI } from "../api/products";
import { productInterafce } from "../types/common";

const useProducts = () => {
  // simple states for { products, loading, error}
  const [products, setProducts] = useState<productInterafce[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  //    main function for fetching products from API.
  async function fetchProducts() {
    setLoading(true);
    try {
      const json = await fetchProductsAPI({ limit: 5, offset: 10 });
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
  }, []);

  return { products, loading, error };
};

export default useProducts;
