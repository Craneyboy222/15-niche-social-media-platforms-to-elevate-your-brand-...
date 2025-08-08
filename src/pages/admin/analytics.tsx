import { useState, useEffect } from 'react';
import axios from 'axios';
import { AnalyticsDashboard } from '../../components/admin/AnalyticsDashboard';
import { Spinner } from '../../components/ui/Spinner';
import { ErrorMessage } from '../../components/ui/ErrorMessage';

const AdminAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/analytics')
      .then(response => {
        setAnalyticsData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-4">
      <AnalyticsDashboard data={analyticsData} />
    </div>
  );
};

export default AdminAnalytics;