import React from 'react'
import { Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';


const [selectedDate, setSelectedDate] = useState(null);


//Benytter os af date picker inde fra mantine, med en "onChange={setSelectedDate}" funktion, for at kunne kommunikere med vores Clickable
export default function Callender2() {
  return (
    <div> 
      <DatePicker
        label="Dato"
        placeholder="Velg dato"
        valueFormat="DD-MM-YYYY"
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}
