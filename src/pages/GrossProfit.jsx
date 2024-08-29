// src/pages/GrossProfit.jsx
import React from 'react';
import '../index.css';

const GrossProfit = () => {
  return (
    <div className="tab-content active-tab">
      <p><strong>Analysing Tesla's Gross Profit:</strong></p>
      <p>
        Tesla’s Gross Profit is a critical measure of its financial health,
        representing the difference between total revenues and the cost of
        revenues. Changes in Gross Profit provide insights into how effectively
        Tesla manages its production costs relative to its sales.
      </p>
      <p><strong>Quarterly Gross Profit Analysis:</strong></p>
      <ul>
        <li>
          <strong>Q2-2023:</strong> Gross Profit was $4.533 billion, with total
          revenues of $24.927 billion and a total cost of revenues of $20.394
          billion. This quarter saw strong automotive sales and efficient cost
          management, resulting in a robust GP.
        </li>
        <li>
          <strong>Q3-2023:</strong> Gross Profit declined to $4.178 billion
          (7.83% decrease). The decrease in total revenues to $23.350 billion,
          alongside a reduction in cost efficiency, as seen by the total cost of
          revenues of $19.172 billion, contributed to this decline. The drop in
          automotive sales revenue was a key factor in the lower GP.
        </li>
        <li>
          <strong>Q4-2023:</strong> Gross Profit increased slightly to $4.438
          billion (+6.22% improvement). The increase in total revenues to
          $25.167 billion helped recover some profitability despite a higher
          cost of revenues at $20.729 billion. This suggests improved revenue
          generation from automotive sales and regulatory credits, countering
          the rising costs.
        </li>
        <li>
          <strong>Q1-2024:</strong> Gross profit dropped significantly to $3.696
          billion (16.72% decrease), the lowest in the period. Total revenues
          decreased to $21.301 billion, while the cost of revenues fell to
          $17.605 billion. This quarter was marked by reduced automotive sales
          and higher costs, which together squeezed the GP.
        </li>
        <li>
          <strong>Q2-2024:</strong> Gross Profit rebounded to $4.578 billion
          (+23.85% improvement), the highest in the period. Total revenues
          surged to $25.500 billion, driven by a significant increase in energy
          generation and storage revenues. Although the total cost of revenues
          also rose to $20.922 billion, the increase in revenues outpaced costs,
          leading to a strong GP recovery.
        </li>
      </ul>
      <p>
        <strong>Impact of Revenue and Cost of Sales on Gross Profit:</strong>
      </p>
      <p>
        The fluctuations in Tesla’s Gross Profit over the quarters are primarily
        driven by changes in total revenues and the cost of revenues. Higher
        revenues, especially from automotive sales and energy storage, generally
        boost Gross Profit, but this effect can be mitigated by rising costs.
        Conversely, when revenues decline or costs increase disproportionately,
        Gross Profit tends to decrease or worsen.
      </p>
    </div>
  );
};

export default GrossProfit;
