import React, { useState } from 'react';
import '../App.css';

const roomNameLabelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#364FC7",
  marginBottom: "5px",
  marginTop: "0px",
};

const roomLabelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
  margin: "0px",
};

const dateStyle = {
  fontSize: "12px",
  color: "#555",
  marginTop: "10px",
  textAlign: "right",
};

export default function BDClickable({ room, children, selectedDate }) {
  const [isClicked, setIsClicked] = useState(false);

  // Helper function to format a date to DD/MM/YYYY
  const formatDate = (date) => {
    if (!date) return 'Ingen valgt'; // Handle missing value
    return date.toLocaleDateString('da-DK');
  };

  return (
    <div
      className={`roomItemsStyle ${isClicked ? 'clicked' : ''}`} // Dynamically add 'clicked' class
      onClick={() => setIsClicked(!isClicked)} // Toggle clicked state on click
    >
      <div>
        <p style={roomNameLabelStyle}>
          <span>{room.Room_name}</span>
        </p>
        <p style={roomLabelStyle}>
          <span>{formatDate(selectedDate)}</span>
        </p>
      </div>
      {children}
    </div>
  );
}
