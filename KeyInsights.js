import React, { useState } from 'react';

const KeyInsights = () => {
  const [insights, setInsights] = useState([]);
  const [newInsight, setNewInsight] = useState('');
  const [category, setCategory] = useState('Usability');
  
  // Add a new insight
  const addInsight = () => {
    if (newInsight.trim() === '') return;  // Prevent adding empty insights
    setInsights([...insights, { text: newInsight, category, id: Date.now() }]);
    setNewInsight('');
  };

  // Remove an insight
  const removeInsight = (id) => {
    setInsights(insights.filter(insight => insight.id !== id));
  };

  // Edit an insight
  const editInsight = (id, newText) => {
    setInsights(insights.map(insight =>
      insight.id === id ? { ...insight, text: newText } : insight
    ));
  };

  // Sort insights by category
  const sortInsights = () => {
    setInsights([...insights].sort((a, b) => a.category.localeCompare(b.category)));
  };

  return (
    <section className="insights-section">
      <h2 class = "pink">Key Insights</h2>

      {/* Input for new insight */}
      <div className="input-section">
        <input 
          type="text" 
          value={newInsight} 
          onChange={(e) => setNewInsight(e.target.value)} 
          placeholder="Enter a new insight" 
          className="insight-input"
        />
        <select 
          onChange={(e) => setCategory(e.target.value)} 
          value={category} 
          className="insight-category"
        >
          <option value="Usability">Usability</option>
          <option value="Design">Design</option>
          <option value="Functionality">Functionality</option>
        </select>
        <button onClick={addInsight} className="add-button">Add Insight</button>
      </div>

      {/* Insights List */}
      <ul className="insight-list">
        {insights.map((insight) => (
          <li key={insight.id} className="insight-item">
            <strong>{insight.category}:</strong> {insight.text}
            
            {/* Edit and Remove buttons */}
            <button 
              onClick={() => {
                const updatedText = prompt("Edit Insight:", insight.text);
                if (updatedText) editInsight(insight.id, updatedText);
              }} 
              className="edit-button"
            >
              Edit
            </button>
            <button onClick={() => removeInsight(insight.id)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Sorting button */}
      <button onClick={sortInsights} className="sort-button">
        Sort Insights by Category
      </button>

      {/* CSS for styling */}
      <style jsx>{`
        .insights-section {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
          background-image: url('https://tse2.mm.bing.net/th?id=OIP.TYXgvsHD1NUxOahckiArmwHaE8&pid=Api&P=0&h=180'); /* Add the image URL here */
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          color: #fff; /* Adjust text color for readability */
        }

        h2 {
          text-align: center;
          color: #F8BBD0; /* Adjust color to suit the background */
        }

        .input-section {
          display: flex;
          gap: 10px;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .insight-input, .insight-category {
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 45%;
        }

        .add-button {
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .add-button:hover {
          background-color: #45a049;
        }

        .insight-list {
          list-style: none;
          padding: 0;
        }

        .insight-item {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edit-button, .remove-button {
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
        }

        .edit-button {
          background-color: #007BFF;
          color: white;
        }

        .remove-button {
          background-color: #FF5733;
          color: white;
        }

        .edit-button:hover {
          background-color: #0056b3;
        }

        .remove-button:hover {
          background-color: #ff2d00;
        }

        .sort-button {
          padding: 10px 20px;
          background-color: #FFC107;
          color: white;
          border: none;
          border-radius: 5px;
          display: block;
          margin: 20px auto;
          cursor: pointer;
        }

        .sort-button:hover {
          background-color: #e0a800;
        }

        .pink{
        color : #FFFFFF;
        }
      `}</style>
    </section>
  );
};

export default KeyInsights;
