import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import BDClickable from './BDClickable';
import LokalerTid from './LokalerTid';
import { DatePickerInput } from '@mantine/dates';

export default function Lokaler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '50px',
      marginTop: '30px',
    },
    leftSection: {
      flex: 1,
      backgroundColor: 'White',
      border: '1px solid lightgrey',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
    },
    rightSection: {
      flex: 1,
      backgroundColor: 'White',
      border: '1px solid lightgrey',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
      width: '617px',
    },
  };

  const Lokaleliste = [
    { Room_name: 'Mødelokale 1' },
    { Room_name: 'Mødelokale 2' },
    { Room_name: 'Mødelokale 3' },
    { Room_name: 'Mødelokale 4' },
    { Room_name: 'Mødelokale 5' },
  ];

  const handleRoomSelect = (room, date) => {
    setSelectedRoom(room);
    setSelectedDate(date);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <Title order={2} style={{ color: '#4C6EF5' }}>
          Vælg dato og lokale
        </Title>

        <DatePickerInput
          label="Dato"
          placeholder="Vælg dato"
          value={selectedDate}
          onChange={setSelectedDate}
          valueFormat="DD-MM-YYYY"
          style={{ width: '100%' }}
        />

        <Text style={{ marginTop: '20px', color: '#4C6EF5' }}>
          Valgt dato: {selectedDate ? selectedDate.toLocaleDateString() : 'Ingen valgt'}
        </Text>
        <div>
          {Lokaleliste.map((room, index) => (
            <BDClickable
              key={index}
              room={room}
              selectedDate={selectedDate}
              onClick={handleRoomSelect}
            />
          ))}
        </div>
      </div>

      <div style={styles.rightSection}>
        <LokalerTid
          selectedRoom={selectedRoom}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </div>
    </div>
  );
}
