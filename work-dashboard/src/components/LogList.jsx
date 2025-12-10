// src/components/LogList.jsx
import React from 'react';

const LogList = ({ logs }) => {

  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "work_logs.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div style={{ borderTop: '2px solid #eee', paddingTop: '20px' }}>
      <h3>Stored Data (JSON)</h3>
      
      <button onClick={downloadJSON} style={{ marginBottom: '15px', padding: '5px 10px', cursor: 'pointer' }}>
        Download JSON File
      </button>

      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        <pre>{logs.length > 0 ? JSON.stringify(logs, null, 2) : "No entries yet."}</pre>
      </div>
    </div>
  );
};

export default LogList;