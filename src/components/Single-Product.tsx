import { productInterafce } from "../types/common";

const SingleProduct = ({ product }: { product: productInterafce }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-4 border border-gray-200 hover:shadow-2xl transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Category:</span> {product.category}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Description:</span>{" "}
        {product.description}
      </p>
      <p className="text-lg font-semibold text-green-600">
        Price: ${product.price}
      </p>
    </div>
  );
};

export default SingleProduct;
