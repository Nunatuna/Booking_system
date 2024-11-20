import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import NyBooking from '../components/NewBooking';
import LedigeLokaler from '../components/LedigeLokaler';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';

export const Route = createLazyFileRoute('/philip')({
  component: RouteComponent,
});

function RouteComponent() {
    return (
<div>
    <div style={styles.hejallan}>
    <Title style={{margin: 0, color: '#364FC7'}} order={1}>Velkommen tilbage, Allan!</Title>
    <Text style={{color:'#364FC7'}} size="md">Torsdag, 14. November</Text>
    </div>
      <div style={styles.container}>
        <div style={styles.component}>
          <NyBooking />
        </div>
        <div style={styles.component}>
          <LedigeLokaler />
        </div>
      </div>
</div>
     
    );
  }
  

  const styles = {
    container: {
      display: 'flex', // Aligns components side by side
      // justifyContent: 'center', // Centers the components horizontally
      alignItems: 'flex-start', // Aligns components at the top
      gap: '40px', // Adds spacing between the components
      // padding: '20px',
      paddingLeft: '10%',
    },
    component: {
      flex: '1 1 45%', // Ensures both components take up 45% of the width and adjust for smaller screens
      maxWidth: '500px', // Limits how wide each component can grow
    },
    hejallan: {
      paddingLeft: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  };
  

export default RouteComponent;
