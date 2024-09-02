import React from 'react';
import '../menubar.css'; // Import the CSS file for styling

const HeaderBar: React.FC = () => {
  return (
    <header className="menu-bar">
      <div className="menu-left">
        <div className="hamburger-menu">
          {/* Hamburger Icon */}
          <span></span>
          <span></span> 
          <span></span> 
        </div>
        <div className='app-name'>
            Qlient
        </div>
      </div>
      <div className="menu-right">
        {/* Profile Picture */}
        <img
          src="favicon.ico" // Replace with your image path
          alt="Profile"
          className="profile-pic"
        />
      </div>
    </header>
  );
};

export default HeaderBar;
