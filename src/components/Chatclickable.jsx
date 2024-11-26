import React from 'react';

const roomItemsStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 20px',
  border: '1px solid #364FC7',
  borderRadius: '32px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '15px',
  cursor: 'pointer', // Makes the element clickable
  transition: 'background-color 0.2s ease, transform 0.2s ease', // Smooth hover effect
};

const roomItemsHoverStyle = {
  backgroundColor: '#EDF2FF', // Light blue on hover
  transform: 'scale(1.02)', // Slight zoom effect
};

const roomNameLabelStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#364FC7',
  marginBottom: '5px',
  marginTop: '0px',
};

const roomLabelStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0px',
};

export default function BDClickable({ room, children, onClick }) {
  // State to manage hover effect
  const [isHovered, setIsHovered] = React.useState(false);

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
      style={{
        ...roomItemsStyle,
        ...(isHovered ? roomItemsHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick} // Triggered when the item is clicked
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
