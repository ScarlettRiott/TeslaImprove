// src/pages/Extra.jsx
import React from 'react';
import '../index.css';
import FinancialSummary from "../assets/FinancialSummary.jpg"
import StatementOfOperations from "../assets/StatementOfOperations.jpg"

const Extra = () => {
  return (
    <div className="tab-content active-tab">
      <h1>Extras</h1>
      <h2>Financial Summary</h2>
      <img src={FinancialSummary} />
      <h2>Statement of Operations</h2>
      <img src={StatementOfOperations} />
    </div>
  );
};

export default Extra;
