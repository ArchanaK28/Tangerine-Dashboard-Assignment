import React from 'react';
import '../../styles/DataCard.css';

function SalesCard() {
  return (
    <div className="tri-card sales-card">
      <div className="card-header">
        <h3>Sales</h3>
        <span className="info-icon">ℹ️</span>
      </div>
      <div className="card-content">
        <div className="main-value">$230,220</div>
        <div className="sub-text">
          <span className="positive-indicator">+55%</span> 
          <span>since last month</span>
        </div>
      </div>
      
    </div>
  );
}

export default SalesCard;