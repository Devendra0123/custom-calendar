import React, { useState } from 'react';

const Calendar = () => {
  const year = 2023; // Change to the desired year

  const [selectedDate, setSelectedDate] = useState(null);

  const getMonthName = (month) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
  };

  const getDayName = (day) => {
    const dayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return dayNames[day];
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const CalendarCell = ({ day, isCurrentDate }) => {
    const cellClass = isCurrentDate ? "selected" : "";
    return (
      <td
      style={{
        padding: "5px"
      }}
        className={cellClass}
        onClick={() => handleDateClick(day)}
      >
        {day}
      </td>
    );
  };

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    let day = 1;
    const rows = [];

    for (let i = 0; i < 6; i++) {
      const cells = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cells.push(<td key={`cell-${i}-${j}`}></td>);
        } else if (day > numDays) {
          cells.push(<td key={`cell-${i}-${j}`}></td>);
        } else {
          const isCurrentDate = day === selectedDate;
          cells.push(
            <CalendarCell
              key={`cell-${i}-${j}`}
              day={day}
              isCurrentDate={isCurrentDate}
            />
          );
          day++;
        }
      }

      rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }

    return (
      <div className='date-by-month'>
        <h2>{getMonthName(month)} {year}</h2>
        <table className='date-table'>
          <thead>
            <tr>
              {Array.from({ length: 7 }).map((_, index) => (
                <th key={`header-${index}`} className='table-head'>
                  {getDayName(index).substring(0, 3)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='calendar-div'>
      {Array.from({ length: 12 }).map((_, month) =>
        generateCalendar(year, month)
      )}
    </div>
  );
};

export default Calendar;
