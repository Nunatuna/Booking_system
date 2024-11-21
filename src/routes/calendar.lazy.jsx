import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router
import NavBar from '../components/NavBar';
import { Calendar } from '@mantine/dates';
import { Modal, Button, Title, Text } from '@mantine/core';
import { IconHome, IconUser, IconLogout } from '@tabler/icons-react';


export const Route = createLazyFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
    const styles = {
      container: {
        display: 'flex',            
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center',       
        height: '700px',           
        margin: '0 auto',
      },
    };
  
    return (
      <>
        <NavBar />
        <div style={styles.container}>
          <Title order={2}>Vælg dato</Title>
          <Calendar />
          <Link to="#">
            <Button variant="filled" color="#748FFC" size="xl" radius="xl">Vælg dato</Button>
          </Link>
          <br />
          <Link to="#">
            <Button variant="filled" color="#748FFC" size="xl" radius="xl">Tilbage</Button>
          </Link>
        </div>
      </>
    );
  }
  
