import css from "../Date/Date.module.css";
import "react-datetime/css/react-datetime.css";

import Datetime from "react-datetime";
import moment from "moment";

import React, { useState, useEffect } from "react";

const Date = ({ name }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Set the default date to the current date
    setSelectedDate(moment().toDate());
  }, []); // Run this effect only once on component mount

  const handleDateChange = (date) => {
    // Handle the selected date
    setSelectedDate(date);
  };

  const inputStyle = {
    fontFamily: "Circe",
    fontSize: "18px",
    lineHeight: "1.6",
  };

  return (
    <div>
      <div className={css.dateBox}>
        <Datetime
          dateFormat="DD-MM-YYYY"
          timeFormat={false}
          value={selectedDate}
          onChange={handleDateChange}
          inputProps={{
            placeholder: "Select Date and Time",
            style: inputStyle,
            name: "date",
          }}
          closeOnSelect
          className={css.dateInput}
        />
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={css.calendarIcon}
        >
          <path
            d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18Z"
            fill="#4A56E2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Date;
