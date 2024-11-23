import React from 'react';
// import CancelMeetingButton from './CancelMeetingBtn';
import { Title } from '@mantine/core';
// import { Button } from '@mantine/core';
import BookingDisplay from './BookingDisplay';
import ConfirmMeetingBtn from './ConfirmMeetingBtn';


function AvailableRooms({rooms}) {
  
  const handleBooking = (roomName) => {
    alert(`Booking for ${roomName} initiated!`);
  };

  return (
    <div style={styles.container}>
        <div style={styles.ledigeCard}>
        <Title style={styles.heading} order={1}>Ledige lokaler i dag: </Title>
      <div style={styles.cardContainer}>
        {rooms.map((room) => (
          <BookingDisplay key={room.id} room={room}>
            <ConfirmMeetingBtn />
          </BookingDisplay>
        ))}
      </div>
    </div>
    </div>
  );
}

const styles = {
  // h1: {
  //   fontSize: '24px',
  //   color: '#2E3A59',
  //   marginBottom: '20px',
  // },
  container: {
    // textAlign: 'center',
    fontFamily: 'Arial, sans-serif',

  },
  ledigeCard: {
    backgroundColor: '#DBE4FF',
    padding: '10%',
    borderRadius: '10px',
    display: 'inline-block',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '531px',
    minHeight: '530px',
  
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#364FC7',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',

  },
  roomCard: {
    // backgroundColor: '#E3F2FD',
    border: '1px solid #3F51B5',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    maxWidth: '400px',
    padding: '10px 20px',
    marginBottom: '15px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  roomInfo: {
    textAlign: 'left',
  },
  roomName: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
    color: '#2E3A59',
  },
  roomTime: {
    fontSize: '14px',
    margin: 0,
    color: '#607D8B',
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#3F51B5',
    color: '#FFFFFF',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
};

export default AvailableRooms;
