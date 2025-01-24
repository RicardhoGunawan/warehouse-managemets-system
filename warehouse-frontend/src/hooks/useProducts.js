import { useState, useEffect } from 'react';  
import { toast } from 'react-toastify';  
import {   
  getProducts,   
  addProduct,   
  updateProduct,   
  deleteProduct   
} from '../services/productService';  
  
const useProducts = () => {  
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  const fetchProducts = async () => {  
    try {  
      setLoading(true);  
      const response = await getProducts();  
      setProducts(response);  
      setLoading(false);  
    } catch (err) {  
      toast.error('Failed to fetch products');  
      setError(err.message);  
      setLoading(false);  
    }  
  };  
  
  useEffect(() => {  
    fetchProducts();  
  }, []);  
  
  const addNewProduct = async (productData) => {  
    try {  
      const newProduct = await addProduct(productData);  
      setProducts((prev) => [...prev, newProduct]);  
      toast.success('Product added successfully');  
      fetchProducts(); // Refresh data  
    } catch (err) {  
      toast.error('Failed to add product');  
      setError(err.message);  
    }  
  };  
  
  const editProduct = async (id, productData) => {  
    try {  
      await updateProduct(id, productData);  
      toast.success('Product updated successfully');  
      fetchProducts(); // Refresh data  
    } catch (err) {  
      toast.error('Failed to update product');  
      setError(err.message);  
    }  
  };  
  
  const removeProduct = async (id) => {  
    try {  
      await deleteProduct(id);  
      toast.success('Product deleted successfully');  
      fetchProducts(); // Refresh data  
    } catch (err) {  
      toast.error('Failed to delete product');  
      setError(err.message);  
    }  
  };  
  
  return {   
    products,   
    loading,   
    error,   
    addNewProduct,   
    editProduct,  
    removeProduct   
  };  
};  
  
export default useProducts;  
