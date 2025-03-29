import React from 'react';
import { Settings } from 'lucide-react'; // Using lucide-react for the icon
import '../../styles/SettingsButton.css'

function SettingsButton() {
  const handleSettingsClick = () => {
    
    console.log('Settings clicked');
  };

  return (
    <button 
      className="settings-button" 
      onClick={handleSettingsClick}
      aria-label="Open Settings"
    >
      <Settings />
    </button>
  );
}

export default SettingsButton;