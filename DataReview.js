
import React, { useState } from 'react';
import './DataReview.css';


function DataReview() {
  const [filter, setFilter] = useState('All');

  // Dummy data
  const data = [
    { id: 1, category: 'Sales', value: 1200 },
    { id: 2, category: 'Marketing', value: 800 },
    { id: 3, category: 'Operations', value: 950 },
  ];

  const filteredData = filter === 'All' ? data : data.filter(item => item.category === filter);

  return (
    <section className="data-review">
      <h2 className="data-review-title">Data Review Section</h2>
      <p className="data-review-description">Analyze and review data insights here.</p>

      {/* Filter Dropdown */}
      <div className="filter">
        <label htmlFor="filter-select">Filter by category: </label>
        <select
          id="filter-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
      </div>

      {/* Table */}
      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder for a chart */}
      <div className="data-chart">
        <p>Chart goes here (integrate Chart.js or other libraries)</p>
      </div>
    </section>
  );
}

export default DataReview;
