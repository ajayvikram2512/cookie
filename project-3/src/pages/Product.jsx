import { useParams, Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

function Product() {
  const { id } = useParams();
  const { product } = useProducts(id);

  if (!product) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back
      </Link>

      <div className="bg-white shadow rounded p-6 mt-5">
        <h1 className="text-2xl font-bold">{product.title}</h1>

        <p className="mt-4">{product.description}</p>

        <p className="font-bold mt-4">₹{product.price}</p>
      </div>
    </div>
  );
}

export default Product;
