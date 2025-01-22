import api from './api';

const API_URL = '/api/locations';

export const getLocations = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch locations');
  }
};

export const addLocation = async (location) => {
  try {
    const response = await api.post(API_URL, location);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add location');
  }
};

export const updateLocation = async (location) => {
  try {
    const response = await api.put(`${API_URL}/${location.id}`, location);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update location');
  }
};
