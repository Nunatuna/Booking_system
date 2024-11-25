import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Button, Image, Title, Text } from '@mantine/core'
import CPHLogo from '../components/CPHLogo';
import LogIn from '../components/LogIn';


export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const styles = {
    navbar: {
      padding: '20px',
    },
    container:{
      display: 'flex',
      justifyContent: 'center',
      allignItems: 'center',
      backgroundColor: '#EDF2FF',
    }
  }
  
  return (
    <>
      <div style={styles.navbar} >
          <CPHLogo />
      </div>
      <div style={styles.container}>
        <image></image>
      </div>
    </>
  )
}
