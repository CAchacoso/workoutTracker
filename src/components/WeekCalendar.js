import React, { useState } from 'react';
import DayModal from './DayModal';

const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function WeekCalendar({ weeklyPlan, assignWorkoutToDay, deleteWorkoutFromDay }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const openModal = (day) => setSelectedDay(day);
  const closeModal = () => setSelectedDay(null);

  return (
    <div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => {
          const todayIndex = new Date().getDay();
          return (
            <div
              key={day}
              className={`calendar-day ${index === todayIndex ? 'today' : ''}`}
              onClick={() => openModal(day)}
            >
              <strong>{day}</strong>
              <div className="day-workouts">
                {weeklyPlan[day].map((w, idx) => (
                  <div key={idx} className={`workout-type ${w.type}`}>
                    {w.type} - {w.duration}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <DayModal
          day={selectedDay}
          closeModal={closeModal}
          weeklyPlan={weeklyPlan}
          assignWorkoutToDay={assignWorkoutToDay}
          deleteWorkoutFromDay={deleteWorkoutFromDay}
        />
      )}
    </div>
  );
}

export default WeekCalendar;