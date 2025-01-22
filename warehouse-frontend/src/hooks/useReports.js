import { useState, useEffect } from 'react';
import { getInventoryReport, getActivityLog } from '../services/reportService';

const useReports = () => {
  const [inventoryReport, setInventoryReport] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const inventoryData = await getInventoryReport();
        const logData = await getActivityLog();
        setInventoryReport(inventoryData);
        setActivityLog(logData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  return { inventoryReport, activityLog, loading, error };
};

export default useReports;
