function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="font-bold mt-3">₹{product.price}</p>

      <button
        onClick={() => onAdd(product.name)}
        className="bg-black text-white px-4 py-2 rounded mt-4 hover:bg-gray-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
