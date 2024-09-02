import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import BusinessUnitSummary from './pages/BusinessUnitSummary';
import RegionalSummary from './pages/RegionalSummary';
import ClientSummary from './pages/ClientSummary';
import ClientActivitySummary from './pages/ClientActivitySummary';
import DataQualitySummary from './pages/DataQualitySummary';
import GlobalReports from './pages/GlobalReports';

import Navigation from './pages/Navigation';
import HeaderBar from './pages/HeaderBar';



export const App: React.FC = () => {
  
  return (
    <>
    <HeaderBar />
    <Router>
      <div style={{ display: 'flex' }}>
        <Navigation />
        <main className="">
        <div style={{padding: '10px' }}>
          <Routes>
            <Route path="/" element={<BusinessUnitSummary />} />
            <Route path="/businessunitsummary" element={<BusinessUnitSummary />} />
            <Route path="/regionalsummary" element={<RegionalSummary />} />
            <Route path="/clientsummary" element={<ClientSummary />} />
            <Route path="/clientactivitysummary" element={<ClientActivitySummary />} />
            <Route path="/dataqualitysummary" element={<DataQualitySummary />} />
            <Route path="/globalreports" element={<GlobalReports />} />
          </Routes>
        </div>
      </main >
      </div>
    </Router></>
  );
};

export default App;
