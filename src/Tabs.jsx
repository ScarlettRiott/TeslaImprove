import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/about-the-team">About the Team</NavLink></li>
        <li><NavLink to="/environmental-impact">Environmental Impact</NavLink></li>
        <li><NavLink to="/revenue">Revenue</NavLink></li>
        <li><NavLink to="/cost-of-sales">Cost of Sales</NavLink></li>
        <li><NavLink to="/gross-profit">Gross Profit</NavLink></li>
        <li><NavLink to="/profit">Profit</NavLink></li>
        <li><NavLink to="/extra">Extra</NavLink></li>
      </ul>
    </nav>
  );
};

export default Tabs;
