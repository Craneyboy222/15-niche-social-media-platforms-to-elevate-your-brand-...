import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';
import { Chart } from '../components/Chart';

const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
      setData({ engagement: 76, growth: 24 });
    }, 1000);
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Engagement Metrics</h2>
          <Chart data={data.engagement} />
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Growth Metrics</h2>
          <Chart data={data.growth} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;