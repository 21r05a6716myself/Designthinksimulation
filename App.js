import React from 'react';
import './App.css';
import DataSection from './components/DataSection';
import KeyInsights from './components/KeyInsights';
import ProblemStatement from './components/ProblemStatement';
import CommunicationDashboard from './components/CommunicationDashboard';
import DataReview from './components/DataReview';

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="me">Design Thinking Simulation</h1>
      </header>
       <section className="intro-section">
       <div class="cont">
  <h2>Welcome to the Design Thinking Simulation</h2>
  <p>This simulation helps you master the "Define" phase of design thinking. Below is an overview of the features available:</p>
  <ul>
    <li>
      <i class="fas fa-chart-line"></i>
      <strong>DataSection:</strong> View essential background information, such as production data, sales trends, and customer feedback.
    </li>
    <li>
      <i class="fas fa-lightbulb"></i>
      <strong>KeyInsights:</strong> Highlight and select actionable insights from the provided data to identify significant patterns.
    </li>
    <li>
      <i class="fas fa-pencil-alt"></i>
      <strong>ProblemStatement:</strong> Write and refine your problem statement with feedback to ensure clarity, focus, and relevance.
    </li>
    <li>
      <i class="fas fa-comments"></i>
      <strong>CommunicationDashboard:</strong> Collaborate effectively using live chat, notifications, and a feedback system.
    </li>
    <li>
      <i class="fas fa-search"></i>
      <strong>DataReview:</strong> Analyze data using filters, tables, and visualizations to uncover trends and insights.
    </li>
  </ul>
  <p>Use these features to explore data, define problems effectively, and engage with the design thinking process interactively.</p>
  
</div>

        </section>
      <main className="main-content">
        <DataSection />
        <KeyInsights />
        <ProblemStatement />
        <CommunicationDashboard />
        <DataReview />
      </main>
    </div>
  );
}

export default App;
