import React, { useEffect } from "react";
import Calendar from "../components/CustomDatePicker";
import DoubleDatePicker from "../components/DoubleDatePicker";
import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeMonth, setActiveMonth] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth(); // Adding 1 to get 1-based month
    const day = currentDate.getDate();
    setActiveMonth(month);
    setSelectedDate(day);
  }, []);

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handlePrevMonth = () => {
    if (activeMonth > 0) {
      setActiveMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (activeMonth < 11) {
      setActiveMonth((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div>
        <p
          style={{
            fontSize: "30px",
            textDecoration: "underline",
          }}
        >
          Custom Calendar
        </p>
        <Calendar
          handleDateClick={handleDateClick}
          activeMonth={activeMonth}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
          selectedDate={selectedDate}
          isDoubleDatePicker={false}
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            textDecoration: "underline",
          }}
        >
          Double Date Selector
        </p>
       <DoubleDatePicker />
      </div>
    </div>
  );
};

export default Home;
