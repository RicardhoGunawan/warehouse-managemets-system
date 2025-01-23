import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import useCategories from '../../hooks/useCategories';

const CategoryList = () => {
  const { 
    categories, 
    loading, 
    error, 
    addNewCategory, 
    editCategory,
    removeCategory 
  } = useCategories();

  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddCategory = (newCategory) => {
    addNewCategory(newCategory);
    setFormVisible(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Category List</h1>
      
      <button
        onClick={() => setFormVisible(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New Category
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
            <CategoryForm 
              onAddCategory={handleAddCategory} 
              onClose={() => setFormVisible(false)} 
            />
            <button
              onClick={() => setFormVisible(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <CategoryItem 
              key={category.id} 
              category={category} 
              onEdit={(updatedCategory) => editCategory(category.id, updatedCategory)}
              onDelete={removeCategory} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;