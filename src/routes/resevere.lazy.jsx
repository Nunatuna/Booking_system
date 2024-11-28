import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import NavBar from '../components/NavBar';
import Lokaler from '../components/Lokaler';
import LokalerTid from '../components/LokalerTid';
import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router


export const Route = createLazyFileRoute('/resevere')({
  component: RouteComponent,
});

function RouteComponent() {
 const styles = {
  container: {
   display: 'flex',
   justifyContent: 'center',
   allignItems: 'center',
   height: 'fit-content',
   gap: '50px',

   marginBottom: '20px',
 },
 btncum: {
   display: 'flex',
   justifyContent: 'space-between',
   width: '65%',
   margin: '0 auto',
 }
}
 
  return (
  <>
    <NavBar />
    <div style={styles.container}>
      <Lokaler />
    </div>
    <div style={styles.btncum}>
      <Link to="/philip"><Button variant="filled" color="#364FC7" size="lg" radius="xl">TILBAGE</Button></Link>
    </div>
  </>
  )
  };

