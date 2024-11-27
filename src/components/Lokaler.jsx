import React, { useState } from 'react';
import { Title, Text } from '@mantine/core';
import BDClickable from './BDClickable';
import LokalerTid from './LokalerTid';
import { DatePicker } from '@mantine/dates';




export default function Lokaler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const styles = {
    container: {
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
  const Lokaleliste = [
    { Room_name: 'Mødelokale 1' },
    { Room_name: 'Mødelokale 2' },
    { Room_name: 'Mødelokale 3' },
    { Room_name: 'Mødelokale 4' },
    { Room_name: 'Mødelokale 5' },
  ];

  

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div style={styles.container}>
      <Title order={2} style={{ color: '#4C6EF5' }}>Vælg dato og lokale</Title>
      {/* //Benytter os af date picker inde fra mantine, med en "onChange={setSelectedDate}" funktion, for at kunne kommunikere med vores Clickable */}
      <DatePicker
        label="Dato"
        placeholder="Velg dato"
        valueFormat="DD-MM-YYYY"
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <Text style={{ marginTop: '20px', color: '#4C6EF5' }}>
        Valgt dato: {selectedDate ? selectedDate.toLocaleDateString() : 'Ingen valgt'}
      </Text>
      <div style={styles.containerLokaler}>
        {/* benytter vores lokaleliste.map for at vise lokalerne i korrekt format */}
       {Lokaleliste.map((room, index) => (
          <BDClickable
             key={index}
            room={room}
            selectedDate={selectedDate} // passere selected date til BDClickable
            onClick={() => handleRoomSelect(room)}
          />
  ))}
</div>
      {selectedRoom && selectedDate && (
        <LokalerTid selectedRoom={selectedRoom} selectedDate={selectedDate} />
      )}
    </div>
  );
}
