import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

interface ChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
    }>;
  };
  options?: object;
}

export const Chart: React.FC<ChartProps> = ({ data, options }) => {
  return (
    <div role="img" aria-label="Line chart displaying data trends">
      <Line data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        backgroundColor: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  options: PropTypes.object,
};