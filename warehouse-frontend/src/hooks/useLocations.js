import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { 
  getLocations, 
  addLocation, 
  updateLocation, 
  deleteLocation 
} from '../services/locationService';

const useLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const response = await getLocations();
      setLocations(response);
      setLoading(false);
    } catch (err) {
      toast.error('Failed to fetch locations');
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const addNewLocation = async (locationData) => {
    try {
      const newLocation = await addLocation(locationData);
      setLocations((prev) => [...prev, newLocation]);
      toast.success('Location added successfully');
      fetchLocations(); // Refresh data
    } catch (err) {
      toast.error('Failed to add location');
      setError(err.message);
    }
  };

  const editLocation = async (id, locationData) => {
    try {
      await updateLocation(id, locationData);
      toast.success('Location updated successfully');
      fetchLocations(); // Refresh data
    } catch (err) {
      toast.error('Failed to update location');
      setError(err.message);
    }
  };

  const removeLocation = async (id) => {
    try {
      await deleteLocation(id);
      toast.success('Location deleted successfully');
      fetchLocations(); // Refresh data
    } catch (err) {
      toast.error('Failed to delete location');
      setError(err.message);
    }
  };

  return { 
    locations, 
    loading, 
    error, 
    addNewLocation, 
    editLocation,
    removeLocation 
  };
};

export default useLocations;
