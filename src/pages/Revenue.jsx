// src/pages/Revenue.jsx
import React from 'react';
import '../index.css';

const Revenue = () => {
  return (
    <div className="tab-content">
      <h1>REVENUE</h1>
      <p>
        Revenue is a crucial component of financial statements, as it reflects a
        company's ability to cover its costs. It also indicates consumer
        interest in Tesla's products and services.
      </p>
      <p>$ in millions</p>
      <table border="1">
        <tr>
          <th></th>
          <th>Q1 2023</th>
          <th>Q2 2023</th>
          <th>Q3 2023</th>
          <th>Q4 2023</th>
          <th>2023 FY</th>
          <th>Q1 2024</th>
          <th>Q2 2024</th>
        </tr>
        <tr>
          <td>Revenue generated</td>
          <td>$23,329</td>
          <td>$24,927</td>
          <td>$23,350</td>
          <td>$25,167</td>
          <td>$96,773</td>
          <td>$21,301</td>
          <td>$25,500</td>
        </tr>
        <tr>
          <td>Quarter on Quarter Change</td>
          <td>-4%</td>
          <td>+7%</td>
          <td>-6%</td>
          <td>+8%</td>
          <td></td>
          <td>-15%</td>
          <td>+20%</td>
        </tr>
        <tr>
          <td>Year on Year Change</td>
          <td>+24%</td>
          <td>+47%</td>
          <td>+9%</td>
          <td>+3%</td>
          <td></td>
          <td>-9%</td>
          <td>+2%</td>
        </tr>
      </table>
      <h2>Q1</h2>
      <p>
        In the first quarter, Tesla generated $21,301 million in revenue,
        reflecting a 15% decrease from the previous quarter's performance.
        However, compared to the first quarter of the previous financial year,
        the revenue decline was only 9%. This reduction was primarily due to a
        lower average selling price for vehicles, a shift from a positive free
        cash flow of $2 million to a negative $2.5 million, a decrease in
        vehicle deliveries, and a negative foreign exchange impact of $0.2
        billion. While Tesla experienced growth in other areas of the business
        and higher revenue recognition from the Full-Self-Driving option, these
        gains were insufficient to offset the losses. This quarter marked
        Tesla's steepest year-over-year decline since 2012.
      </p>

      <h2>Q2</h2>
      <p>
        In the second quarter, Tesla reported revenue of $25,500 million,
        representing a 20% increase from the first quarter and a 2% rise
        compared to the second quarter of the previous financial year. Despite a
        7% year-over-year decrease in total automotive revenues, the company saw
        a doubling in revenue from energy generation and storage, along with a
        21% increase in services and other revenue, which helped offset the
        decline. These increases were driven by growth in the Energy Generation
        and Storage segment, increased deliveries of the Cybertruck, higher
        regulatory credit revenue, and growth in Services and Other revenue.
        However, declines were attributed to a reduced average selling price
        (ASP) for S3XY vehicles, a drop in S3XY vehicle deliveries, and a
        heightened negative foreign exchange impact of $0.3 billion.
      </p>
    </div>
  );
};

export default Revenue;
