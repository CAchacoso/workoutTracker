import React, { useState, useEffect } from 'react';
import WeekCalendar from './components/WeekCalendar';
import './index.css';

function App() {
  const [weeklyPlan, setWeeklyPlan] = useState({
    Sunday: [], Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [],
  });

  const [darkMode, setDarkMode] = useState(false);

  // Sync body class with darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const assignWorkoutToDay = (day, workout) => {
    setWeeklyPlan(prev => ({ ...prev, [day]: [...prev[day], workout] }));
  };

  const deleteWorkoutFromDay = (day, index) => {
    setWeeklyPlan(prev => ({ ...prev, [day]: prev[day].filter((_, i) => i !== index) }));
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Weekly Workout Planner</h1>
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <WeekCalendar
        weeklyPlan={weeklyPlan}
        assignWorkoutToDay={assignWorkoutToDay}
        deleteWorkoutFromDay={deleteWorkoutFromDay}
      />
    </div>
  );
}

export default App;