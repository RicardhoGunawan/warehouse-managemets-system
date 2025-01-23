import api from './api';

const API_URL = '/api/categories';

export const getCategories = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const addCategory = async (categoryData) => {
  const response = await api.post(API_URL, categoryData);
  return response.data;
};

export const updateCategory = async (id, categoryData) => {
  const response = await api.put(`${API_URL}/${id}`, categoryData);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};