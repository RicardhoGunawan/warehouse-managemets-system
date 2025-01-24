import api from './api';  
  
const API_URL = '/api/products';  
  
export const getProducts = async () => {  
  const response = await api.get(API_URL);  
  return response.data;  
};  
  
export const addProduct = async (productData) => {  
  const response = await api.post(API_URL, productData);  
  return response.data;  
};  
  
export const updateProduct = async (id, productData) => {  
  const response = await api.put(`${API_URL}/${id}`, productData);  
  return response.data;  
};  
  
export const deleteProduct = async (id) => {  
  await api.delete(`${API_URL}/${id}`);  
};  
