import React from 'react';
import CancelMeetingButton from './CancelMeetingBtn';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';


function AvailableRooms() {
  const rooms = [
    { id: 1, name: 'Grupperum #1', time: 'Kl. 10:00-11:00' },
    { id: 2, name: 'Grupperum #2', time: 'Kl. 11:00-12:00' },
    { id: 3, name: 'Grupperum #3', time: 'Kl. 13:00-14:00' },
    { id: 4, name: 'Grupperum #4', time: 'Kl. 15:00-16:00' },
  ];

  const handleBooking = (roomName) => {
    alert(`Booking for ${roomName} initiated!`);
  };

  return (
    <div style={styles.container}>
        <div style={styles.ledigeCard}>
        <Title style={styles.heading} order={1}>Ledige lokaler i dag: </Title>
      <div style={styles.cardContainer}>
        {rooms.map((room) => (
          <div key={room.id} style={styles.roomCard}>
            <div style={styles.roomInfo}>
              <p style={styles.roomName}>{room.name}</p>
              <p style={styles.roomTime}>{room.time}</p>
            </div>
            <Button onClick={() => handleBooking(room.name)} variant="filled" color="indigo" size="sm" radius="xl">BOOK</Button>
     
          </div>
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
    textAlign: 'center',
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
    fontSize: '24px',
    color: '#364FC7',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
