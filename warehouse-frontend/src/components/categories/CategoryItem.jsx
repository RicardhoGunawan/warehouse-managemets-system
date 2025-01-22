// src/components/categories/CategoryItem.jsx  
import React from 'react';  
  
const CategoryItem = ({ category, onEdit, onDelete }) => (  
  <tr>  
    <td>{category.name}</td>  
    <td>{category.description}</td>  
    <td>  
      <button onClick={() => onEdit(category)} className="text-blue-500 mr-2">Edit</button>  
      <button onClick={() => onDelete(category.id)} className="text-red-500">Delete</button>  
    </td>  
  </tr>  
);  
  
export default CategoryItem;  
