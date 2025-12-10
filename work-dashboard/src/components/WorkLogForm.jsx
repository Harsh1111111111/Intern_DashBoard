// src/components/WorkLogForm.jsx
import React, { useState } from 'react';

const WorkLogForm = ({ onLogSubmit }) => {
  const [date, setDate] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [hours, setHours] = useState('1');

  // --- Date Logic: Calculate Current Month Constraints ---
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  
  // First day of current month (e.g., 2023-10-01)
  const minDate = `${year}-${month}-01`;
  // Last day of current month
  const lastDay = new Date(year, today.getMonth() + 1, 0).getDate();
  const maxDate = `${year}-${month}-${lastDay}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass the data up to the parent component
    onLogSubmit({ date, workDescription, hours });

    // Reset fields (keeping date filled is usually better UX, but we can clear it)
    setWorkDescription('');
    setHours('1');
  };

  return (
    <div style={styles.container}>
      <h3>Add New Entry</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <label>
          <strong>Date (Current Month):</strong>
          <input 
            type="date" 
            value={date} 
            min={minDate} 
            max={maxDate}
            onChange={(e) => setDate(e.target.value)} 
            required 
            style={styles.input}
          />
        </label>

        <label>
          <strong>Work Description:</strong>
          <input 
            type="text" 
            placeholder="e.g. Fixed navigation bug"
            value={workDescription} 
            onChange={(e) => setWorkDescription(e.target.value)} 
            required 
            style={styles.input}
          />
        </label>

        <label>
          <strong>Hours:</strong>
          <select 
            value={hours} 
            onChange={(e) => setHours(e.target.value)}
            style={styles.input}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(h => (
              <option key={h} value={h}>{h} hr{h > 1 ? 's' : ''}</option>
            ))}
          </select>
        </label>

        <button type="submit" style={styles.button}>Submit Log</button>
      </form>
    </div>
  );
};

// Simple internal styles object
const styles = {
  container: { border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' },
  button: { padding: '10px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default WorkLogForm;