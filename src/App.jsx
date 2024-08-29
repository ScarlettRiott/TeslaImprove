import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tabs from './Tabs';
import AboutTheTeam from './pages/AboutTheTeam';
import EnvironmentalImpact from './pages/EnvironmentalImpact';
import Revenue from './pages/Revenue';
import CostOfSales from './pages/CostOfSales';
import GrossProfit from './pages/GrossProfit';
import Profit from './pages/Profit';
import Extra from './pages/Extra';
import './index.css';

function App() {
  return (
    <div>
      <Tabs />
      <Routes>
        <Route path="/about-the-team" element={<AboutTheTeam />} />
        <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/cost-of-sales" element={<CostOfSales />} />
        <Route path="/gross-profit" element={<GrossProfit />} />
        <Route path="/profit" element={<Profit />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </div>
  );
}

export default App;
