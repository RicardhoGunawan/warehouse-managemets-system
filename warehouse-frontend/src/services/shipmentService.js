import api from './api';

const API_URL = '/api/shipments';

export const getShipments = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch shipments');
  }
};

export const addShipment = async (shipment) => {
  try {
    const response = await api.post(API_URL, shipment);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add shipment');
  }
};

export const updateShipment = async (shipment) => {
  try {
    const response = await api.put(`${API_URL}/${shipment.id}`, shipment);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update shipment');
  }
};
