import api from './api';

const API_URL = '/api/products';

export const getProducts = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const addProduct = async (product) => {
  try {
    const response = await api.post(API_URL, product);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add product');
  }
};

export const updateProduct = async (product) => {
  try {
    const response = await api.put(`${API_URL}/${product.id}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update product');
  }
};
