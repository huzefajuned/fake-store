//  infline scrolling

import { productInterafce } from "../types/common";

const SingleProduct = ({ product }: { product: productInterafce }) => {
  if (!product) return null;
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 m-4 border border-gray-200 hover:shadow-2xl transition-shadow max-w-sm">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product?.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Category:</span>{" "}
          {product.category.name}
        </p>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          <span className="font-semibold">Description:</span>{" "}
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-green-600">
            ${product.price}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
