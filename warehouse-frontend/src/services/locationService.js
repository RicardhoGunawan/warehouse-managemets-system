import api from './api';

const API_URL = '/api/locations';

export const getLocations = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const addLocation = async (locationData) => {
  const response = await api.post(API_URL, locationData);
  return response.data;
};

export const updateLocation = async (id, locationData) => {
  const response = await api.put(`${API_URL}/${id}`, locationData);
  return response.data;
};

export const deleteLocation = async (id) => {
  await api.delete(`${API_URL}/${id}`);
};