import React from 'react';

interface StatsProps {
  title: string;
  value: number;
  description: string;
}

const Stats: React.FC<StatsProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{value.toLocaleString()}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Stats;
