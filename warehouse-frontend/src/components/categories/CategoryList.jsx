// src/components/categories/CategoryList.jsx  
import React, { useState } from 'react';  
import CategoryItem from './CategoryItem';  // Mengimpor Item kategori    
import CategoryForm from './CategoryForm';  // Mengimpor Form kategori    
import { Link } from 'react-router-dom';    
  
const CategoryList = () => {    
    const [categories, setCategories] = useState([  
        { id: 1, name: 'Electronics', description: 'Devices and gadgets' },  
        { id: 2, name: 'Furniture', description: 'Home and office furniture' },  
        { id: 3, name: 'Clothing', description: 'Apparel and accessories' },  
        { id: 4, name: 'Books', description: 'Various genres of books' },  
      ]);   
  const [isFormVisible, setFormVisible] = useState(false); // State untuk mengontrol visibilitas form  
  
  const handleAddCategory = (newCategory) => {  
    setCategories([...categories, newCategory]);  
    setFormVisible(false); // Sembunyikan form setelah menambahkan kategori  
  };  
  
  return (  
    <div>  
      <h1 className="text-2xl font-bold">Category List</h1>  
      <button   
        onClick={() => setFormVisible(true)}   
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"  
      >  
        Add New Category  
      </button>  
  
      {isFormVisible && (  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
          <div className="bg-white p-6 rounded shadow-lg">  
            <h2 className="text-xl font-semibold">Add New Category</h2>  
            <CategoryForm onAddCategory={handleAddCategory} />  
            <button   
              onClick={() => setFormVisible(false)}   
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"  
            >  
              Cancel  
            </button>  
          </div>  
        </div>  
      )}  
  
      <ul className="mt-4">  
        {categories.map(category => (  
          <CategoryItem key={category.id} category={category} />  
        ))}  
      </ul>  
    </div>  
  );  
};  
  
export default CategoryList;  
