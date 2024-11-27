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

export default function BDClickable({ room, children, selectedDate, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  // Vi formaterer datoen til dansk
  const formatDate = (date) => {
    if (!date) return 'Ingen valgt'; // Hvis ingen dato er valgt
    return date.toLocaleDateString('da-DK');
  };

  // Håndter klik og opdater "clicked" status samt send info til forælderen
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle isClicked for at ændre udseendet
    if (onClick) {
      onClick(room, selectedDate); // Kalder callback med room og selectedDate
    }
  };

  return (
    <div
      className={`roomItemsStyle ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
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
