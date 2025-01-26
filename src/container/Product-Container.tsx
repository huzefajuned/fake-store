import useProducts from "../hook/useProducts";
import Loader from "../components/Loader";
import { productInterafce } from "../types/common";
import SingleProduct from "../components/Single-Product";
import { useCallback, useState } from "react";
import { isBottomReached } from "../utils/commom";

const ProductContainer = () => {
  const [offset, setOffset] = useState<number>(5); // Manage offset

  const { products, loading, error } = useProducts({ offset });

  console.log("products :", products);

  const handleScrollToBottom = useCallback(
    (event: any) => {
      isBottomReached(event, () => {
        setOffset((prevOffset) => prevOffset + 5);
      });
    },
    [setOffset]
  );
  if (loading) return <Loader />;
  if (error) return null;



  return (
    <div className="bg-gray-100 flex flex-col w-screen h-screen p-4">
      <p className="text-center p-2 text-3xl underline">
        Products : {products.length}
      </p>
      <div
        className="bg-white rounded-xl min-h-[90vh] overflow-x-scroll p-2 flex flex-row flex-wrap items-center justify-center"
        onScroll={(event) => handleScrollToBottom(event)}
      >
        {products.map((product: productInterafce, index: number) => {
          return <SingleProduct product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductContainer;
