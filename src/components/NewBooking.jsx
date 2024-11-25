import React from 'react';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router

function NyBooking() {
  const handleBookingClick = () => {
    // alert("Booking initiated!"); // Replace this with your booking logic
    
  };

  return (
    // velkommen tilbage er replaceable, Nybooking her 
    <div style={styles.container}>
      <div style={styles.bookingCard}>
      <Title style={styles.text} order={2}>Ny booking?</Title>
      <Link to="/calendar">
      <Button style={styles.button} onClick={handleBookingClick} variant="filled" color="indigo" size="lg" radius="xl">BOOK</Button>
      </Link>
      </div>
    </div>
    
  );
}
//Lille styling hihihi
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },

  bookingCard: {
    backgroundColor: '#DBE4FF',
    padding: '10%',
    borderRadius: '10px',
    display: 'inline-block',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '528px',
    minHeight: '530px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '160px',
    height: '35px',

    color: '#4C6EF5',
    marginBottom: '10px',
  },

// Skiftet button // 
  // button: {
  //   width: '160px',
  //   height: '64px',
  //   backgroundColor: '#3F51B5',
  //   color: '#FFFFFF',
  //   padding: '10px 30px',
  //   border: 'none',

  //   cursor: 'pointer',
  // },



    // heading: {
  //   fontSize: '24px',
  //   color: '#2E3A59',
  // },
  // date: {
  //   fontSize: '16px',
  //   color: '#607D8B',
  //   margin: '10px 0',
  // },
        /* <h1 style={styles.heading}>Velkommen tilbage, Allan!</h1>
      <p style={styles.date}>Torsdag, 14. november</p> */
};

export default NyBooking;

