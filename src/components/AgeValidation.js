import React, { useState } from "react";

function AgeDatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
  };

  const validateAge = () => {
    if (!selectedDate) {
      return false; // No date selected
    }

    const currentDate = new Date();
    const inputDate = new Date(selectedDate);

    const timeDiff = Math.abs(currentDate.getTime() - inputDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365)); // Calculate age in years

    return age >= 18;
  };

  return (
    <div>
      <label>Date of Birth:</label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />

      {validateAge() ? (
        <p>You are 18 years or older.</p>
      ) : (
        <p>You must be 18 years or older.</p>
      )}
    </div>
  );
}

export default AgeDatePicker;
