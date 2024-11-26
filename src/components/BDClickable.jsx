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

export default function BDClickable({ room, children }) {
  const [isClicked, setIsClicked] = useState(false);

  // Helper function to format date and time to DD/MM & HH:MM
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
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
          <span>
            {formatDateTime(room.Start_time)} - {formatDateTime(room.End_time)}
          </span>
        </p>
      </div>
      {children}
    </div>
  );
}
