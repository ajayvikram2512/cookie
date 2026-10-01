import { useEffect, useState } from "react";
import axios from "axios";

export function useProducts(id) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => setProduct(response.data));
    } else {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data));
    }
  }, [id]);

  return { products, product };
}
