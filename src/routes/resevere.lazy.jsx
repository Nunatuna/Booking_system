import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar';
import { Button, Title, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router

export const Route = createLazyFileRoute('/resevere')({
  component: RouteComponent,
})

function RouteComponent() {
 const styles = {
   container: {
     display: 'flex', // Aligns components side by side
     flexDirection: 'column',
     alignItems: 'right',
     justifyContent: 'center',
     margin: '0 auto',
     marginTop: '10px',
     height: '700px',
     gap: '20px',
   },
   tid: {
      border: '0.5px solid black',
      width: '75%',
      margin: '0 auto',
      height: '200px',
      borderRadius: '10px',
      padding: '40px',
   },
   ledige: {
      border: '0.5px solid black',
      width: '75%',
      margin: '0 auto',
      height: '370px',
      borderRadius: '10px',
      padding: '40px',
   },
 }
  
  return (
    <>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.tid}>
            <Title order={2}>Hvornår vil du resevere</Title>
            <div style={styles.tidContent}>
                her er der tidsrum component
            </div>
          </div>
          <div style={styles.ledige}>
            <Title order={2}>Ledige lokaler</Title>
            <Text>For valgte tidsrum</Text>
            <div style={styles.ledigeContent}>
              her er der ledige booking lokaler component
            </div>
          </div>
          <Link to="/calendar"><Button variant="filled" color="#748FFC" size="lg" radius="xl" style={({ marginLeft: '190px' })}>TILBAGE</Button></Link>
        </div>
    </>
  )
}
