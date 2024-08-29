import React, { useState } from 'react';
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
    <footer>
      <p>&copy; 2024 Tesla. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("about-the-team");

  return (
    <div>
      <img src={TeslaLogo} className='center' alt="Tesla Logo" />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === "about-the-team" && <AboutTheTeam />}
        {activeTab === "environmental-impact" && <EnvironmentalImpact />}
        {activeTab === "revenue" && <Revenue />}
        {activeTab === "cost-of-sales" && <CostOfSales />}
        {activeTab === "gross-profit" && <GrossProfit />}
        {activeTab === "profit" && <Profit />}
        {activeTab === "extra" && <Extra />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
