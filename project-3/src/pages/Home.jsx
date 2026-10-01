import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import Button from "../components/Button";

function Home() {
  const { products } = useProducts();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 shadow rounded"
          >
            <h2 className="font-bold">{product.title}</h2>
            <p className="mt-2">₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              <Button>View Product</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
