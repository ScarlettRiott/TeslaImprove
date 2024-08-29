import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      <button
        className={`tab ${activeTab === "about-the-team" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("about-the-team")}
      >
        About the Team
      </button>
      <button
        className={`tab ${activeTab === "environmental-impact" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("environmental-impact")}
      >
        Environmental Impact
      </button>
      <button
        className={`tab ${activeTab === "revenue" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("revenue")}
      >
        Revenue
      </button>
      <button
        className={`tab ${activeTab === "cost-of-sales" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("cost-of-sales")}
      >
        Cost of Sales
      </button>
      <button
        className={`tab ${activeTab === "gross-profit" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("gross-profit")}
      >
        Gross Profit
      </button>
      <button
        className={`tab ${activeTab === "profit" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("profit")}
      >
        Profit
      </button>
      <button
        className={`tab ${activeTab === "extra" ? "active-tab" : ""}`}
        onClick={() => setActiveTab("extra")}
      >
        Extra
      </button>
    </div>
  );
}

export default Tabs;
