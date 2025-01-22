import { useState, useEffect } from 'react';
import { getOrders, addOrder, updateOrder } from '../services/orderService';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const addNewOrder = async (order) => {
    try {
      const response = await addOrder(order);
      setOrders((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editOrder = async (order) => {
    try {
      const response = await updateOrder(order);
      setOrders((prev) => prev.map((item) => (item.id === order.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { orders, loading, error, addNewOrder, editOrder };
};

export default useOrders;
