// DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Define the chart data
const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// Define the chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.label || '';

          if (context.parsed) {
            label += `: ${context.parsed.toFixed(2)}%`;
          }

          return label;
        },
      },
    },
  },
};

const DoughnutChart: React.FC = () => {
  return (
    <div>
      <h2>Doughnut Chart Example</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
