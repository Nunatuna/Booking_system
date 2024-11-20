import React from 'react';

function NyBooking() {
  const handleBookingClick = () => {
    alert("Booking initiated!"); // Replace this with your booking logic
  };

  return (
    // velkommen tilbage er replaceable, Nybooking her 
    <div style={styles.container}>
      <div style={styles.bookingCard}>
        <p style={styles.text}>Ny booking?</p>
        <button style={styles.button} onClick={handleBookingClick}>
          BOOK
        </button>
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
    backgroundColor: '#E3F2FD',
    padding: '10%',
    borderRadius: '10px',
    display: 'inline-block',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '18px',
    color: '#2E3A59',
    marginBottom: '10px',
  },
  button: {
    fontSize: '16px',
    backgroundColor: '#3F51B5',
    color: '#FFFFFF',
    padding: '10px 30px',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
  },
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

