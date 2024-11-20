import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import NyBooking from '../components/NewBooking';
import LedigeLokaler from '../components/LedigeLokaler';

export const Route = createLazyFileRoute('/philip')({
  component: RouteComponent,
});

function RouteComponent() {
    return (
<div>
    <div style={styles.hejallan}>
        <h1>Velkommen tilbage, Allan!</h1>
        <p style={{margin:'inherit'}}>Torsdag, 14. November</p>
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
      justifyContent: 'center', // Centers the components horizontally
      alignItems: 'flex-start', // Aligns components at the top
      gap: '20px', // Adds spacing between the components
      padding: '20px',
    },
    component: {
      flex: '1 1 45%', // Ensures both components take up 45% of the width and adjust for smaller screens
      maxWidth: '500px', // Limits how wide each component can grow
    },
    hejallan: {
      paddingLeft: '20%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  };
  

export default RouteComponent;
