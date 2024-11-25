import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import NavBar from '../components/NavBar';
import { Button, Title, Text, TextInput } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { DateTimePicker } from '@mantine/dates';
import { useState } from 'react';
import { getSupabaseClient } from '../supabase/getSupabaseClient';

export const Route = createLazyFileRoute('/resevere')({
  component: RouteComponent,
});

function RouteComponent() {
  const supabase = getSupabaseClient();
  const [startDate, setStartDate] = useState(null); // Startdato state
  const [endDate, setEndDate] = useState(null); // Slutdato state
  const [roomName, setRoomName] = useState(''); // Room_name state
  const [loading, setLoading] = useState(false); // Loading state for knappen

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      marginTop: '10px',
      height: '700px',
      gap: '20px',
    },
    tid: {
      border: '0.5px solid black',
      width: '75%',
      margin: '0 auto',
      height: '300px',
      borderRadius: '10px',
      padding: '40px',
    },
    input: {
      marginTop: '20px',
      width: '100%',
    },
    button: {
      marginTop: '20px',
    },
  };

  const handleSubmit = async () => {
    if (!roomName || !startDate || !endDate) {
      alert('Alle felter skal udfyldes.');
      return;
    }
  
    try {
      setLoading(true);
  
      // Tjek om der allerede er en booking for det valgte rum og tidsrum
      const { data: existingBooking, error: bookingError } = await supabase
        .from('MeetingRooms')
        .select('*')
        .eq('Room_name', roomName) // Filtrer efter rumnavn
        .eq('Start_time', startDate.toISOString()) // Starttidspunkt skal matche
        .eq('End_time', endDate.toISOString()); // Sluttidspunkt skal matche
  
      if (bookingError) {
        throw bookingError;
      }
  
      if (existingBooking.length > 0) {
        // Hvis booking eksisterer, opdater Isbooked til true
        const { data, error } = await supabase
          .from('MeetingRooms')
          .update({ Isbooked: true }) // Opdater Isbooked til true
          .eq('id', existingBooking[0].id); // Find den specifikke booking ved ID
  
        if (error) {
          throw error;
        }
  
        alert('Reservationen er nu booket!');
      } else {
        // Hvis der ikke er nogen eksisterende booking, opret en ny
        const { data, error } = await supabase.from('MeetingRooms').insert([
          {
            Room_name: roomName, // Navn på rummet
            Start_time: startDate.toISOString(), // Starttid i ISO-format
            End_time: endDate.toISOString(), // Sluttid i ISO-format
            Isbooked: true, // Markér som booket
          },
        ]);
  
        if (error) {
          throw error;
        }
  
        alert('Reservation oprettet!');
      }
  
      // Nulstil formularfelter efter succes
      setRoomName('');
      setStartDate(null);
      setEndDate(null);
    } catch (error) {
      console.error('Fejl ved oprettelse af reservation:', error.message);
      alert('Noget gik galt. Prøv igen.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.tid}>
          <Title order={2}>Opret en reservation</Title>
          <TextInput
            label="Rum Navn"
            placeholder="Indtast navnet på rummet"
            value={roomName}
            onChange={(event) => setRoomName(event.currentTarget.value)}
            style={styles.input}
            withAsterisk
          />
          <DateTimePicker
            placeholder="Vælg starttidspunkt"
            label="Fra tidspunkt"
            value={startDate}
            onChange={setStartDate}
            withAsterisk
            style={styles.input}
          />
          <DateTimePicker
            placeholder="Vælg sluttidspunkt"
            label="Til tidspunkt"
            value={endDate}
            onChange={setEndDate}
            withAsterisk
            minDate={startDate || undefined} // Sluttid kan ikke være før starttid
            style={styles.input}
          />
        </div>
        <Button
          variant="filled"
          color="#748FFC"
          size="lg"
          radius="xl"
          style={styles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Indsender...' : 'Indsend Reservation'}
        </Button>
        <Link to="/calendar">
          <Button variant="light" size="md" radius="md" style={{ marginTop: '10px' }}>
            Tilbage
          </Button>
        </Link>
      </div>
    </>
  );
}
