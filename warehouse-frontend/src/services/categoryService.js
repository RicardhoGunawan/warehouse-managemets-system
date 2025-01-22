import api from './api';

const API_URL = '/api/categories';

export const getCategories = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

export const addCategory = async (category) => {
  try {
    const response = await api.post(API_URL, category);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add category');
  }
};

export const updateCategory = async (category) => {
  try {
    const response = await api.put(`${API_URL}/${category.id}`, category);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update category');
  }
};
