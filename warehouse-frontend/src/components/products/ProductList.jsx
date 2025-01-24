import React, { useState, useEffect } from 'react';  
import ProductItem from './ProductItem';  
import ProductForm from './ProductForm';  
import useProducts from '../../hooks/useProducts';  
import { getLocations } from '../../services/locationService';  
import { getCategories } from '../../services/categoryService';  
  
const ProductList = () => {  
  const {   
    products,   
    loading,   
    error,   
    addNewProduct,   
    editProduct,  
    removeProduct   
  } = useProducts();  
  
  const [locations, setLocations] = useState([]);  
  const [categories, setCategories] = useState([]);  
  const [isFormVisible, setFormVisible] = useState(false);  
  
  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const [locationData, categoryData] = await Promise.all([  
          getLocations(),  
          getCategories()  
        ]);  
        setLocations(locationData);  
        setCategories(categoryData);  
      } catch (error) {  
        console.error('Failed to fetch locations or categories', error);  
      }  
    };  
  
    fetchData();  
  }, []);  
  
  const handleAddProduct = (newProduct) => {  
    addNewProduct(newProduct);  
    setFormVisible(false);  
  };  
  
  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  
  
  return (  
    <div className="p-4">  
      <h1 className="text-2xl font-bold mb-4">Product List</h1>  
        
      <button  
        onClick={() => setFormVisible(true)}  
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"  
      >  
        Add New Product  
      </button>  
  
      {/* Modal */}  
      {isFormVisible && (  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
          <div className="bg-white rounded-lg p-6 w-96">  
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>  
            <ProductForm   
              locations={locations}  
              categories={categories}  
              onAddProduct={handleAddProduct}   
              onClose={() => setFormVisible(false)}   
            />  
          </div>  
        </div>  
      )}  
  
      <table className="w-full border-collapse">  
        <thead>  
          <tr className="bg-gray-100">  
            <th className="p-2 text-left">Name</th>  
            <th className="p-2 text-left">Description</th>  
            <th className="p-2 text-left">SKU</th>  
            <th className="p-2 text-left">Quantity</th>  
            <th className="p-2 text-left">Location Name</th>  
            <th className="p-2 text-left">Category Name</th>  
            <th className="p-2 text-left">Actions</th>  
          </tr>  
        </thead>  
        <tbody>  
          {products.map(product => (  
            <ProductItem   
              key={product.id}   
              product={product}   
              locations={locations}  
              categories={categories}  
              onEdit={(updatedProduct) => editProduct(product.id, updatedProduct)}  
              onDelete={removeProduct}   
            />  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
};  
  
export default ProductList;  
