import React from 'react';

function WorkoutItem({ workout, deleteWorkout }) {
  const typeClass = ['Cardio', 'Strength', 'Flexibility'].includes(workout.type) ? workout.type : 'Default';

  return (
    <div className="workout-item">
      <div>
        <span className={`workout-type ${typeClass}`}>{workout.type}</span>
        <p>{workout.duration}</p>
        {workout.notes && <p className="workout-notes">{workout.notes}</p>}
        <p className="workout-date">{workout.date}</p>
      </div>
      <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
    </div>
  );
}

export default WorkoutItem;