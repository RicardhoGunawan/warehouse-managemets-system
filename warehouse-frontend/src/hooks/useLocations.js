import { useState, useEffect } from 'react';
import { getLocations, addLocation, updateLocation } from '../services/locationService';

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getLocations();
        setLocations(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  const addNewLocation = async (location) => {
    try {
      const response = await addLocation(location);
      setLocations((prev) => [...prev, response]);
    } catch (err) {
      setError(err.message);
    }
  };

  const editLocation = async (location) => {
    try {
      const response = await updateLocation(location);
      setLocations((prev) => prev.map((item) => (item.id === location.id ? response : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  return { locations, loading, error, addNewLocation, editLocation };
};

export default useLocations;
