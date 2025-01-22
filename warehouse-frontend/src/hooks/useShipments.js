import { useState, useEffect } from 'react';
import { getShipments, addShipment, updateShipment } from '../services/shipmentService';

const useShipments = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await getShipments();
        setShipments(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShipments();
  }, []);

  const addNewShipment = async (shipment) => {
    try {
      const response = await addShipment(shipment);
      setShipments((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editShipment = async (shipment) => {
    try {
      const response = await updateShipment(shipment);
      setShipments((prev) => prev.map((item) => (item.id === shipment.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { shipments, loading, error, addNewShipment, editShipment };
};

export default useShipments;
