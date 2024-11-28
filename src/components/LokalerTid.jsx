import React from 'react';
import PotentialTimeslots from './PotentialTimeslots';

function LokalerTid({ selectedRoom, selectedDate, selectedSlot, setSelectedSlot }) {
  const styles = {
    message: {
      fontSize: '16px',
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div>
      {/* Vis besked, hvis der mangler enten selectedRoom eller selectedDate */}
      {!selectedRoom || !selectedDate ? (
        <p style={styles.message}>Intet Lokale eller Dato valgt</p>
      ) : (
        <>
          <h3>Valgt lokale: {selectedRoom.Room_name}</h3>
          <p>Valgt dato: {selectedDate.toLocaleDateString()}</p>
          {/* Send selectedSlot og setSelectedSlot videre til PotentialTimeslots */}
          <PotentialTimeslots selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot} />
        </>
      )}
    </div>
  );
}

export default LokalerTid;
