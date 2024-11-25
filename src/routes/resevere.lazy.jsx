import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import NavBar from '../components/NavBar';
import { Button, Title, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { DateTimePicker } from '@mantine/dates';
import { useState } from 'react';

export const Route = createLazyFileRoute('/resevere')({
  component: RouteComponent,
});

function RouteComponent() {
  const [startDate, setStartDate] = useState(null); // Startdato state
  const [endDate, setEndDate] = useState(null); // Slutdato state

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
    ledige: {
      border: '0.5px solid black',
      width: '75%',
      margin: '0 auto',
      height: '370px',
      borderRadius: '10px',
      padding: '40px',
    },
    button: {
      marginTop: '20px',
    },
  };

  return (
    <>
      <NavBar />
      <div style={styles.container}>
        <div style={styles.tid}>
          <Title order={2}>Hvornår vil du resevere?</Title>
          <div style={{ marginTop: '20px' }}>
            {/* Fra datetimepicker */}
            <DateTimePicker
              placeholder="Vælg starttidspunkt"
              label="Fra tidspunkt"
              value={startDate}
              onChange={setStartDate}
              withAsterisk
            />
            {/* Til datetimepicker */}
            <DateTimePicker
              placeholder="Vælg sluttidspunkt"
              label="Til tidspunkt"
              value={endDate}
              onChange={setEndDate}
              withAsterisk
              minDate={startDate || undefined} // Gør sluttidspunktet afhængigt af starttidspunktet
              style={{ marginTop: '20px' }}
            />
          </div>
        </div>
        <div style={styles.ledige}>
          <Title order={2}>Ledige lokaler</Title>
          <Text>For valgte tidsrum</Text>
          <div style={styles.ledigeContent}>
            {/* Her kan du vise de tilgængelige lokaler */}
          </div>
        </div>
        <Link to="/calendar">
          <Button
            variant="filled"
            color="#748FFC"
            size="lg"
            radius="xl"
            style={styles.button}
          >
            TILBAGE
          </Button>
        </Link>
      </div>
    </>
  );
}
