import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  getCategories, 
  addCategory, 
  updateCategory, 
  deleteCategory 
} from '../services/categoryService';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories();
      setCategories(response);
      setLoading(false);
    } catch (err) {
      toast.error('Failed to fetch categories');
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addNewCategory = async (categoryData) => {
    try {
      const newCategory = await addCategory(categoryData);
      setCategories((prev) => [...prev, newCategory]);
      toast.success('Category added successfully');
      fetchCategories(); // Refresh data
    } catch (err) {
      toast.error('Failed to add category');
      setError(err.message);
    }
  };

  const editCategory = async (id, categoryData) => {
    try {
      const updatedCategory = await updateCategory(id, categoryData);
      toast.success('Category updated successfully');
      fetchCategories(); // Refresh data
    } catch (err) {
      toast.error('Failed to update category');
      setError(err.message);
    }
  };

  const removeCategory = async (id) => {
    try {
      await deleteCategory(id);
      toast.success('Category deleted successfully');
      fetchCategories(); // Refresh data
    } catch (err) {
      toast.error('Failed to delete category');
      setError(err.message);
    }
  };

  return { 
    categories, 
    loading, 
    error, 
    addNewCategory, 
    editCategory,
    removeCategory 
  };
};

export default useCategories;