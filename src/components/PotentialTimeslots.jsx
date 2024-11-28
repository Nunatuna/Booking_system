import React from 'react';
import TimeslotGenerator from './TimeslotGenerator';

export default function PotentialTimeslots({ selectedSlot, setSelectedSlot }) {
  return (
    <div>
      <h2>Vælg et tidsrum:</h2>
      {/* Send selectedSlot og setSelectedSlot videre til TimeslotGenerator */}
      <TimeslotGenerator
        startHour={8}
        endHour={16}
        interval={2}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
    </div>
  );
}
