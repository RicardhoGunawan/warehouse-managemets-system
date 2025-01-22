import api from './api';

const API_URL = '/api/returns';

export const getReturns = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch returns');
  }
};

export const addReturn = async (returnItem) => {
  try {
    const response = await api.post(API_URL, returnItem);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add return');
  }
};

export const updateReturn = async (returnItem) => {
  try {
    const response = await api.put(`${API_URL}/${returnItem.id}`, returnItem);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update return');
  }
};
