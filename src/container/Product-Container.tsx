import useProducts from "../hook/useProducts";
import Loader from "../components/Loader";
import { productInterafce } from "../types/common";
import SingleProduct from "../components/Single-Product";

const ProductContainer = () => {
  const { products, loading, error } = useProducts();

  
  if (loading) return <Loader />;
  if (error) return null;
  //
  return (
    <div className="">
      <p>Prducts : {products.length}</p>
      {products.map((product: productInterafce, index: number) => {
        return <SingleProduct product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductContainer;
