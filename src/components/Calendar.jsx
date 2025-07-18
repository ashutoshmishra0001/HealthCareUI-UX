import React, { useState } from 'react';
import dayjs from 'dayjs';

const Calendar = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startDay = currentDate.startOf('month').startOf('week');
  const endDay = currentDate.endOf('month').endOf('week');
  const calendar = [];

  let tempDate = startDay.clone();

  while (tempDate.isBefore(endDay, 'day')) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(tempDate.clone());
      tempDate = tempDate.add(1, 'day');
    }
    calendar.push(week);
  }

  const isSameMonth = (day) => day.month() === currentDate.month();
  const isToday = (day) => day.isSame(dayjs(), 'day');

  const goToPreviousMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const goToNextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6 overflow-x-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <div className="flex justify-between items-center sm:justify-start gap-4">
          <button
            onClick={goToPreviousMonth}
            className="text-blue-600 font-bold text-lg hover:text-blue-800"
          >
            &larr;
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            {currentDate.format('MMMM YYYY')}
          </h2>
          <button
            onClick={goToNextMonth}
            className="text-blue-600 font-bold text-lg hover:text-blue-800"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-semibold text-gray-600">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="py-1">{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mt-1 sm:mt-2 text-center">
        {calendar.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                onClick={() => onSelectDate?.(day.format('YYYY-MM-DD'))}
                className={`py-2 sm:py-3 rounded-lg cursor-pointer text-xs sm:text-sm transition duration-200
                  ${
                    isToday(day)
                      ? 'bg-blue-600 text-white'
                      : isSameMonth(day)
                      ? 'text-gray-800 hover:bg-blue-100'
                      : 'text-gray-400'
                  }`}
              >
                {day.date()}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
