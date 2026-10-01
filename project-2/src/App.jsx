import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Headphones",
    price: 999,
    description: "Wireless headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1499,
    description: "Simple smart watch"
  },
  {
    id: 3,
    name: "Backpack",
    price: 799,
    description: "Comfortable travel backpack"
  }
];

function Home() {
  const [cart, setCart] = useState(0);

  function addToCart(name) {
    setCart(cart + 1);
    alert(name + " added to cart!");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-5">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Mini Store
          </Link>

          <div className="flex gap-5">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <span>Cart: {cart}</span>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="text-gray-600 mt-2">
            Simple products at simple prices.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} onAdd={addToCart} />

              <Link
                to={`/product/${product.id}`}
                className="block text-blue-600 mt-2 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </section>

        <ContactForm />
      </main>
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-8">
        <p>Product not found.</p>
        <Link to="/" className="text-blue-600">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow p-8 mt-5">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-3">{product.description}</p>
        <p className="text-xl font-bold mt-4">₹{product.price}</p>
      </div>
    </main>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Thank you, ${name}! Your message was submitted.`);
    setName("");
  }

  return (
    <section className="mt-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border p-3 rounded bg-white"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="text-green-600 mt-3">{message}</p>
      )}
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
