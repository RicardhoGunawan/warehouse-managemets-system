import { useState, useEffect } from 'react';
import { getCategories, addCategory, updateCategory } from '../services/categoryService';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const addNewCategory = async (category) => {
    try {
      const response = await addCategory(category);
      setCategories((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editCategory = async (category) => {
    try {
      const response = await updateCategory(category);
      setCategories((prev) => prev.map((item) => (item.id === category.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { categories, loading, error, addNewCategory, editCategory };
};

export default useCategories;
