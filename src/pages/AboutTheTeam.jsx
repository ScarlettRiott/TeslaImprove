// src/pages/AboutTheTeam.jsx
import React from 'react';
import '../index.css';

const AboutTheTeam = () => {
  return (
    <div className="tab-content active-tab">
      <table border="1" className="table-center">
        <tr>
          <th>Name</th>
          <td>Michael Owens</td>
          <td>Nhlayiseko Nobela</td>
          <td>Wallenstein Louw</td>
          <td>Luyanda Ntuli</td>
          <td>Phatiwe Ntobela</td>
          <td>Mahlatse Naka</td>
        </tr>
        <tr>
          <th>Student Number</th>
          <td>u23601231</td>
          <td>u23733382</td>
          <td>u04503342</td>
          <td>u23590191</td>
          <td>u23806852</td>
          <td>u23740150</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>u23601231@tuks.co.za</td>
          <td>u23733382@tuks.co.za</td>
          <td>u04503342@tuks.co.za</td>
          <td>u23590191@tuks.co.za</td>
          <td>u23806852@tuks.co.za</td>
          <td>u23740150@tuks.co.za</td>
        </tr>
        <tr>
          <th>Worked on</th>
          <td>Gross Profit</td>
          <td>Revenue</td>
          <td>Cost Of Sales</td>
          <td>Environmental Impact</td>
          <td>Cost Of Sales</td>
          <td>Net Income</td>
        </tr>
      </table>
    </div>
  );
};

export default AboutTheTeam;
