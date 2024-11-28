import React, { useState } from 'react';

const buttonStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 20px",
  border: "1px solid #364FC7",
  borderRadius: "32px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px",
  background: "#fff",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#364FC7",
  transition: "background-color 0.3s, color 0.3s",
};

const clickedButtonStyle = {
  ...buttonStyle,
  background: "#364FC7", // Mørkere baggrund
  color: "#fff",         // Lysere tekst
};

const TimeslotGenerator = ({ startHour, endHour, interval, onSlotClick }) => {
  const [selectedSlot, setSelectedSlot] = useState(null); // Holder styr på valgt tidsrum

  const generateTimeslots = () => {
    return Array.from({ length: (endHour - startHour) / interval }, (_, index) => {
      const start = startHour + index * interval;
      const end = start + interval;
      return `${start.toString().padStart(2, '0')}:00 - ${end.toString().padStart(2, '0')}:00`;
    });
  };

  const timeslots = generateTimeslots();

  const handleClick = (slot) => {
    setSelectedSlot(slot); // Opdaterer valgt tidsrum
    if (onSlotClick) {
      onSlotClick(slot); // Kalder callback-funktion, hvis den er angivet
    }
  };

  return (
    <div>
      {timeslots.map((slot, index) => (
        <button
          key={index}
          style={selectedSlot === slot ? clickedButtonStyle : buttonStyle} // Tjekker om knappen er valgt
          onClick={() => handleClick(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  );
};

export default TimeslotGenerator;
