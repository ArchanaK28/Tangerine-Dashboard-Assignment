import React from 'react';
import '../../styles/DataCard.css';

function RevenueCard() {
  return (
    <div className="tri-card revenue-card">
      <div className="card-header">
        <h3>Avg. Revenue</h3>
        <span className="info-icon">ℹ️</span>
      </div>
      <div className="card-content">
        <div className="main-value">$1,200</div>
        <div className="sub-text">
          <span className="">+$213%</span> 
          <span>since last month</span>
        </div>
      </div>
      
    </div>
  );
}

export default RevenueCard;