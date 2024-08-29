// src/pages/EnvironmentalImpact.jsx
import React from 'react';
import '../index.css';

const EnvironmentalImpact = () => {
  return (
    <div className="tab-content">
      <h1>Tesla's Environmental Impact</h1>
      <p>
        Tesla's environmental impact is complex and encompasses both positive
        and negative aspects.
      </p>

      <h2>Positive Environmental Impacts</h2>

      <h3>1. Reduction in Greenhouse Gas Emissions</h3>
      <ul>
        <li>
          <strong>Electric Vehicles (EVs):</strong> Tesla's primary contribution
          to reducing greenhouse gas emissions comes from its electric vehicles.
          Unlike traditional internal combustion engine vehicles, Tesla EVs
          produce zero tailpipe emissions, reducing the carbon footprint
          associated with transportation. Tesla delivered over 1.37 million
          vehicles in 2022, contributing to significant reductions in global
          greenhouse gas emissions. Each Tesla vehicle is estimated to save 4.6
          metric tons of CO2 annually compared to a traditional gasoline car.
        </li>
        <li>
          <strong>Renewable Energy Integration:</strong> Tesla’s vehicles and
          energy products (like solar panels and Powerwall batteries) help
          integrate renewable energy into the grid, further reducing reliance on
          fossil fuels.
        </li>
      </ul>

      <h3>2. Energy Efficiency</h3>
      <ul>
        <li>
          Tesla's vehicles are among the most energy-efficient on the market.
          The Model 3, for example, has one of the highest MPGe (miles per
          gallon equivalent) ratings, meaning it uses less energy to travel the
          same distance compared to other EVs. Tesla's Model 3 has a rating of
          approximately 141 MPGe, making it one of the most energy-efficient
          vehicles available. The energy cost of driving a Model 3 is estimated
          at $0.05 per mile compared to $0.13 per mile for a typical gasoline
          car.
        </li>
      </ul>

      <h3>3. Sustainable Energy Products</h3>
      <ul>
        <li>
          <strong>Solar Energy:</strong> Tesla Solar Roof and solar panels
          enable homeowners and businesses to generate their electricity from
          renewable sources, reducing dependence on fossil fuels. Tesla's energy
          generation and storage division generated $3.91 billion in revenue in
          2022. This includes sales from solar panels, Solar Roofs, and energy
          storage products like Powerwall and Powerpack.
        </li>
        <li>
          <strong>Energy Storage:</strong> Tesla’s Powerwall and Powerpack
          systems store energy, allowing users to balance energy demand and
          supply, particularly during peak usage times, reducing the need for
          additional fossil fuel-based power generation. Tesla deployed 348 MW
          of solar energy and 6.5 GWh of energy storage in 2022, helping reduce
          reliance on fossil fuels.
        </li>
      </ul>

      <h3>4. Battery Recycling</h3>
      <ul>
        <li>
          Tesla is developing processes for recycling batteries to recover
          valuable materials, reducing the environmental impact of battery
          disposal and the need for raw material extraction.
        </li>
      </ul>

      <h2>Negative Environmental Impacts</h2>

      <h3>1. Battery Production</h3>
      <ul>
        <li>
          <strong>Resource Extraction:</strong> The production of lithium-ion
          batteries requires mining raw materials like lithium, cobalt, and
          nickel. Mining these materials can have significant environmental
          impacts, including habitat destruction, water pollution, and carbon
          emissions. The cost of lithium, cobalt, and nickel has risen sharply,
          with lithium prices increasing by over 400%. This impacts the cost
          structure of Tesla's battery production.
        </li>
        <li>
          <strong>Energy-Intensive Manufacturing:</strong> The process of
          manufacturing batteries is energy-intensive and can contribute to
          significant carbon emissions, especially if the energy used is not
          from renewable sources.
        </li>
      </ul>

      <h3>2. End-of-Life Vehicle Disposal</h3>
      <ul>
        <li>
          While Tesla is working on recycling processes, the disposal of EV
          batteries poses environmental challenges due to the hazardous
          materials they contain. Without proper recycling, these batteries can
          contribute to environmental pollution.
        </li>
      </ul>

      <h3>3. Energy Source for Charging</h3>
      <ul>
        <li>
          While Tesla vehicles themselves produce zero emissions, the overall
          environmental benefit depends on the source of electricity used to
          charge them. In regions where electricity is primarily generated from
          fossil fuels, the net reduction in greenhouse gas emissions may be
          less significant. Tesla has installed over 45,000 Superchargers
          globally. The energy used by these chargers varies by region, with
          some areas relying on fossil fuels, which can mitigate the overall
          environmental benefits of driving a Tesla.
        </li>
      </ul>

      <h3>4. Carbon Footprint</h3>
      <ul>
        <li>
          Tesla’s global supply chain and manufacturing processes, particularly
          the operation of Gigafactories, have their own environmental
          footprints, including emissions from transportation and manufacturing
          activities. Tesla’s total operational carbon footprint, including
          manufacturing, was approximately 5.29 million metric tons of CO2e in
          2022. This includes emissions from its factories and supply chain.
        </li>
      </ul>
    </div>
  );
};

export default EnvironmentalImpact;
