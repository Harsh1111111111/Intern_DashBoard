# 📊 Intern Dashboard

A simple, efficient React application to track daily work logs. This dashboard allows users to log their tasks, hours spent, and dates, with data persistence handled via the browser's LocalStorage.

* **Date Constraints:** Automatically restricts date selection to the *current month only*.
* **Data Persistence:** Uses `localStorage` so data survives page refreshes.
* **JSON Export:** One-click download of all logs as a `.json` file for backup.
* **Modular Architecture:** Built with separate components (`WorkLogForm`, `LogList`) for scalable development.

* **Frontend Library:** React (v18+)
* **Build Tool:** Vite
* **Styling:** Standard CSS / Inline Styles
* **State Management:** React Hooks (`useState`, `useEffect`)

---

## 🚀 Quick Start

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/Harsh1111111111/Intern_DashBoard.git](https://github.com/Harsh1111111111/Intern_DashBoard.git)
cd Intern_DashBoard
cd work-dashboard

npm install

npm run dev

```

Project Structure
This project follows a component-based architecture:

src/
├── components/
│   ├── WorkLogForm.jsx    # Handles user input & date logic
│   └── LogList.jsx        # Handles data display & JSON export
├── App.jsx                # Main controller (State & Data Flow)
└── main.jsx               # Application entry point


How It Works

  Form Submission:
  
  The user enters data in WorkLogForm.
  
  On submit, the data is passed up to App.jsx.
  
  App.jsx adds a unique ID and Timestamp, then saves it to the logs state.
  
  Data Storage:
  
  Every time the logs state updates, App.jsx saves the new array to localStorage.
  
  On page load, useEffect checks for saved data and restores it.
  
  Exporting:

The "Download JSON" button in LogList converts the JavaScript array into a JSON string and triggers a browser download.
