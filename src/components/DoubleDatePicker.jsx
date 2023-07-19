import React from "react";
import Calendar from "./CustomDatePicker";
import { useState } from "react";
import { useEffect } from "react";

const DoubleDatePicker = () => {
  // for first calendar
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [activeMonth1, setActiveMonth1] = useState(0);

  // for second calendar
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [activeMonth2, setActiveMonth2] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth(); // Adding 1 to get 1-based month
    const day = currentDate.getDate();
    setActiveMonth1(month);
    setActiveMonth2(month);
    setSelectedDate2(day);
    setSelectedDate1(day);
  }, []);

  // For first calendar
  const handleDateClick1 = (day) => {
    setSelectedDate1(day);
  };

  const handlePrevMonth1 = () => {
    if (activeMonth1 > 0) {
      setActiveMonth1((prev) => prev - 1);
    }
  };

  const handleNextMonth1 = () => {
    if (activeMonth1 < 11) {
      setActiveMonth1((prev) => prev + 1);
    }
  };

  // For second calendar
  const handleDateClick2 = (day) => {
    setSelectedDate2(day);
  };

  const handlePrevMonth2 = () => {
    if (activeMonth2 > 0) {
      setActiveMonth2((prev) => prev - 1);
    }
  };

  const handleNextMonth2 = () => {
    if (activeMonth2 < 11) {
      setActiveMonth2((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "max-content",
              backgroundColor: "orange",
              padding: "10px 20px",
              borderRadius: "25px",
            }}
          >
            From :
          </p>
          <Calendar
            handleDateClick={handleDateClick1}
            activeMonth={activeMonth1}
            handleNextMonth={handleNextMonth1}
            handlePrevMonth={handlePrevMonth1}
            selectedDate={selectedDate1}
            isDoubleDatePicker={true}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "max-content",
              backgroundColor: "orange",
              padding: "10px 20px",
              borderRadius: "25px",
            }}
          >
            To :
          </p>
          <Calendar
            handleDateClick={handleDateClick2}
            activeMonth={activeMonth2}
            handleNextMonth={handleNextMonth2}
            handlePrevMonth={handlePrevMonth2}
            selectedDate={selectedDate2}
            isDoubleDatePicker={true}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          marginTop: "-40px",
        }}
      >
        <button
          style={{
            backgroundColor: "orange",
            width: "80%",
            border: "none",
            padding: "10px 13px",
            borderRadius: "5px",
            fontSize: "18px",
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DoubleDatePicker;
