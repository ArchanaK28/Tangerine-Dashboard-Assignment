import React from 'react';
import  '../../styles/DataCard.css';

function CustomersCard() {
  return (
    <div className="tri-card customers-card">
      <div className="card-header">
        <h3>Customers</h3>
        <span className="info-icon">ℹ️</span>
      </div>
      <div className="card-content">
        <div className="main-value">3,200</div>
        <div className="sub-text">
          <span className="positive-indicator">+12%</span> 
          <span>vs last month</span>
        </div>
      </div>
      
    </div>
  );
}

export default CustomersCard;