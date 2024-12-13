import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router
import NavBar from '../components/NavBar';
import { Calendar } from '@mantine/dates';
import { Modal, Button, Title, Text } from '@mantine/core';
import { IconHome, IconUser, IconLogout } from '@tabler/icons-react';
import Callendar from '../components/Callendar'


export const Route = createLazyFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
    const container = {
      display: 'flex', // Aligns components side by side
      justifyContent: 'center', // Centers the components horizontally
      alignItems: 'center', // Aligns components at the top
      flexDirection: 'column',
      gap: '25px', // Adds spacing between the components
      marginTop: '80px',
    } 

    return (
      <>
        <NavBar />
        <div style={container}>
          <Title order={2}>Vælg en dato</Title>
          <Callendar />
          <Link to="/resevere"><Button variant="filled" color="#364FC7" size="lg" radius="xl" >VÆLG DATO</Button></Link>
          <Link to="/philip"><Button variant="filled" color="#748FFC" size="lg" radius="xl" style={({ marginRight: "1200px" })} >TILBAGE</Button></Link>
        </div>
      </>
    );
  }
  
