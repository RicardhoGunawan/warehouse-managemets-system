import api from './api';

const API_URL = '/api/reports';

export const getInventoryReport = async () => {
  try {
    const response = await api.get(`${API_URL}/inventory`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch inventory report');
  }
};

export const getActivityLog = async () => {
  try {
    const response = await api.get(`${API_URL}/activity-log`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch activity log');
  }
};
