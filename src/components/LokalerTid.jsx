import React from 'react'
import PotentialTimeslots from './PotentialTimeslots'
function LokalerTid({ selectedRoom, selectedDate }) {


  const styles = {
    card: {
      padding: '20px',
      border: '1px solid lightgrey',
      borderRadius: '10px',
      marginTop: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };
  if (!selectedRoom || !selectedDate) {
    return(
    <div> <h1>Ingen lokale eller dato valgt</h1></div>)
  }
  return (
    <div style={styles.card}>
      <h3>Valgt lokale: {selectedRoom.Room_name}</h3>
      <p>Valgt dato: {selectedDate.toLocaleDateString()}</p>
      <PotentialTimeslots /> {/* Her vises de potentielle tidsrum */}

    </div>
  );
}
export default LokalerTid;