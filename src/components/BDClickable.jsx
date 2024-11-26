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
    if (!dateTime) return 'Ugyldig dato'; // Håndter manglende værdi
    const date = new Date(dateTime);
    if (isNaN(date)) return 'Ugyldig dato'; // Håndter ugyldigt format
    return date.toLocaleString('da-DK', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
  
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
            {formatDateTime(room.Start_time)} 
          </span>
        </p>
      </div>
      {children}
    </div>
  );
}
