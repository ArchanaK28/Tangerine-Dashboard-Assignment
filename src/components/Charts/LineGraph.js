import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../../styles/LineGraph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: [
      {
        label: 'Facebook Ads',
        data: [1, 100, 200, 200, 400, 350, 500, 450, 700],
        borderColor: 'rgb(17, 108, 219)',
        tension: 0.1,
      },
      {
        label: 'Google Ads',
        data: [0, 10, 30, 100, 150, 200, 300, 270, 290],
        borderColor: '#000000',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="line-graph-data-card">
      <div className="line-graph-header">
        <h3>Revenue</h3>
        <span className="info-icon">ℹ️</span>
      </div>
 
      <div className='lines-container'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default LineGraph;