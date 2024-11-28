import React from 'react';
import TimeslotGenerator from './TimeslotGenerator';

export default function PotentialTimeslots() {
  return (
    <div>
      <h2>Vælg et tidsrum:</h2>
      <TimeslotGenerator startHour={8} endHour={16} interval={2} />
    </div>
  );
}
