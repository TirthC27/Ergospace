import React from 'react';
import './admin_style.css';

const Sidebar = ({ userData, activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'venues', label: 'Venues' },
    { id: 'addVenue', label: 'Add Venue' }
  ];

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img 
          src={userData.profileImage} 
          alt="Profile" 
          className="profile-image" 
        />
        <h3 className="profile-name">{userData.name}</h3>
        <p className="profile-email">{userData.email}</p>
      </div>
      
      <div className="nav-items">
        {navItems.map(item => (
          <div 
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;