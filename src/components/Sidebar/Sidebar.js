import React from 'react';
import '../../styles/Sidebar.css';
import { useState } from 'react';
import avatar from '../../assets/woman.png'

const icons = {

  dashboard: "📊",
  analytics: "A",
  sales: "S",
  pages: "📄",
  applications: "📱",
  ecommerce: "🛒",
  authentication: "🔐",
  basic: "📚",
  components: "🧩",
  changelog: "📝",
  main: "📁"
};

function Sidebar() {
  const [expanded, setExpanded] = useState({
    dashboards: true,
    pages: false,
    docs: false
  });
  
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpand = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="sidebar-icon">{icons.main}</span>
            {!collapsed && <span className="sidebar-title">Material Dashboard PRO</span>}
          </div>
          <div className="user-profile">
            <div className="user-avatar">
              <div className="avatar-placeholder">
                <img src={avatar} alt='avatar'/>
              </div>
            </div>
            {!collapsed && (
              <div className="user-info">
                <span className="user-name">Brooklyn Alice</span>
                <span className="dropdown-arrow">▼</span>
              </div>
            )}
          </div>
        </div>

        {/* Main navigation */}
        <nav className="sidebar-nav">
          {/* Dashboards Section */}
          <div className="nav-section">
            <div 
              className="section-header" 
              onClick={() => toggleExpand('dashboards')}
            >
              <span className="section-icon">{icons.dashboard}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Dashboards</span>
                  <span className={`arrow-icon ${expanded.dashboards ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.dashboards && !collapsed && (
              <div className="section-items">
                <div className="nav-item">
                  <span className="item-icon">{icons.analytics}</span>
                  <span className="item-label">Analytics</span>
                </div>
                <div className="nav-item active">
                  <span className="item-icon">{icons.sales}</span>
                  <span className="item-label">Sales</span>
                </div>
              </div>
            )}
          </div>

          {/* Pages Section */}
          {!collapsed && <div className="nav-category">PAGES</div>}
          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('pages')}
            >
              <span className="section-icon">{icons.pages}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Pages</span>
                  <span className={`arrow-icon ${expanded.pages ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.pages && !collapsed && (
              <div className="section-items">
                {/* Pages subitems */}
              </div>
            )}
          </div>

          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('applications')}
            >
              <span className="section-icon">{icons.applications}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Applications</span>
                  <span className={`arrow-icon ${expanded.applications ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.pages && !collapsed && (
              <div className="section-items">
                {/* Pages subitems*/}
              </div>
            )}
          </div>

          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('ecommerce')}
            >
              <span className="section-icon">{icons.ecommerce}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Ecommerce</span>
                  <span className={`arrow-icon ${expanded.ecommerce ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.pages && !collapsed && (
              <div className="section-items">
                {/* Pages subitems */}
              </div>
            )}
          </div>

          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('authentication')}
            >
              <span className="section-icon">{icons.authentication}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Authentication</span>
                  <span className={`arrow-icon ${expanded.authentication ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.pages && !collapsed && (
              <div className="section-items">
                {/* Pages subitems */}
              </div>
            )}
          </div>


          {/* Docs Section */}
          {!collapsed && <div className="nav-category">DOCS</div>}
          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('docs')}
            >
              <span className="section-icon">{icons.basic}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Basic</span>
                  <span className={`arrow-icon ${expanded.docs ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
          </div>

          <div className="nav-section">
            <div 
              className="section-header"
              onClick={() => toggleExpand('components')}
            >
              <span className="section-icon">{icons.components}</span>
              {!collapsed && (
                <>
                  <span className="section-title">Components</span>
                  <span className={`arrow-icon ${expanded.components ? 'expanded' : ''}`}>▼</span>
                </>
              )}
            </div>
            
            {expanded.pages && !collapsed && (
              <div className="section-items">
                {/* Pages subitems */}
              </div>
            )}
          </div>

          <div className="nav-item">
            <span className="item-icon">{icons.changelog}</span>
            {!collapsed && <span className="item-label">Change Log</span>}
          </div>
        </nav>
      </div>
      {/* Toggle Button currently not in use */}
      {/* <div className={`sidebar-toggle ${collapsed ? 'sidebar-collapsed' : ''}`} onClick={toggleSidebar}>
    
      </div> */}
    </>
  );
}

export default Sidebar;
