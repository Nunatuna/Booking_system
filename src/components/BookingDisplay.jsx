import React from 'react'
// BRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPTBRUGES IKKE HJÆLP AAAH SÅ HJÆLP MIG DOG GPT

const roomItemsStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1 1 calc(100% - 30px)",
    padding: "12px 20px",
    border: "1px solid #364FC7",
    borderRadius: "32px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
};


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

export default function BookingDisplay({ room, children }) {

     // Hjælpe funktion to at definere dat og tid i dansk  GPT
     const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleString('da-DK', { 
          day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
        });
      };

  return (
    <p style={roomItemsStyle}>
        <div>
            <p style={roomNameLabelStyle}><span >{room.Room_name}</span></p>
            <p style={roomLabelStyle}><span>{formatDateTime(room.Start_time)} - {formatDateTime(room.End_time)}</span></p>
        </div>
        {children}
    </p>
  )
}
