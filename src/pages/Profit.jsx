/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../index.css';
import NetIncomeBillion from "../assets/NetIncomeBillions.jpg"

const Profit = () => {
  return (
    <div className="tab-content active-tab">
      <h2>NET INCOME (Profit)</h2>
      <p>
      Net income refers to the amount an individual or business makes after
        deducting operating costs, allowances, interest, depreciation and taxes.
        It is the actual business profit, often referred to as net earnings.
        Essentially, it’s the “bottom line” figure found on a company’s income
        statement. Tesla's approach to net income reflects a balance between
        aggressive growth strategies and achieving profitability.
      </p>
      <table border="1" cellSpacing="0" cellPadding="5">
        <thead>
          <tr>
            <th></th>
            <th>Q1 2023</th>
            <th>Q2 2023</th>
            <th>Q3 2023</th>
            <th>Q4 2023</th>
            <th>Q1 2024</th>
            <th>Q2 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NET INCOME</td>
            <td>$2.51</td>
            <td>$2.70</td>
            <td>$1.85</td>
            <td>$7.93</td>
            <td>$1.13</td>
            <td>$1.48</td>
          </tr>
          <tr>
            <td>NET PROFIT MARGIN</td>
            <td>10.77%</td>
            <td>10.84%</td>
            <td>7.94%</td>
            <td>31.5%</td>
            <td>5.3%</td>
            <td>5.8%</td>
          </tr>
          <tr>
            <td>Y/Y Change</td>
            <td></td>
            <td style={{ color: 'red' }}>43.71%</td>
            <td style={{ color: 'green' }}>115.03%</td>
            <td style={{ color: 'red' }}>55.07%</td>
            <td style={{ color: 'red' }}>45.32%</td>
          </tr>
        </tbody>
      </table>
      <img src={NetIncomeBillion} alt="Net Income Billions" />
      <p>
      Net profit margin is a key metric that reflects the company’s
        probability relative to its revenue. The net profit margin, calculated
        as net income divided by total revenue, indicates the percentage of
        revenue that translates into profit. Focusing on Tesla’s net profit
        margin; we can analyze key points like stability, investment impact and
        competitive pressure. Significant investments in new technologies,
        production capacity, and global expansion might impact the net profit
        margin in the short term. Tesla’s net profit margin has shown some
        stability but can fluctuate based on various factors, including changes
        in revenue, production costs, and market conditions.
      </p>
      <img src="NetIncomeMargin.jpg" alt="Net Income Margin" />
      <p>
      As we analyse the change in Net income from time to time, we are able to
        note a difference which appears in a way that indicates there’s
        fluctuation from time to time. The following explains the change in net
        income and how it influences the company quarterly.
      </p>
      <ul>
        <li>
        <strong>Q3 2023 - Q4 2023:</strong> Tesla experienced approximately
          9,5% increase which is relevantly a growth in business which was
          influenced by continued growth in deliveries, strong performance in
          energy products and cost control measures contributing to higher net
          income.
          </li>
        <li>
        <strong>Q4 2023 - Q1 2024:</strong> There was percentage change of 39%
          decrease due to increased competition. This was also caused by cost
          management and market conditions where there is regulatory changes and
          macroeconomic factors that influence sales and profitability.
        </li>
        <li>
        <strong>Q1 2024 - Q2 2024:</strong> Analyzing carefully, we see a 3,6%
          increase that was caused by strategic investments and operational
          efficiencies. Improvements in manufacturing efficiency contributed to
          higher net income. There were also new model launces and production
          adjustments whereby potential costs were associated with expansion and
          R$D.
        </li>
      </ul>
      <p>
      <u><strong>Influences on quarterly changes</strong></u>
      </p>
      <ul>
        <li>
        <strong>Production and delivery volumes</strong> - Higher production
          volumes and successful deliveries of popular models like the Model 3,
          Model Y, Model S, and Model X drive revenue growth which lead to
          growth in net income.
        </li>
        <li>
        <strong>Cost management</strong> - Tesla’s ability to manage
          production costs, including raw materials, labour, and overheads, is
          critical for profitability. Innovations in manufacturing processes,
          such as the Gigafactories and new battery technologies, help reduce
          costs.
        </li>
        <li>
        <strong>Market conditions</strong> - Macroeconomic factors such as
          inflation, interest rates, and economic downturns can impact consumer
          spending and vehicle demand, affecting quarterly net income.
        </li>
        <li>
        <strong>Operational efficiency</strong> - Tesla’s advancements in
          manufacturing technology, such as automation and improved production
          techniques, contribute to higher operational efficiency. Efficient
          production processes lower per-unit costs and boost net income.
        </li>
        <li>
        <strong>Strategic investments</strong> - Capital expenditures on new
          factories (e.g., Gigafactories) and global market expansion drive
          future growth but can increase short-term costs and impact net income.
        </li>
        <li>
        <strong>Strong performance</strong> - High demand for Tesla’s models
          and strong sales performance positively affect revenue and net income.
          Successful product launches and market acceptance lead to increased
          deliveries and financial gains.
        </li>
      </ul>
      <p>
      Tesla's net income changes reflect a complex interplay of production
        capabilities, market dynamics, cost management, and strategic
        investments. Each quarter’s performance can be influenced by both
        internal and external factors, impacting overall financial results.
      </p>
    </div>
  );
};

export default Profit;
