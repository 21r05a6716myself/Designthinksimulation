import React, { useState } from 'react';
import './DataSection.css';  // Importing a separate CSS file for styling

const DataSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleImageClick = (imageName) => {
    setExpanded(expanded === imageName ? null : imageName);
  };

  return (
    <section className="data-section">
      <h2 class = "da">Data Section</h2>
      <div className="data-card" onClick={() => handleImageClick('production')}>
        <p>📊 Production & Sales</p>
        <img
          src= "https://static.vecteezy.com/system/resources/previews/023/372/997/large_2x/world-map-continents-ai-generated-photo.jpeg"
          alt="Production Map"
          className={`data-image ${expanded === 'production' ? 'expanded' : ''}`}
        />
        {expanded === 'production' && (
          <div className="image-overlay">
            <p>Production map details...</p>
          </div>
        )}
      </div>
      <div className="data-card" onClick={() => handleImageClick('sales')}>
        <p>📉 Sales Trends</p>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP._u6UcO5UpZ31KOf7mkFl_wHaHa&pid=Api&P=0&h=180"
          alt="Sales Chart"
          className={`data-image ${expanded === 'sales' ? 'expanded' : ''}`}
        />
        {expanded === 'sales' && (
          <div className="image-overlay">
            <p>Sales trends data and insights...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataSection;

