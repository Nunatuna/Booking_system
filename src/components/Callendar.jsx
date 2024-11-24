import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from '@mantine/dates';

function Callendar() {
  //styling af calendar
  const style = {
    Calendar: {
      width: 'fit-content', // Calendar will adjust its width to fit the content
      height: 'fit-content', // Calendar will adjust its height to fit the content
      padding: '30px', // Add padding inside the calendar
      borderRadius: '7px', // Round the corners of the calendar
      border: '0.4px solid black', // Set a thin border around the calendar
      margin: 'auto', // Center the calendar horizontally on the page
      backgroundColor: 'white', // Set the background color of the calendar
      filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))', // Subtle shadow at the bottom
    },
  };

  // cons er kopiret direkte fra mantime. I mantime var det en en tsx fil, så jeg bedte chatgpt at omskrive det til jsx fil så det gad at virke.
  // jeg har også ændret det til at man kun kan vælge en dag.
  const [selected, setSelected] = useState([]); // Use plain array for selected dates

  // Function to handle date selection
  const handleSelect = (date) => {
    // Check if the clicked date is already selected
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    
    if (isSelected) {
      // If the date is already selected, remove it from the list
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 1) {
      // If no date is selected, add the clicked date to the selected dates array
      setSelected((current) => [...current, date]);
    }

    // Alert that a date is selected
    alert(`You picked: ${dayjs(date).format('MMMM D, YYYY')}`); // Show the selected date in the format "Month Day, Year"
  };

  return (
    <div style={style.Calendar}>
      {/* Render the Calendar component */}
      <Calendar
        size="xl" // Set the calendar size to extra large
        getDayProps={(date) => ({
          // Check if the current date is selected
          selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
          // Add an onClick handler to select the date when clicked
          onClick: () => handleSelect(date),
        })}
      />
    </div>
  );
}

export default Callendar;
