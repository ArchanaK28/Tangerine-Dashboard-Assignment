import React from 'react';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
      <span className='home-logo'>🏠<span> / </span><span className='dashboard-tab'> Dashboard </span> <span> / </span><span className='sales-active'> Sales </span></span>
      <h1>Sales</h1></div>
      <div className="header-right">
       
        <input 
          type="text" 
          placeholder="Search here." 
          className="search-input" 
        />
        <div className="header-icons">
          <span>👤</span>
          <span>⚙️</span>
          <span>🔔</span>
          
        </div>
      </div>
    </header>
  );
}

export default Header;