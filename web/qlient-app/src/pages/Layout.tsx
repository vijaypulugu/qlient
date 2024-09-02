import React from 'react';
import '../layout.css'; // Import the CSS file for styling
import { Outlet } from 'react-router-dom';
import HeaderBar from './HeaderBar';

const Layout: React.FC = () => {
  return (
    <div>
    <HeaderBar/>        
    <div className="layout">
    {/* <HomeNavigation/> */}
    <main className="main-content">
        <Outlet />
      </main >
    
    </div>
    </div>
  );
};

export default Layout;
