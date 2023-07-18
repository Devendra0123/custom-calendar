import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../components/CustomDatePicker";

const Home = () => {
  return (
    <div>
      <p style={{
        fontSize: "30px",
        textDecoration: "underline",
      }}>Custom Calendar</p>
      <Calendar />
    </div>
  );
};

export default Home;
