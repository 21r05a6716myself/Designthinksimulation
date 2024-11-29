import React, { useState } from 'react';

const ProblemStatement = () => {
  const [statement, setStatement] = useState('');
  const [feedback, setFeedback] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleFeedback = () => {
    if (statement.length > 20) {
      setFeedback('✅ Problem statement is clear and actionable!');
    } else {
      setFeedback('❗ Please elaborate on your problem statement.');
    }
  };

  const handleChange = (e) => {
    const newStatement = e.target.value;
    setStatement(newStatement);
    setWordCount(newStatement.split(/\s+/).filter(Boolean).length);
    setCharCount(newStatement.length);
  };

  const handleClear = () => {
    setStatement('');
    setFeedback('');
    setWordCount(0);
    setCharCount(0);
  };

  return (
    <section className="problem-section">
      <h2 class = "shivi">Problem Statement</h2>
      
      <textarea
        placeholder="Write your problem statement here..."
        value={statement}
        onChange={handleChange}
        className="textarea"
      ></textarea>
      
      <div className="controls">
        <button onClick={handleFeedback} className="submit-button">Submit</button>
        <button onClick={handleClear} className="clear-button">Clear</button>
      </div>

      <div className="feedback">
        <p>{feedback}</p>
      </div>

      <div className="word-char-count">
        <p class = "wor">Words: {wordCount}</p>
        <p class = "wor">Characters: {charCount}</p>
      </div>

      {/* CSS for styling */}
      <style jsx>{`
        .problem-section {
          padding: 50px;
          max-width: 800px;
          margin: 10 auto;
          background-image: url('https://tse4.mm.bing.net/th?id=OIP.NWHEtWSW9TCQhKlnHwoe9AHaEK&pid=Api&P=0&h=180'); /* Add your background image URL here */
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          border-radius: 20px;
          box-shadow: 0 9px 8px rgba(0, 0, 0, 0.1);
          color: #fff; /* Adjust text color for readability */
        }


        .shivi{
        color: #fff;
        }
        h2 {
          text-align: center;
          color: #333;
        }

        .textarea {
          width: 100%;
          height: 150px;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          resize: vertical;
          margin-bottom: 15px;
          transition: border-color 0.3s ease-in-out;
        }

        .textarea:focus {
          border-color: #4CAF50;
          outline: none;
        }

        .controls {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 10px;
        }

        .submit-button, .clear-button {
          padding: 10px 20px;
          font-size: 14px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        .submit-button {
          background-color: #4CAF50;
          color: white;
        }

        .clear-button {
          background-color: #FF5733;
          color: white;
        }

        .submit-button:hover {
          background-color: #45a049;
        }

        .wor{
        color : #fff;
        }

        .clear-button:hover {
          background-color: #e74c3c;
        }

        .feedback {
          margin: 10px 0;
          font-size: 16px;
          text-align: center;
        }

        .feedback p {
          font-weight: bold;
        }

        .feedback p {
          color: ${feedback.startsWith('✅') ? '#4CAF50' : '#FF5733'};
        }

        .word-char-count {
          text-align: center;
          color: #555;
        }

        .word-char-count p {
          margin: 5px 0;
        }
      `}</style>
    </section>
  );
};

export default ProblemStatement;
