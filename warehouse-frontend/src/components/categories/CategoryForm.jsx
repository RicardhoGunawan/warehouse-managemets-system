// src/components/categories/CategoryForm.jsx  
import React, { useState } from 'react';  
  
const CategoryForm = ({ onAddCategory, onClose }) => {  
  const [categoryName, setCategoryName] = useState('');  
  const [description, setDescription] = useState(''); // State untuk deskripsi  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (categoryName.trim() && description.trim()) {  
      const newCategory = {  
        id: Date.now(), // Menggunakan timestamp sebagai ID  
        name: categoryName,  
        description: description, // Menyertakan deskripsi  
      };  
      onAddCategory(newCategory);  
      setCategoryName(''); // Reset input kategori  
      setDescription(''); // Reset input deskripsi  
      onClose(); // Menutup form setelah submit  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit} className="category-form mb-4">  
      <input  
        type="text"  
        value={categoryName}  
        onChange={(e) => setCategoryName(e.target.value)}  
        placeholder="Category Name"  
        className="border p-2 rounded w-full mb-2"  
        required  
      />  
      <input  
        type="text"  
        value={description}  
        onChange={(e) => setDescription(e.target.value)}  
        placeholder="Description"  
        className="border p-2 rounded w-full mb-2"  
        required  
      />  
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">  
        Add Category  
      </button>    
    </form>  
  );  
};  
  
export default CategoryForm;  
