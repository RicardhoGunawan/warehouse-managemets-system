import React, { useState } from 'react';

const CategoryForm = ({ onAddCategory, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onAddCategory({ 
        category_name: name, 
        description 
      });
      setName('');
      setDescription('');
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Category Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter category name"
          required
        />
      </div>
      <div>
        <label className="block mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Enter category description"
          required
        />
      </div>
      <button 
        type="submit" 
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;