import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../../styles/BarChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const data = {
    labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
    datasets: [{
      label: 'Sales by Age',
      data: [15, 20, 12, 60, 20, 15],
      backgroundColor: '#2C3E50', 
      borderWidth: 0,
      barThickness: 20 
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
          color: 'rgba(0,0,0,0.1)'
        },
        ticks: {
          color: '#333'
        }
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          color: '#333'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Sales by Age',
        font: {
          size: 16
        }
      }
    }
  };

  return (
    <div className="data-card">
      <div className="bar-chart-header"><h3>Sales by Age</h3>
      <span className="info-icon">ℹ️</span></div>
      <div className="bar-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;