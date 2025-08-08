import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler);

interface AreaChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, options }) => {
  return (
    <div role="img" aria-label="Area chart showing trend data">
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
