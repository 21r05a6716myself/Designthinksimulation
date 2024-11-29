import React, { useState } from 'react';
 import './CommunicationDashboard.css'; // Add styles for better UI

function CommunicationDashboard() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { user: 'You', text: inputMessage }]);
      setInputMessage('');
    }
  };

  return (
    <section className="communication-dashboard">
      <h2>Communication Dashboard</h2>
      <p>Monitor communication channels and updates here.</p>

      {/* Live Chat */}
      <div className="chat-section">
        <h3>Live Chat</h3>
        <div className="chat-box">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className={`message ${msg.user === 'You' ? 'self' : 'other'}`}>
                <strong>{msg.user}:</strong> {msg.text}
              </div>
            ))
          ) : (
            <p>No messages yet.</p>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={e => setInputMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="notifications-section">
        <h3>Notifications</h3>
        <ul>
          <li>You have a new task: Review empathy map.</li>
          <li>Congratulations! You've earned a badge for identifying a key insight.</li>
        </ul>
      </div>

      {/* Feedback Mechanism */}
      <div className="feedback-section">
        <h3>Feedback</h3>
        <textarea
          placeholder="Request feedback or leave a comment..."
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
        <button onClick={() => alert('Feedback submitted!')}>Submit Feedback</button>
      </div>
    </section>
  );
}

export default CommunicationDashboard;

