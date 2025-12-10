// src/App.jsx
import React, { useState, useEffect } from 'react';

//COMPONENTS
import WorkLogForm from './components/WorkLogForm';
import LogList from './components/LogList';

const App = () => {
  // 2. GLOBAL STATE (The "Brain" of the app)
  const [logs, setLogs] = useState([]);

  // 3. LOAD DATA (Runs once on startup)
  useEffect(() => {
    const savedData = localStorage.getItem('workLogs');
    if (savedData) {
      setLogs(JSON.parse(savedData));
    }
  }, []);

  // 4. FUNCTION TO ADD NEW LOG (Passed down to the Form)
  const addLog = (entryData) => {
    // Create the new entry object
    const newEntry = {
      id: Date.now(),
      ...entryData, // Unpacks date, description, hours from the form
      hours: parseInt(entryData.hours),
      timestamp: new Date().toISOString()
    };

    // Update state and save to LocalStorage
    const updatedLogs = [...logs, newEntry];
    setLogs(updatedLogs);
    localStorage.setItem('workLogs', JSON.stringify(updatedLogs));
    
    alert("Work item saved!");
  };

  // 5. THE UI LAYOUT
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Daily Work Dashboard</h1>

      {/* COMPONENT 1: The Input Form */}
      <WorkLogForm onLogSubmit={addLog} />

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eee' }} />

      {/* COMPONENT 2: The Data List */}
      <LogList logs={logs} />
    </div>
  );
};

export default App;