import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts } from 'chart.js';
import '../../styles/PieChart.css';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const channelsData = [
    { label: 'Facebook', value: 15, color: '#3B82F6' },
    { label: 'Direct', value: 15, color: '#d01b71' },
    { label: 'Google Ads', value: 10, color: '#808080' },
    { label: 'Referral', value: 60, color: '#000000' }
  ];

  const data = {
    labels: channelsData.map(channel => channel.label),
    datasets: [{
      data: channelsData.map(channel => channel.value),
      backgroundColor: channelsData.map(channel => channel.color)
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: "0 50",
      margin: "2"
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return (
      <div className="pie-chart-container">
        <div className="pie-chart-header">
          <h3>Channels</h3>
          <span className="info-icon">ℹ️</span>
        </div>
        
        <div className="pie-chart-content">
          <div className="pie-chart-graph">
            <Pie data={data} options={options} />
            <div className="card-footer"></div>
          </div>
          
          <div className="pie-chart-labels">
            {channelsData.map((channel, index) => (
              <div key={channel.label} className="channel-label ">
                <span 
                  className="channel-color" 
                  style={{ backgroundColor: channel.color }}
                ></span>
                <div className="channel-details">
                  <span className="channel-name">{channel.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sub-text">
            <p>More than <strong>1,200,000</strong> sales are mode using referral marketing,<br/>and <strong>700,000</strong> are from social media.</p>
            <button className='btn'>READ MORE</button>
        </div>
      </div>
  );
}

export default PieChart;
