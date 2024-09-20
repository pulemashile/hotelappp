import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

const LineGraph = () => {
  const data = {
    labels: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineGraph;
