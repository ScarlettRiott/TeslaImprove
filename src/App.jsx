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
import TeslaLogo from "./assets/Tesla_Motors.svg.png";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px 0",
        backgroundColor: "#333",
        color: "#fff",
        marginTop: "20px",
      }}
    >
      <p>&copy; 2024 Tesla. All rights reserved.</p>
    </footer>
  );
}


function App() {
  return (
    <div>
      <img src={TeslaLogo} className='center' alt="Tesla Logo" />
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
      <Footer />
    </div>
  );
}


export default App;
