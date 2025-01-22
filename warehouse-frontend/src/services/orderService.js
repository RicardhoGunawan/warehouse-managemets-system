import api from './api';

const API_URL = '/api/orders';

export const getOrders = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch orders');
  }
};

export const addOrder = async (order) => {
  try {
    const response = await api.post(API_URL, order);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add order');
  }
};

export const updateOrder = async (order) => {
  try {
    const response = await api.put(`${API_URL}/${order.id}`, order);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update order');
  }
};
