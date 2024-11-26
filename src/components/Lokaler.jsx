import React from 'react'
import { Title, Text } from '@mantine/core';

import BDClickable from './BDClickable';

export default function Lokaler() {
  const styles = {
    container: {
      // height: '700px',
      backgroundColor: 'White',
      border: '1px solid lightgrey',
      padding: '30px',
      width: '500px',
      borderRadius: '15px',
      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)', // Subtle drop shadow
    },
    containerLokaler: {
      height: '450px',
      borderRadius: '20px',
      padding: '30px',
      backgroundColor: '#F5F5F5',
      marginTop: '20px',
    },
  };

  // Dummy room data (til test)
  const roomData = [
    {
      Room_name: 'Mødelokale 1',
      Start_time: '2024-11-26T09:00:00Z',
      End_time: '2024-11-26T10:00:00Z',
    },
    {
      Room_name: 'Mødelokale 2',
      Start_time: '2024-11-26T11:00:00Z',
      End_time: '2024-11-26T12:00:00Z',
    },
    {
      Room_name: 'Mødelokale 3',
      Start_time: '2024-11-26T11:00:00Z',
      End_time: '2024-11-26T12:00:00Z',
    },
    {
      Room_name: 'Mødelokale 4',
      Start_time: '2024-11-26T11:00:00Z',
      End_time: '2024-11-26T12:00:00Z',
    },
    {
      Room_name: 'Mødelokale 5',
      Start_time: '2024-11-26T11:00:00Z',
      End_time: '2024-11-26T12:00:00Z',
    },
  ];

  return (
    <div style={styles.container}>
      <Title order={2} style={{ color: '#4C6EF5' }}>Lokaler</Title>
      <Text style={{ color: '#4C6EF5' }}>Valgt dato:</Text>
      <div style={styles.containerLokaler}>
        {roomData.map((room, index) => (
          <BDClickable key={index} room={room} />
        ))}
      </div>
    </div>
  );
}
