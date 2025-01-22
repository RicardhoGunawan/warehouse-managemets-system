import { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct } from '../services/productService';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addNewProduct = async (product) => {
    try {
      const response = await addProduct(product);
      setProducts((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editProduct = async (product) => {
    try {
      const response = await updateProduct(product);
      setProducts((prev) => prev.map((item) => (item.id === product.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { products, loading, error, addNewProduct, editProduct };
};

export default useProducts;
