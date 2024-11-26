import React from 'react'
import { Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';


export default function Callender2() {
  return (
    <div>
      <Title order={2} style={{ color: '#4C6EF5' }}>Vælg dato og lokale</Title>
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
