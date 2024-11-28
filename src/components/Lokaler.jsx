import React, { useState } from 'react';
import { Title, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import BDClickable from './BDClickable';
import LokalerTid from './LokalerTid';
import { DatePickerInput } from '@mantine/dates';
import { getSupabaseClient } from '../supabase/getSupabaseClient';
import { space } from 'postcss/lib/list';
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router


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

  const supabase = getSupabaseClient();  // Initialiser Supabase-klienten
  console.log(supabase);
  const handleSubmit = async () => {
    if (!selectedDate || !selectedRoom || !selectedSlot) {
      alert('Alle oplysninger skal vælges!');
      return;
    }
  
    // Sørg for at selectedDate er et Date objekt
    const date = new Date(selectedDate); // Tjek om selectedDate er et gyldigt Date-objekt
    if (isNaN(date)) {
      alert('Ugyldig dato!');
      return;
    }
  
    // Split selectedSlot på ' - ' for at få start- og sluttid
    const [startTime, endTime] = selectedSlot.split(' - ');
  
    // Sørg for at startTime og endTime er gyldige tidsstrenge
    const [startHour, startMinute] = startTime.split(':');
    const [endHour, endMinute] = endTime.split(':');
  
    // Opret en ISO-dato med kun dato og tid
    const formattedDate = date.toISOString().split('T')[0]; // Formaterer datoen som 'YYYY-MM-DD'
    const formattedStartTime = `${startHour}:${startMinute}`; // Tid som 'HH:mm'
    const formattedEndTime = `${endHour}:${endMinute}`; // Tid som 'HH:mm'
  
    const { data, error } = await supabase
      .from('Bookings') // Navnet på din tabel i Supabase
      .insert([
        {
          Dato: formattedDate, // Datoen i 'YYYY-MM-DD'
          Lokale: selectedRoom.Room_name, // Lokale navn
          Tid: formattedStartTime, // Start tid som 'HH:mm'
          isbooked: true, // Sætter lokalet som booket
        },
      ]);
  
    if (error) {
      console.error('Fejl ved indsættelse af data:', error.message);
    } else {
      console.log('Booking oprettet:', data);
      alert('Booking oprettet!');
    }
  };
  
    //modal 
    const [opened, { open, close }] = useDisclosure(false);

    //modal style
    const modalStyles = {
      header: {
        color: '#364FC7',
        marginBottom: '15px',
      },
      container:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      }
    }

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
        {/* Tilføj en knap til at sende dataen */}
        
      <Modal 
        opened={opened} 
        onClose={close} 
        centered
        padding="2rem"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        >
         <Title order={2} style={modalStyles.header}>Er følgende oplysninger korrekte?</Title>
         <Text> <b>Dato:</b> {selectedDate ? selectedDate.toLocaleDateString() : 'Ingen valgt'}</Text>
         <Text> <b>Lokale:</b> {selectedRoom ? selectedRoom.Room_name : 'Ingen valgt'}</Text>
         <Text><b>Tid:</b> {selectedSlot ? selectedSlot : 'Ingen valgt'}</Text>
          <div style={modalStyles.container}>
            <Button variant="filled" color="#748FFC" size="lg" radius="xl" onClick={close}>Fortryd</Button>
            <Link to="/"><Button variant="filled" color="#364FC7" size="lg" radius="xl" onClick={handleSubmit}>Bekræft</Button></Link>
          </div>
      </Modal>
      <Button variant="filled" color="#748FFC" size="lg" radius="xl" onClick={open}>Book</Button>


      </div>
    </div>
  );
}
