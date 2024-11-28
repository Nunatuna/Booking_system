import React from 'react';
import PotentialTimeslots from './PotentialTimeslots';

function LokalerTid({ selectedRoom, selectedDate }) {
  const styles = {
    // card: {
    //   padding: '20px',
    //   border: '1px solid lightgrey',
    //   borderRadius: '10px',
    //   backgroundColor: '#FFFFFF',
    //   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    // },
    message: {
      fontSize: '16px',
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.card}>
      {/* Vis besked, hvis der mangler enten selectedRoom eller selectedDate */}
      {!selectedRoom || !selectedDate ? (
        <p style={styles.message}>Intet Lokale eller Dato valgt</p>
      ): (
        <>
          <h3>Valgt lokale: {selectedRoom.Room_name}</h3>
          <p>Valgt dato: {selectedDate.toLocaleDateString()}</p>
          <PotentialTimeslots selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />
        </>
      )}
    </div>
  );
}

export default LokalerTid;
