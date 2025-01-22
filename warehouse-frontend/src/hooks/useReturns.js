import { useState, useEffect } from 'react';
import { getReturns, addReturn, updateReturn } from '../services/returnService';

const useReturns = () => {
  const [returns, setReturns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReturns = async () => {
      try {
        const response = await getReturns();
        setReturns(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReturns();
  }, []);

  const addNewReturn = async (returnItem) => {
    try {
      const response = await addReturn(returnItem);
      setReturns((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editReturn = async (returnItem) => {
    try {
      const response = await updateReturn(returnItem);
      setReturns((prev) => prev.map((item) => (item.id === returnItem.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { returns, loading, error, addNewReturn, editReturn };
};

export default useReturns;
