import React from 'react';
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
  return (
    <div>
      <img src={TeslaLogo} className='center' alt="Tesla Logo" />
      <Tabs />
      <div id="about-the-team">
        <AboutTheTeam />
      </div>
      <div id="environmental-impact">
        <EnvironmentalImpact />
      </div>
      <div id="revenue">
        <Revenue />
      </div>
      <div id="cost-of-sales">
        <CostOfSales />
      </div>
      <div id="gross-profit">
        <GrossProfit />
      </div>
      <div id="profit">
        <Profit />
      </div>
      <div id="extra">
        <Extra />
      </div>
      <Footer />
    </div>
  );
}

export default App;
