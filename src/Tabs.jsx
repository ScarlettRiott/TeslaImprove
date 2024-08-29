import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: '/about-the-team', label: 'About the Team' },
    { path: '/environmental-impact', label: 'Environmental Impact' },
    { path: '/revenue', label: 'Revenue' },
    { path: '/cost-of-sales', label: 'Cost of Sales' },
    { path: '/gross-profit', label: 'Gross Profit' },
    { path: '/profit', label: 'Profit' },
    { path: '/extra', label: 'Extra' }
  ];

  return (
    <div className="tab-container">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${location.pathname === tab.path ? 'active' : ''}`}
          onClick={() => navigate(tab.path)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
