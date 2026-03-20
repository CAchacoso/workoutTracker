import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function DayModal({ day, closeModal, weeklyPlan, assignWorkoutToDay, deleteWorkoutFromDay }) {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddWorkout = () => {
    if (!type || !duration) return;
    assignWorkoutToDay(day, { id: uuidv4(), type, duration });
    setType('');
    setDuration('');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{day} Workouts</h2>
        <div className="existing-workouts">
          {weeklyPlan[day].map((w, idx) => (
            <div key={w.id} className={`workout-type ${w.type}`}>
              {w.type} - {w.duration}
              <button className="delete-btn" onClick={() => deleteWorkoutFromDay(day, idx)}>×</button>
            </div>
          ))}
        </div>

        <div className="add-workout-form">
          <input
            type="text"
            placeholder="Workout Type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
          <input
            type="text"
            placeholder="Duration / Sets"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          />
          <button onClick={handleAddWorkout}>Add</button>
        </div>

        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default DayModal;